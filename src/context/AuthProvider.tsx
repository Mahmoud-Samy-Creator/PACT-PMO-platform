import { useContext, createContext,
        useState, useCallback,
        useEffect, ReactNode, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import type { User_Credintials, LoginResponse_TP, AuthContext_TP } from "../Types";

axios.defaults.withCredentials = true;

const API_BASE_URL: string = "https://game.telast.tech/api";

// Api calls
const loginApiReq = (loginData: User_Credintials) => axios.post(`${API_BASE_URL}/auth/login/`, loginData);
const logOutApiReq = () => axios.post(`${API_BASE_URL}/auth/logout/`);
const refreshApiReq = () => axios.post(`${API_BASE_URL}/auth/token/refresh/`, {})

const AuthContext = createContext<AuthContext_TP | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [accessToken, setAccessToken] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    // Expiration
    const [accessExpiration, setAccessExpiration] = useState<Date | null>(null);
    const refreshTimeoutRef = useRef<number | undefined>(undefined);
    
    // ================== Schedule Refresh Function ==================
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const scheduleTokenRefresh = (expirationTime: string) => {
        const expirationDate = new Date(expirationTime);
        const currentTime = new Date();
        const refreshTime = expirationDate.getTime() - currentTime.getTime() - 60 * 1000;

        if (refreshTime > 0) {
            // console.log(`Scheduling token refresh in ${refreshTime / 1000} seconds`);

            // Clear any existing timeout
            if (refreshTimeoutRef.current) {
                clearTimeout(refreshTimeoutRef.current);
            }

            refreshTimeoutRef.current = setTimeout(() => {
                refreshAccessToken();
            }, refreshTime);
        }
    };


    // ================== Login ==================
    const { mutate: loginMutate } = useMutation( loginApiReq,
        {
            onSuccess: (res: AxiosResponse<LoginResponse_TP>) => {
                const resData: LoginResponse_TP = res.data;
                if (resData.access) {
                    setAccessToken(resData.access);
                    setIsLoading(false);


                    // CASHING USER INFO
                    queryClient.setQueryData(['userInfo'], resData.user);

                    // setUserInfo(resData.user);
                    localStorage.setItem("userRole", resData.user.role);
                    localStorage.setItem("userInfo", JSON.stringify(resData.user));

                    // Expiration refresh
                    setAccessExpiration(new Date(resData.access_expiration));
                    scheduleTokenRefresh(resData.access_expiration);
                    navigate("/projects");
                } else {
                    console.error("Invalid login response format:", resData);
                }
            },
            onError: (err: AxiosError) => {
                console.log("Login failed:", err);
                setIsLoading(false);
            }
        }
    );

    const logIn = (loginCredentials: User_Credintials, setInvalid: (value: boolean) => void) => {
        setIsLoading(true);
        loginMutate(loginCredentials, {
            onError: () => {
                setInvalid(true);
                setIsLoading(false);
            }
        });
    };

    // ================== LogOut ==================
    const { mutate: logoutMutate } = useMutation( logOutApiReq,
        {
            onSuccess: () => {
                setAccessToken("");
                localStorage.clear();
                setAccessExpiration(null);

                // Clear refresh timeout on logout
                if (refreshTimeoutRef.current) {
                    clearTimeout(refreshTimeoutRef.current);
                }
                queryClient.removeQueries(['userInfo']);
                navigate("/login", { replace: true });
            },
            onError: (err: AxiosError) => {
                console.log("Logout failed:", err);
            }
        }
    );

    const logOut = () => {
        logoutMutate();
    };

    // ================== Refresh Token ==================
    const { mutate: refreshMutate } = useMutation( refreshApiReq,
        {
            onSuccess: (response: AxiosResponse<LoginResponse_TP>) => {
                const resData = response.data;
                if (resData.access) {
                    setAccessToken(resData.access);

                    // Expiration
                    setAccessExpiration(new Date(resData.access_expiration));
                    scheduleTokenRefresh(resData.access_expiration);

                    setIsLoading(false);
                } else {
                    console.error("Invalid response format during refresh:", resData);
                    setIsLoading(false);
                }
            },
            onError: (error: AxiosError) => {
                console.error("Failed to refresh access token:", error);
                if (error.response?.status === 401 || error.response?.status === 403) {
                    // console.log("Logging out due to invalid or expired refresh token");
                    setAccessToken("");

                    // Expiration
                    setAccessExpiration(null);

                    navigate("/login");
                    setIsLoading(false);
                }
            }
        }
    );

    const refreshAccessToken = useCallback(() => {
        setIsLoading(true);
        refreshMutate();
    }, [refreshMutate]);

    useEffect(() => {
        refreshAccessToken();
    }, [refreshAccessToken]);

    useEffect(() => {
        if (accessExpiration) {
            scheduleTokenRefresh(accessExpiration.toISOString());
        }
    }, [accessExpiration, scheduleTokenRefresh]);

    useEffect(() => {
        return () => {
            if (refreshTimeoutRef.current) {
                clearTimeout(refreshTimeoutRef.current);
            }
        };
    }, []);
    return (
        <AuthContext.Provider value={{ logIn, logOut, accessToken, refreshAccessToken, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = (): AuthContext_TP => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

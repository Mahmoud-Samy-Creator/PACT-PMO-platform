import { useEffect } from 'react';
import { createContext, useState } from 'react';
import { useAuth } from './AuthProvider';
import type { UserRole_TP , AllRoles_TP } from '../Types';
import { GlobalContextType, Project_TP } from '../Types';
import axios from 'axios';

const API_BASE_URL: string = "https://game.telast.tech/api";

// Create the context
export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: {children: React.ReactNode}) => {
    const auth = useAuth();

    // Projects state
    const [allProjects, setAllProjects] = useState<Project_TP[]>([]);
    const [next, setNext] = useState<string | null>(null);
    const [prev, setPrev] = useState<string | null>(null);
    const [usersList, setUsersList] = useState({});
    const [worksitesTypes, setWorksitesTypes] = useState([]);

    // ================ Get Worksite types =================
    const getWorksitesTypes = async () => (await axios.get(`${API_BASE_URL}/v1/portal/worksite_types/`)).data.results;

    // ================= Get Existing Projects =================
    const getExistingProjects = async () => (await axios.get(`${API_BASE_URL}/v1/worksites/worksite/?page=1&size=5`)).data;

    // ================= Get Users List =================
    const getUsersList = async () => {
        const { data } = await axios.get(`${API_BASE_URL}/v1/users/user_list/`);

        const allRoles: AllRoles_TP = {
            "inspectors": data.results.filter((user: UserRole_TP ) => user.role === "inspector"),
            "planningManager": data.results.filter((user: UserRole_TP ) => user.role === "planning_manager"),
            "contractors": data.results.filter((user: UserRole_TP ) => user.role === "contractor"),
            "storageManager": data.results.filter((user: UserRole_TP ) => user.role === "storage_manager"),
            "projectManager": data.results.filter((user: UserRole_TP ) => user.role === "project_manager"),
            "operatingManager": data.results.filter((user: UserRole_TP ) => user.role === "operating_manager"),
            "mmg": data.results.filter((user: UserRole_TP ) => user.role === "mmg")
        }
        return allRoles;
    }

    useEffect(() => {
        const fetchUserInfo = async () => {
            if (auth?.accessToken) {
                try {
                    const allRules = await getUsersList();
                    const worksitesTypes = await getWorksitesTypes();
                    const { results: allProjects, next: next, previous: prev } = await getExistingProjects();
                    setAllProjects(allProjects);
                    setNext(next);
                    setPrev(prev);
                    setUsersList(allRules);
                    setWorksitesTypes(worksitesTypes);
                } catch (error) {
                    console.error("Error fetching user info", error);
                }
            } else {
                console.log("No access token found");
            }
        };

        fetchUserInfo();
    }, [auth.accessToken]);
    // ================= Get User Info =================
    return (
        <GlobalContext.Provider value={{ allProjects, setAllProjects, usersList, worksitesTypes, next, setNext, prev, setPrev }}>
            {children}
        </GlobalContext.Provider>
    );
};
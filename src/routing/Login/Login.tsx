import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import type { User_Credintials } from "../../Types";
import logo from "../../assets/Logo 2.png";
import { useAuth } from "../../context/AuthProvider";

function Login() {
const [loginCredentials, setLoginCrdentials] = useState<User_Credintials>({
    email: "",
    password: "",
});
const [invalid, setInvalid] = useState(false);
const auth = useAuth();

function loginHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    auth.logIn(loginCredentials, setInvalid);
}

return (
    <div className="login-component flex justify-center h-screen items-center bg-gray-300 flex-col">
    {invalid && (
        <div className="border w-[550px] text-center py-[10px] mb-[50px] rounded-[7px] border-[#ccc] bg-[#ff5858] text-white font-bold">
        Invalid email or password
        </div>
    )}
    <div className="text-center w-[90%] max-w-[550px]">
        <img
        className="mt-[10px] mb-[30px] mx-auto"
        src={logo}
        alt="logo"
        />
        <div className="form-div">
        <form
            onSubmit={loginHandler}
            className="py-[20px] border-[1.5px] border-[#e0e0e0] shadow-[0px_48px_100px_0px_rgba(17,12,46,0.10)]"
        >
            <span>Welcome to the PMO</span>
            <div className="">
            <input
                onChange={(e) =>
                setLoginCrdentials({
                    ...loginCredentials,
                    email: e.target.value,
                })
                }
                className="w-[72%] my-[10px] h-[40px] pl-[10px] border-[0.3px] border-[#e3e3e3] outline-none transition ease transition-delay-[.4s] focus:border-[0.5px] focus:border-[#0098b3]"
                type="email"
                placeholder="Email"
            />
            <div className="bg-[#e3e3e3] text-center content-center inline-block h-[40px] border-[#e0e0e0] w-[8%]">
                <FontAwesomeIcon icon={faUser} />
            </div>
            </div>
            <div className="">
            <input
                onChange={(e) =>
                setLoginCrdentials({
                    ...loginCredentials,
                    password: e.target.value,
                })
                }
                className="w-[72%] my-[10px] h-[40px] pl-[10px] border-[0.3px] border-[#e3e3e3] outline-none transition ease transition-delay-[.4s] focus:border-[0.5px] focus:border-[#0098b3]"
                type="password"
                placeholder="Password"
            />
            <div className="bg-[#e3e3e3] text-center content-center inline-block h-[40px] border-[#e0e0e0] w-[8%]">
                <FontAwesomeIcon icon={faLock} />
            </div>
            </div>
            <input
                type="submit"
                value="Log in"
                className="text-white bg-[#005c6c] w-[80%] h-[40px] py-[10px] my-[10px] px-auto mx-auto border-none cursor-pointer transition duration-200 hover:bg-[#0089a1]"
            />
        </form>
        </div>
    </div>
    </div>
);
}

export default Login;

import { Layout_TP } from "../../Types";
import Notifications from "./Notifications";
import Sidebar from "./Sidebar";


export default function Layout({children}:Layout_TP) {
    return (
        <div className="flex bg-[#F2F0F9]">
            <Sidebar />
            {children}
            <Notifications />
        </div>
    )
}

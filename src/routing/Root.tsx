import { Outlet } from "react-router-dom";
import Layout from "../components/organisms/Layout";

export default function Root() {
    return (
        <div className="relative">
            <Layout>
                <Outlet />
            </Layout>
        </div>
    )
} 

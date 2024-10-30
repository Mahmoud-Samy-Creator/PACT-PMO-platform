import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import PageLoader from "../components/Loaders/PageLoading/CostumLoader";

const ProtectRoutes = () => {
    const auth = useAuth();

    if (auth.isLoading) {
        return <PageLoader />;
    }

    if (!auth.accessToken) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
};

export default ProtectRoutes;

import { Navigate, Outlet } from "react-router-dom";


const ComponentGaurd = ({ allowedRules, children }: { allowedRules: string[], children: React.ReactNode }) => {
  const userRule = localStorage.getItem("userRole");


  if (allowedRules?.includes(userRule ?? '')) {
    return children;
  } else {
    return <></>;
  }
};
const RouteGaurd = ({ allowedRules }: { allowedRules: string[] }) => {
  const userRole = localStorage.getItem("userRole");

  if (!allowedRules?.includes(userRole ?? '')) {
    return <Navigate to="/unAuth" />;
  } 
  return <Outlet />
};

export {ComponentGaurd, RouteGaurd}
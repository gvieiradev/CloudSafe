import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/authContext";
import LoadingPage from "./pages/LoadingPage";

function ProtectedRoute() {
    const {loading, isAuthenticated} = useAuth();

    if(loading) return <LoadingPage/>;
    if (!loading && !isAuthenticated) return <Navigate to={"/login"} replace/>

    return <Outlet/>
}

export default ProtectedRoute;
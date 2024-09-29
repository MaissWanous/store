
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Cookies from "universal-cookie";

export default function RequireAuth(params) {
    const cookie = new Cookies();
    const token = cookie.get("Bearer")
    //allow to move to previous page with the return button
    const location = useLocation()
    return token ? (<Outlet />) :
        (<Navigate state={{ from: location }} replace to="/register" />)
}


import { useContext } from "react";
import { User } from "./context/context";
import axios from "axios";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function RequireAuth(params) {
    const user = useContext(User)
    //allow to move to previous page with the return button
    const location = useLocation()
    return user.auth.token ? (<Outlet />) :
        (<Navigate state={{ from: location }} replace to="/register" />)
}


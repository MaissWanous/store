import React from 'react';
import { Link } from "react-router-dom"
import logo from "../img/logo.png"
import Cookies from 'universal-cookie';

export default function Header() {
    const cookie = new Cookies();
    let token = cookie.get("Bearer");
    function logOut() {
        window.location.pathname = "/register"
        cookie.remove("Bearer")
    }
    return (<div className="container">
        <nav
            className="d-flex">
            <img src={logo} alt="لوغو الموقع" className="logo" />
            {!token ? <div className="d-flex">
                <Link to="/SignUp" style={{ textAlign: "center" }} className="register-nav" >انشاء حساب </Link>
                <Link to="/register" style={{ textAlign: "center" }} className="register-nav" >تسجيل</Link>
            </div> : <>
                <div className="register-nav" onClick={logOut}>تسجيل الخروج</div>
            </>

            }
        </nav>
    </div>)

}
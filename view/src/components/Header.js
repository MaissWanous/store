import { Link } from "react-router-dom"
import logo from "../img/logo.png"
export default function Header() {
    return (<div className="container">
        <nav className="d-flex">
            <img src={logo} alt="لوغو الموقع" className="logo" />
            <div className="d-flex">
                <Link to="/SignUp" style={{ textAlign: "center" }} className="register-nav" >انشاء حساب </Link>
                <Link to="/register" style={{ textAlign: "center" }} className="register-nav" >تسجيل</Link>
            </div>
        </nav>
    </div>)

}
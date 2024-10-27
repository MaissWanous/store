import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import logo from "../img/logo.png"
import Cookies from 'universal-cookie';
import { FaArrowAltCircleRight, FaBars, FaEye, FaHome, FaLink, FaQuestionCircle, FaUser } from 'react-icons/fa';
import Swal from 'sweetalert2';

export default function Header() {
    const cookie = new Cookies();
    let tokenc = cookie.get("Bearer");
    const [token, setToken] = useState(tokenc);
    useEffect(() => {
        setToken(tokenc)
    }, [])
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    function logOut() {
        Swal.fire({
            title: "هل تريد تسجيل الخروج ؟",
            text: "يمكنك إلغاء العملية إذا كنت غير متأكد.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'تأكيد',
            cancelButtonText: 'الغاء',
            customClass: {
                confirmButton: 'btn btn-danger',
                cancelButton: 'btn '
            },
            buttonsStyling: false
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.pathname = "/register"
                cookie.remove("Bearer")

            }
        });
    }
    function toggleSidebar() {
        setIsSidebarOpen(!isSidebarOpen);
    }

    function closeSidebar() {
        setIsSidebarOpen(false);
    }

    return (<div className="container">
        <nav
            className="d-flex">
            <img src={logo} alt="لوغو الموقع" className="logo" />
            {!token ? <div className="d-flex">
                <Link to="/SignUp" style={{ textAlign: "center" }} className="register-nav" >انشاء حساب </Link>
                <Link to="/register" style={{ textAlign: "center" }} className="register-nav" >تسجيل</Link>
            </div> : <>
                <FaBars className='icon_bar' onClick={toggleSidebar} />
                {isSidebarOpen && (
                    <div className="sidebar">
                        <div className="sidebar-content">
                            <Link to="/" className='sidebar-element' ><FaHome className='icon' /> الصفحة الرئيسية</Link>
                            <Link to="/profile" className='sidebar-element'><FaUser className="icon" />  الحساب الشخصي </Link>
                            <Link to="/userRese" className='sidebar-element'> <FaEye className="icon" />  الحجوزات</Link>
                            <Link className='sidebar-element' ><FaLink className='icon' />  shein.com</Link>
                            <Link to="/faq" className='sidebar-element'><FaQuestionCircle className="icon" />  مساعدة</Link>
                            <div className='sidebar-element' onClick={logOut}><FaArrowAltCircleRight className="icon" />  تسجيل الخروج</div>

                        </div>
                        <div className="overlay" onClick={closeSidebar}></div>
                    </div>
                )}
            </>

            }
        </nav>
    </div>)

}
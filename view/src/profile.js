import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import "./css/profile.css"
import { FaUser, FaPhone, FaEnvelope, FaUserCircle } from 'react-icons/fa';

export default function Profile() {
    const cookie = new Cookies();
    let token = cookie.get("Bearer");
    console.log(token)

    const [userData, setUserData] = useState({
        username: '',
        phone: '',
        email: ''
    });
    const [isChang, setIsChang] = useState(false);

    useEffect(() => {

        axios.get('http://localhost:2000/profile', {
            headers: {
                authorization: 'Bearer ' + token
            }
        }).then(response => {
            setUserData({
                username: response.data.user.username,
                phone: response.data.user.phone,
                email: response.data.user.email
            });
        })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, [token]);
    function submit() {
      const a = window.confirm("هل تريد تعديل معلوماتك الشخصية؟");
      console.log(a)
        if (a) {
            axios.post('http://localhost:2000/updateUser', {
                username: userData.username
                , phone: userData.phone,
                headers: {
                    authorization: 'Bearer ' + token
                }
            }).catch(error => {
                console.error('Error fetching user data:', error);
            });
        }
    }
    return (
        <div className="container">
            <FaUserCircle className='user' />
            <div className="parent">
                <div className="register">
                    <div className="form">
                        <label className="label" htmlFor="username"><FaUser className="icon" /> الاسم</label>

                        <input
                            type="text"
                            id="username"
                            value={userData.username}
                            onChange={(e) => {
                                setIsChang(true)
                                setUserData({ ...userData, username: e.target.value })
                            }}
                        />
                        <label className="label" htmlFor="phone"> <FaPhone className="icon" /> رقم الموبايل</label>

                        <input
                            type="text"
                            id="phone"
                            value={userData.phone}
                            onChange={(e) => {
                                setIsChang(true)
                                setUserData({ ...userData, phone: e.target.value })
                            }}
                        />


                        <label className="label" htmlFor="email"><FaEnvelope className="icon" /> البريد الإلكتروني</label>

                        <input
                            type="email"
                            id="email"
                            value={userData.email}
                            disabled
                        />
                        <div style={{ textAlign: "center" }}>
                            <button
                                style={{
                                    background: isChang ? "var(--main-color)" : "gray",
                                    cursor: isChang ? "pointer" : "not-allowed"

                                }}
                                onClick={submit}
                                disabled={!isChang}
                                type="submit">تعديل</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

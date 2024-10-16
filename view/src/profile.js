import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { FaUser, FaPhone, FaEnvelope } from 'react-icons/fa'; 

export default function Profile() {
    const cookie = new Cookies();
    let token = cookie.get("Bearer");
    console.log(token)

    const [userData, setUserData] = useState({
        name: '',
        phone: '',
        email: ''
    });

    useEffect(() => {

        axios.get('http://localhost:2000/profile', {
            headers: {
                authorization: 'Bearer ' + token
            }
        })

            .then(response => {
                console.log(response.data)
                setUserData({
                    name: response.data.user.username,
                    phone: response.data.user.phone,
                    email: response.data.user.email
                });
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, [token]);

    return (
        <div className="container">
            <div className="parent">
                <div className="register">
                    <div className="form">
                        <label className="label" htmlFor="name">الاسم</label>
                        <FaUser className="icon" />
                        <input
                            type="text"
                            id="name"
                            value={userData.name}
                            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                        />
                        <label className="label" htmlFor="phone">رقم الموبايل</label>
                        <FaPhone className="icon" />
                        <input
                            type="text"
                            id="phone"
                            value={userData.phone}
                            onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                        />


                        <label className="label" htmlFor="email">البريد الإلكتروني</label>
                        <FaEnvelope className="icon" />
                        <input
                            type="email"
                            id="email"
                            value={userData.email}
                            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

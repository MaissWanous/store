import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { FaUser, FaPhone, FaEnvelope } from 'react-icons/fa'; // استيراد الأيقونات

export default function Profile() {
    const [userData, setUserData] = useState({
        name: '',
        phone: '',
        email: ''
    });

    useEffect(() => {
        // استدعاء API لجلب المعلومات الشخصية للمستخدم
        axios.get('/profile') // تأكد من تعديل الرابط حسب API الخاص بك
            .then(response => {
                setUserData({
                    name: response.data.name,
                    phone: response.data.phone,
                    email: response.data.email
                });
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, []);

    return (
        <div className="container">
            <div className="parent">
                <div className="register">
                    <div className="form">
                        <label className="label" htmlFor="name">الاسم</label>
                        {/* <FaUser className="icon" /> */}
                        <div 
                            type="text" 
                            id="name" 
                            value={userData.name} 
                            onChange={(e) => setUserData({...userData, name: e.target.value})} 
                        />

                        <label className="label" htmlFor="phone">رقم الموبايل</label>
                        {/* <FaPhone className="icon" /> */}
                        <div 
                            type="text" 
                            id="phone" 
                            value={userData.phone} 
                            onChange={(e) => setUserData({...userData, phone: e.target.value})} 
                        />

                        <label className="label" htmlFor="email">البريد الإلكتروني</label>
                        {/* <FaEnvelope className="icon" /> */}
                        <div 
                            type="email" 
                            id="email" 
                            value={userData.email} 
                            onChange={(e) => setUserData({...userData, email: e.target.value})} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

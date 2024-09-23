import React from 'react';
import { useState } from "react";
import axios from "axios"
export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [passwordR, setPasswordR] = useState("");
    const [accept, setAccept] = useState(false);
    const [emailError, setEmailError] = useState("");
    async function submit(e) {
        let flag = true
        e.preventDefault();
        setAccept(true)
        if (name === " " || password < 8 || password !== passwordR || phone.length !== 10 || phone[0] !== '0' || phone[1] !== '9')
            flag = false;
        else flag = true
        try {
            if (flag) {
           let res=   await axios.post("http://localhost:2000/signup", {
                    username: name
                    , phone: phone
                    , email: email
                    , password: password
                })
                setEmailError("")
                console.log(res.status)
                if(res.status>=200&&res.status<300)
                    window.location.pathname="/code"
            }
        } catch (err) {
            setEmailError(err.response.status)
        }
    }
    return (<div className="container">
        <div className="parent">
            <div className="register">
                <form onSubmit={submit} >
                    <label className="label" htmlFor="name">الاسم</label>
                    <input
                        type="text"

                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                    {name === "" && accept && (
                        <p className="error">يجب ادخال اسم المستخدم</p>
                    )}
                    <label className="label" htmlFor="email">البريد الالكتروني</label>
                    <input
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    {
                        accept && emailError === 500 && <p className="error">البريد الالكتروني موجود بالفعل </p>
                    }
                    <label className="label" htmlFor="phone">رقم الموبايل</label>
                    <input
                        type="text"
                        id="phone"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    ></input>

                    {
                        accept && (phone.length !== 10 || phone[0] !== '0' || phone[1] !== '9') && (
                            <p className="error">الرجاء ادخال رقم موبايل  صحيح</p>
                        )
                    }
                    <label className="label" htmlFor="password">كلمة المرور</label>
                    <input
                        type="password"

                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    {password.length < 8 && accept && (
                        <p className="error">كلمة المرور يجب ان تكون اكبر او تساوي 8 احرف</p>
                    )}
                    <label className="label" htmlFor="Reapet password">تأكيد كلمة المرور</label>
                    <input
                        type="password"

                        id="Reapet password"
                        value={passwordR}
                        onChange={(e) => setPasswordR(e.target.value)}
                    ></input>
                    {passwordR !== password && accept && (
                        <p className="error">كلمة المرورغير متطابقة</p>
                    )}
                    <div style={{ textAlign: "center" }}>
                        <button type="submit">تسجيل</button>
                    </div>

                </form>
                <div >
                </div>

            </div>
        </div>
    </div>
    )
}
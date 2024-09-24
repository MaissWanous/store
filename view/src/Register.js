import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [accept, setAccept] = useState(false);
    async function submit(e) {
        let flag = true
        e.preventDefault();
        setAccept(true)
        if (password < 8)
            flag = false;
        else flag = true
        if (flag) {
           await axios.post("http://localhost:2000/logIn", {
                email: email
                , password: password
            })

        }

    }
    return (<div className="container">
        <div className="parent">
            <div className="register">
                <form onSubmit={submit}  >
                    <label className="label" htmlFor="email">البريد الالكتروني</label>
                    <input
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>


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
                    <Link to="/email" className="link">نسيت كلمة المرور ؟</Link>

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
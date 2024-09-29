import React, { useContext } from 'react';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import cookies from "universal-cookie"
export default function Register() {
   
    const cookie = new cookies();
    let tokenC;
    const nav = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [accept, setAccept] = useState(false);
    const [valid, setValid] = useState(null);
    async function submit(e) {
        let flag = true
        e.preventDefault();
        setAccept(true)
        if (password < 8)
            flag = false;
        else flag = true
        try {
            if (flag) {
                let res = await axios.post("http://localhost:2000/logIn", {
                    email: email
                    , password: password
                })
                setValid(res.data.message);
                if (res.data.token) {
                    let token = res.data.token;
                    tokenC = cookie.set("Bearer", token)
                    nav("/userHome")
                }


            }

        } catch (error) {
            console.log(error)
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
                    {
                        valid === -1 && <p className='error'>البريد الالكتروني المدخل غير موجود</p>
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
                    {
                        valid === 0 && (<p className="error">كلمة المرور المدخلة غير صحيحة !</p>)
                    }
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
import { useState } from "react";
//import axios from "axios";
export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordR, setPasswordR] = useState("");
    const [accept, setAccept] = useState(false);
    const [emailError, setEmailError] = useState("");
    return (<div>



        <div className="parent">
            <div className="register">
                <form >
                    <label  className="label" htmlFor="name">الاسم</label>
                    <input
                        type="text"
                        placeholder="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                    {name === "" && accept && (
                        <p className="error">username is required</p>
                    )}
                    <label className="label" htmlFor="email">الايميل</label>
                    <input
                        type="email"
                        placeholder="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    {accept && emailError === 422 && (
                        <p className="error">Email is already been taken</p>
                    )}
                    <label className="label" htmlFor="password">كلمة السر</label>
                    <input
                        type="password"
                        placeholder="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    {password.length < 8 && accept && (
                        <p className="error">password must be more than 8 char</p>
                    )}
                    <label className="label" htmlFor="Reapet password">تكرار كلمة السر</label>
                    <input
                        type="password"
                        placeholder="Reapet password"
                        id="Reapet password"
                        value={passwordR}
                        onChange={(e) => setPasswordR(e.target.value)}
                    ></input>
                    {passwordR !== password && accept && (
                        <p className="error">password does not match</p>
                    )}
                    <div style={{ textAlign: "center" }}>
                        <button type="submit">تسجيل</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}
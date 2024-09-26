import axios from "axios";
import { useState } from "react";

export default function ResetPass() {

    const [password, setPassword] = useState("");
    const [passwordR, setPasswordR] = useState("");
    const [accept, setAccept] = useState(false);
    async function submit(e) {
        let flag = true
        e.preventDefault();
        setAccept(true)
        if (password < 8 || password !== passwordR)
            flag = false;
        else flag = true
        if (flag) {
            let res = await axios.post("http://localhost:2000/resetPass", {
                password: password
            })

            console.log(res.status)
            if (res.status >= 200 && res.status < 300)
                window.location.pathname = "/register"
        }

    }
    return (
        <div className="container">
            <div className="parent">
                <div className="register">
                    <form onSubmit={submit} >
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
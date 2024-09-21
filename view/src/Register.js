import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (<div className="container">
        <div className="parent">
            <div className="register">
                <form  >
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

                    <Link className="link">نسيت كلمة المرور ؟</Link>

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
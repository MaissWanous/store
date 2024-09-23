import axios from "axios"
import {  useState } from "react"
export default function Email() {
    let [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
  
    async function submit(e) {
        e.preventDefault();
        try {
            await axios.post("",
                {
                    email: email
                }
            )
            window.location.pathname = "/code"
            setEmailError("")
        } catch (error) {
            console.log(error)
            setEmailError(error)
        }
    }
    return (
        <div className="container">
            <div className="parent">
                <div className="register">
                    <form onSubmit={submit} >
                        <label className="label" htmlFor="email">البريد الالكتروني</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        ></input>
                        {emailError
                            && <p className="error">حدث خطأ ما او ان البريد الالكتروني المدخل غير موجود !</p>}

                        <div style={{ textAlign: "center" }}>
                            <button type="submit">ارسال كود التحقق</button>
                        </div>

                    </form>
                    <div >
                    </div>

                </div>
            </div>
        </div>
    )
}
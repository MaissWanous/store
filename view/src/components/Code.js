import axios from "axios";
import { useState } from "react";

export default function Code() {
    const [checkCode, setCheckCode] = useState("");
    const [validCode, setValidCode] = useState(false);

    const referrer = document.referrer;
    const url = new URL(referrer);
    const path = url.pathname.split('/').pop();

    async function submit(e) {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:2000/checkCode", {
                checkCode: checkCode,
            });


            // Check if the response status indicates an error
            if (res.status >= 200 && res.status < 300) {
                setValidCode(false); // Reset validCode if the response is successful
                if (path === "SingUp") {
                    window.location.pathname = '/userHome'
                } else {
                    window.location.pathname = '/resetPass'
                }
            }
        } catch (err) {
            setValidCode(true)// Set validCode to true if the code is invalid
            console.error("Error during code submission:", err); // Log any errors
        }
    }

    return (
        <div className="container">
            <div className="parent">
                <div className="register">
                    <form onSubmit={submit}>
                        <label className="label" htmlFor="Code">كود التحقق:</label>
                        <input
                            type="text"
                            id="Code"
                            value={checkCode}
                            onChange={(e) => setCheckCode(e.target.value)}
                            required
                        />
                        {validCode && <p className="error">الكود المدخل غير صحيح!</p>}
                        <div style={{ textAlign: "center" }}>
                            <button type="submit">تأكيد</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

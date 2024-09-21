export default function Email() {
    return (
        <div className="container">
            <div className="parent">
                <div className="register">
                    <form  >
                        <label className="label" htmlFor="email">البريد الالكتروني</label>
                        <input
                            type="email"
                            id="email"
                            required
                        ></input>

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
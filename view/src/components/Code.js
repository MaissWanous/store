export default function Code() {
    async function submit(e) {
        e.preventDefault();

        try {

        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="container">
            <div className="parent">
                <div className="register">
                    <form onSubmit={submit}>
                    <label className="label" htmlFor="Code">كود التحقق : </label>
                    <input
                        type="text"
                        id="Code"
                    ></input>
                        <div style={{ textAlign: "center" }}>
                            <button type="submit">تأكيد</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
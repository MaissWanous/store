import "./css/resCard.css"
export default function UserReservations() {
    return (<div className="container">
        <div className="button_grp">
            <ul>
                <li
                    key={0}
                    data-li="all"
                    className="btn"
                >
                    الكل
                </li>
                <li
                    key={1}
                    data-li="confirmed"
                    className="btn"
                // className={selectedClassification === classification ? 'btn active' : 'btn'}
                // onClick={() => setSelectedClassification(classification)}
                >
                    حجوزات مؤكدة
                </li>
                <li
                    key={2}
                    data-li="else"
                    className="btn"

                // className={selectedClassification === classification ? 'btn active' : 'btn'}
                // onClick={() => setSelectedClassification(classification)}
                >
                    حجوزات غير مؤكدة
                </li>
            </ul>

            <div className="res-card d-flex">
                <img className="res-image" src="https://images.unsplash.com/photo-1535025639604-9a804c092faa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6cb0ceb620f241feb2f859e273634393&auto=format&fit=crop&w=500&q=80" alt="Product Image" />
                <>
                    <h3 className="res-name">بارفان نسائي</h3>
                    <p className="res-price">السعر: 200 ريال</p>
                    <p className="res-status">حجز غير مؤكد - إلغاء الحجز: 8/2/2024</p>
                </>
            </div>

        </div>
    </div>

    )
}
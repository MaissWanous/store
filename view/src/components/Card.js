
import React from 'react';
const Card = ({ imgSrc, title, text }) => {
    return (
        <div className="card">
            <img className="card-img-top" src={imgSrc} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
            </div>
        </div>
    );
};

export default Card;

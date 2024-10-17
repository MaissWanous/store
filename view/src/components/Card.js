
import React from 'react';
const Card = ({ imgSrc, title, text ,price,classf}) => {
    return (
        <div className="card">
            <img className="card-img-top" src={imgSrc} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className='card-title'>السعر :{price}</p>
                <p className="card-text">{text}</p>
                <p>{classf}</p>
            </div>
        </div>
    );
};

export default Card;

import React from 'react';
import "../Styles/cards.css"
const Card = ({icon,title}) => {
    return (
        <div className='card'>
            <div className='container-icon'>
                <img src={icon} alt={title} />
            </div>
            <h3>{title}</h3>
        </div>
    );
}

export default Card;

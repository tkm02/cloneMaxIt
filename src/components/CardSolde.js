import React from 'react';
import '../Styles/cardSolde.css'
import icon20 from '../icon.png'

const CardSolde = ({icon,title,solde}) => {
    return (
        <div className='card-solde'>
            <img src={icon} alt="icon" />
            <h4>{title}</h4>
            <div className='line-solde'>
                <h4>{solde} FCFA</h4>
                <img src={icon20} alt="icon" />
            </div>
        </div>
    );
}

export default CardSolde;

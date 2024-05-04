import React from 'react';
import logo from '../icon-button.png'
import icon1 from '../icon-button-1.png'
import icon2 from '../icon-button-2.png'
import icon3 from '../icon-button-3.png'
import profile from '../container.png'
import "../Styles/hearder.css"
const Header = () => {
    return (
        <div className='header'>
            <img className='logo-orange' src={logo} alt="" />
            <ul className='iconsHeader'>
                <li> <img src={icon1} /></li>
                <li><img src={icon2} /></li>
                <li><img src={icon3} /></li>
                <li><img src={profile} /></li>
            </ul>
        </div>
    );
}

export default Header;

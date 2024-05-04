import React from 'react';
import '../Styles/NavItem.css'
const NavItem = ({icon,title,active}) => {
    return (
        <div className='nav-item'>
            <div className={active ? 'nav-item-icon active' : 'nav-item-icon'}>
                <img src={icon} alt={title}/>
            </div>
            <h3>{title}</h3>
        </div>
    );
}

export default NavItem;

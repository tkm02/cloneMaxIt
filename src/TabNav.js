import React from 'react';
import NavItem from './components/NavItem';
import "./Styles/TabNav.css"
import icon1 from './atom_primaryicon_grid_filled.png'
import icon2 from './icon-container.png'
import icon3 from './icon-container-1.png'
import icon4 from './icon-container-2.png'
import icon5 from './icon-container-3.png'

const TabNav = () => {
    return (
        <div className='tabs-nav'>
            <NavItem icon={icon1} title="Welcome" active={true}/>
            <NavItem icon={icon2} title="Marketplace" active={false}/>
            <NavItem icon={icon3} title="mobile" active={false}/>
            <NavItem icon={icon4} title="My wallet" active={false}/>
            <NavItem icon={icon5} title="My points" active={false}/>
            
        </div>
    );
}

export default TabNav;

import React from 'react';
import './Navbar.css';

import AdjustIcon from '@material-ui/icons/Adjust';
import MenuIcon from '@material-ui/icons/Menu';

function Navbar() {
    return (
        <div className='navbarWrapper'>
            <div className="navbar">
                <div className="navbar__left">
                    <AdjustIcon />
                    <h1>Membantumu</h1>
                </div>
                <div className="navbar__right">
                    <a>Home</a>
                    <a className="navbar__a--selected">Charity</a>
                    <a>Contact</a>
                    <a>Projects</a>
                    <a>About us</a>
                    <MenuIcon />
                </div>
            </div>
            
        </div>
    )
}

export default Navbar

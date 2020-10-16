import React from 'react';
import {HiMenu} from 'react-icons/hi';
import Notification from './Notification';


function Header(){
    return (
        <header className='app-header'>
            <nav className="nav-menu">
                <div className='nav-menu--btn'><HiMenu /></div>
            </nav>
            <Notification amt="1" />
        </header>
    )
}

export default Header
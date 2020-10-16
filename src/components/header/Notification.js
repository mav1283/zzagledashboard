import React from 'react';
import {FaRegBell} from 'react-icons/fa';

function Notification({amt}){
    return (
        <div className="notification">
            <div className="notification--bell">
                <span className="notification--bell--amt">{amt}</span>
                <FaRegBell />
            </div>
        </div>
    )
}

export default Notification
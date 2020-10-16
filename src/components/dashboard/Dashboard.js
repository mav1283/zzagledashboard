import React from 'react';
import {GiCutDiamond} from 'react-icons/gi';
import {FaUserTie,FaWallet} from 'react-icons/fa';
import {RiScissorsFill} from 'react-icons/ri';
import {ImShocked2} from 'react-icons/im';
import {BsThreeDots} from 'react-icons/bs';
import {NavLink} from 'react-router-dom';
import Slider from './slider/Slider';

function Dashboard(){
    return (
        <div className='dashboard'>
            <section className="dashboard--top">
                <div className="user">
                    <GiCutDiamond />
                    <h4>Alhlan Washlan, Butch</h4>
                </div>
                <div className="user--panel">
                    <div className="user--panel--section top">
                        <div className="user--panel--section--details left">
                            <FaUserTie />
                            <h4 className='sky'>1000</h4>
                        </div>
                        <div className="user--panel--section--details right">
                            <FaWallet />
                            <h5 className="money">$5,000.00</h5>
                        </div>
                    </div>
                    <div className="user--panel--section bottom">
                        <div className="user--panel--section--details left">
                            <FaUserTie />
                            <h4 className='sky'>888</h4>
                        </div>
                        <div className="user--panel--section--details right">
                            <h4 className='sky'>Points: 888</h4>
                        </div>
                    </div>
                </div>
                <div className="user--cta">
                    <button>Cash-In</button> |
                    <button>Pay</button> |
                    <button>Transfer</button>
                </div>
            </section>
            <section className="dashboard--middle">
                <nav className="dash-nav-menu">
                    <NavLink exact to="/salonandspa">
                        <RiScissorsFill />
                        <span>Salon & Spa</span>
                    </NavLink>
                    <NavLink to="/comingsoon">
                        <ImShocked2 />
                        <span>Coming Soon</span>
                    </NavLink>
                    <NavLink to="/more">
                        <BsThreeDots />
                        <span>More</span>
                    </NavLink>
                </nav>
            </section>
            <section className="dashboard--bottom">
                <Slider />
            </section>
        </div>
    )
}

export default Dashboard;
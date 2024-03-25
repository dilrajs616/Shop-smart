import React, {useState, useEffect} from 'react';
import logo from '../assets/shopsmart.png'


const Navbar = () => {
    
    return (
        <div className="navbar bg-base-300 md:px-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Developer Team</a></li>
                        <li><a>Technology Used</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
            </div>

            <div className="navbar-center hidden md:flex">
                <img src={logo} alt="app logo" className='h-8 w-8 opacity-50' />
                <a className="btn btn-ghost text-3xl font-bold">ShopSmart</a>
                
            </div>

            <div className="navbar-end space-x-2">
                <a className='btn'>Signup</a>
                <a className="btn">Login</a>
            </div>
        </div>
    )
}

export default Navbar
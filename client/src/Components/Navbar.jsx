import React, {useState, useEffect} from 'react';
import logo from '../assets/shopsmart.png'


const Navbar = () => {
    
    return (
        <div className="navbar bg-base-300 p-8">
            <div className="navbar-start pl-44">
                <a className="btn btn-ghost text-3xl font-bold">
                <img src={logo} alt="app logo" className='h-8 w-8 opacity-50' />ShopSmart
                </a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><a>Item 1</a></li>
                <li>
                    <details>
                    <summary>Parent</summary>
                    <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                    </details>
                </li>
                <li><a>Item 3</a></li>
                </ul>
           </div>

            <div className="navbar-end hidden lg:flex space-x-4 pr-44">
                <a className='btn'>Signup</a>
                <a className="btn">Login</a>
            </div>
        </div>
    )
}

export default Navbar
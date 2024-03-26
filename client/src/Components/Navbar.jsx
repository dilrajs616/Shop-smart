import React, {useState, useEffect} from 'react';
import logo from '../assets/shopsmart.png'


const Navbar = () => {
    
    return (
        <div className="navbar bg-[#166C57] p-8 text-[#B3C1D6]">
            <div className="navbar-start pl-44">
                <a className="btn btn-ghost text-4xl font-extrabold ">
                <img src={logo} alt="app logo" className='h-10 w-10' />ShopSmart
                </a>
            </div>

            <div className="navbar-center hidden lg:flex font-black">
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
                <a className='btn btn-ghost text-xl font-black text-[#B3C1D6] bg-transparent hover:underline'>Signup</a>
                <a className="btn btn-ghost text-xl font-black text-[#B3C1D6] bg-transparent hover:underline">Login</a>
            </div>
        </div>
    )
}

export default Navbar
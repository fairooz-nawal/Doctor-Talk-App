import React from 'react';
import { NavLink } from 'react-router';
import logo from '../../../C001-assets/logo.png';
const Navbar = () => {
    const link = <>
     <NavLink to="/" className={({isActive})=> isActive ? 'bg-blue-700 text-white p-2 rounded-2xl font-medium': 'p-2 rounded-2xl font-medium'}>Home</NavLink>
     <NavLink to="/myBooking" className={({isActive})=> isActive ? 'bg-blue-700 text-white p-2 rounded-2xl font-medium': 'p-2 rounded-2xl font-medium'}>My Bookings</NavLink>
     <NavLink to="/blogs" className={({isActive})=> isActive ? 'bg-blue-700 text-white p-2 rounded-2xl font-medium': 'p-2 rounded-2xl font-medium'}>Blogs</NavLink>
     <NavLink to="/contactUs" className={({isActive})=> isActive ? 'bg-blue-700 text-white p-2 rounded-2xl font-medium': 'p-2 rounded-2xl font-medium'}>Contact Us</NavLink>
    </>
    return (
        <div className="navbar bg-gray-200 shadow-sm lg:px-[200px]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path  strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow flex gap-4">
                       {link}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"> <img src={logo} className='w-8 h-8 rounded-full' alt="" />Doc Talk</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-4">
                        {link}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn bg-blue-700 text-white p-4 rounded-xl">Emergency</button>
            </div>
        </div>
    );
};

export default Navbar;
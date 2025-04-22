import React from 'react';
import { Link, NavLink } from 'react-router';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import logo from '../../../C001-assets/logo.png';
const Footer = () => {
    const link = <>
        <NavLink to="/" className={({ isActive }) => isActive ? 'bg-blue-700 text-white p-2 rounded-2xl font-medium' : 'p-2 rounded-2xl font-medium'}><a>Home</a></NavLink>
        <NavLink to="/myBooking" className={({ isActive }) => isActive ? 'bg-blue-700 text-white p-2 rounded-2xl font-medium' : 'p-2 rounded-2xl font-medium'}><a>My Bookings</a></NavLink>
        <NavLink to="/blogs" className={({ isActive }) => isActive ? 'bg-blue-700 text-white p-2 rounded-2xl font-medium' : 'p-2 rounded-2xl font-medium'}><a>Blogs</a></NavLink>
        <NavLink to="/contactUs" className={({ isActive }) => isActive ? 'bg-blue-700 text-white p-2 rounded-2xl font-medium' : 'p-2 rounded-2xl font-medium'}><a>Contact Us</a></NavLink>
    </>
    return (
        <footer className="footer footer-horizontal footer-center bg-white text-base-content rounded py-10">
            <div className="flex">
            <img src={logo} className='w-10 h-10 rounded-full' alt="" />
                <a className="btn btn-ghost text-3xl"> Doc Talk</a>
            </div>
            <ul className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                {link}
            </ul>
            <hr className='border-1 border-gray-300 w-full' />
            <nav>
                <div className="grid grid-cols-3 gap-4">
                    <Link to="https://www.facebook.com/fairooz.nawal" className='text-3xl' ><FaFacebook className='text-blue-600' /> </Link>
                    <Link to="https://www.linkedin.com/in/syeda-fairooz-nawal-10355b279/" className='text-3xl'><FaLinkedin className='text-blue-800' /></Link>
                    <Link to="https://github.com/fairooz-nawal" className='text-3xl'><FaGithub /></Link>

                </div>
            </nav>


        </footer>
    );
};

export default Footer;
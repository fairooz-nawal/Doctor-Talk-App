import React from 'react';
import Navbar from '../../components/header/Navbar';
import Footer from '../../components/footer/Footer';
import { Outlet } from 'react-router';
import { ToastContainer, } from 'react-toastify';
const Roots = () => {
    return (
        <div className='jakarta bg-gray-200'>
              <ToastContainer
            />
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;
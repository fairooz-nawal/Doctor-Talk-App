import React from 'react';
import error from "../../../C001-assets/Error.jpeg"
import NavBar from '../../components/header/Navbar';
import { Link } from 'react-router';
const Error = () => {
    return (
        <div className='bg-gray-200 h-screen'>
            <NavBar></NavBar>
            <div className="space-y-4 text-center p-[50px]">
            <img className='w-[500px] mx-auto' src={error} alt="" />
            <h1 className='text-3xl font-bold text-red-500'>404- Page Note Found</h1>
            <p className='text-2xl'>OOps! The page you're looking for doesn't exist</p>
            <Link to="/"><button className='btn bg-blue-700 text-white'>Go Back To Home</button></Link>
            </div>
            
        </div>
    );
};

export default Error;
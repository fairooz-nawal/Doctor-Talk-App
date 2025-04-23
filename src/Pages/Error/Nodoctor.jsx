import React, { useContext } from 'react';
import { ApiProvider } from '../contextAPI/ContextApi';
import { Link } from 'react-router';
import NavBar from '../../components/header/Navbar';
const Nodoctor = () => {
    const {invalid} = useContext(ApiProvider);
    console.log(invalid);
    return (
        <div className='bg-gray-200 h-screen'>
        <NavBar></NavBar>
        <div className="space-y-4 text-center max-w-full lg:max-w-5xl mx-auto p-[50px] bg-white">
        <h1 className='text-3xl font-bold'>No Doctor Found!!!</h1>
        <p className='text-2xl'>No Doctor Found with the registration No-{invalid} </p>
        <Link to="/"><button className='btn bg-blue-700 text-white'>Go Back To Home</button></Link>
        </div>
        
    </div>
    );
};

export default Nodoctor;
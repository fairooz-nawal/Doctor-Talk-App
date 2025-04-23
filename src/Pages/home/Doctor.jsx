import React from 'react';
import { BiRegistered } from "react-icons/bi";
import { Link } from 'react-router';
const Doctor = ({ singleDoc }) => {
    const { id,image, experience, name, education, speciality,registration_number } = singleDoc;
    return (
        <div className="card bg-base-100 shadow-sm p-5 rounded-3xl">
            <figure className="">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl h-[200px] lg:h-[300px]" />
            </figure><br />
            <div className="grid grid-cols-1 lg:grid-cols-2 ml-5 gap-3">
                <button className="btn border-2 border-green-400 bg-green-100 p-3 text-green-400 rounded-full">Available</button>
                <button className="btn border-2 border-blue-400 bg-blue-100 p-3 text-blue-400 rounded-full">{experience}+ Experience</button>
            </div>
           
            <div className="card-body ">
                <h2 className="card-title font-bold">{name}</h2>
                <p className='text-gray-500'>{education},{speciality}, {experience}</p>
                <hr className='border-1 border-dashed border-gray-300' />
                <div className="flex gap-2 items-center">
                    <BiRegistered className='text-2xl text-gray-400'/>
                    <p className='text-gray-500'>Registration No: {registration_number}</p>
                </div>
                
                <div className="">
                    <Link to={`detail/${id}`}><button className="btn border-blue-700 text-blue-500 bg-white rounded-3xl w-full hover:bg-blue-700 hover:text-white">View Details</button></Link>
                </div>
                
            </div>
           
        </div>
    );
};

export default Doctor;
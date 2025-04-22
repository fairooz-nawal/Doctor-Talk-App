import React from 'react';
import docSuccess from "../../../C001-assets/success-doctor.png"
import paitentSuccess from "../../../C001-assets/success-patients.png"
import successReview from "../../../C001-assets/success-review.png"
import successstaff from "../../../C001-assets/success-staffs.png"
import CountUp from 'react-countup';
const Success = () => {
    return (
        <div className="max-w-7xl mx-auto pb-[80px] space-y-8">
             <div className="w-3/4 mx-auto text-center">
                <h1 className='text-2xl font-bold lg:text-3xl'>We Provide Best Medical Services</h1>
                <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-3 p-5'>
              <div className=" bg-white space-y-4 rounded-2xl p-5 py-8">
                <img src={docSuccess} alt="" />
                <h1 className='text-2xl font-bold lg:text-5xl'><CountUp end={199} duration={6.75}/>+</h1>
                <p className='text-gray-500'>Total Doctors</p>
              </div>
              <div className=" bg-white space-y-4 rounded-2xl p-5 py-8">
                <img src={paitentSuccess} alt="" />
                <h1 className='text-2xl font-bold lg:text-5xl'><CountUp end={467} duration={6.75}/>+</h1>
                <p className='text-gray-500'>Total Reviews</p>
              </div>
              <div className=" bg-white space-y-4 rounded-2xl p-5 py-8">
                <img src={successReview} alt="" />
                <h1 className='text-2xl font-bold lg:text-5xl'><CountUp end={1900} duration={6.75}/>+</h1>
                <p className='text-gray-500'>Paitents</p>
              </div>
              <div className=" bg-white space-y-4 rounded-2xl p-5 py-8">
                <img src={successstaff} alt="" />
                <h1 className='text-2xl font-bold lg:text-5xl'><CountUp end={300} duration={6.75}/>+</h1>
                <p className='text-gray-500'>Staffs</p>
              </div>
            </div>
        </div>
    );
};

export default Success;
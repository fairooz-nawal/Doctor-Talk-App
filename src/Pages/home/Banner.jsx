import React from 'react';
import bg from '../../../C001-assets/banner-img-1.png'
const Banner = () => {
    return (
        <div className="hero max-w-full lg:max-w-9xl min-h-screen">
            <div className="hero-content text-center">
                <div className=" space-y-4 bg-gradient-to-b from-gray-200 to-white p-5 lg:px-[160px] lg:py-[64px] border-2 border-white rounded-4xl">
                    <h1 className="text-3xl lg:text-5xl font-bold">Dependable Care, Backed by Trusted Professionals.</h1>
                    <p className="py-6">
                        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 items-center">
                        <input type="text" name="" placeholder='Search any doctor...' className='col-span-3 p-4 rounded-full bg-white w-full' />
                        <button className="btn bg-blue-700 text-white p-7 rounded-full">Search Now</button>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                        <img src={bg} alt="" className='w-full'/>
                        <img src={bg} alt="" className='w-full'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
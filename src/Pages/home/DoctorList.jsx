import React, { Suspense, useContext, useState } from 'react';
import { ApiProvider } from '../contextAPI/ContextApi';
import Doctor from './Doctor';
const DoctorList = () => {
    const { doctor } = useContext(ApiProvider);
    const [visit, setvisit] = useState(false);
    const handleVisited = () => {
        setvisit(!visit);
    }

    return (
        <div className="max-w-7xl mx-auto py-[80px] space-y-8">
            <div className="w-3/4 mx-auto text-center">
                <h1 className='text-2xl font-bold lg:text-3xl'>Our Best Doctors</h1>
                <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <Suspense fallback={ <div className="max-w-[100px] mx-auto py-[80px]">
                <span className="loading loading-bars loading-xl"></span>
            </div>}>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 p-5'>
                    {
                        visit ? doctor.map(singleDoc => <Doctor key={singleDoc.id} singleDoc={singleDoc}></Doctor>) :
                            doctor.map(singleDoc => parseInt(singleDoc.id) < 7 ? <Doctor key={singleDoc.id} singleDoc={singleDoc}></Doctor> : "")
                    }
                </div>
            </Suspense>


            <div className=" flex justify-center w-3/4 mx-auto">
                <button onClick={handleVisited} className='btn bg-blue-700 white p-5 rounded-full text-white'>View All Doctors</button>
            </div>
        </div>

    );
};

export default DoctorList;
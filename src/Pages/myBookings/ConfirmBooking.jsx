import React, { useContext } from 'react';
import { ApiProvider } from '../contextAPI/ContextApi';
const ConfirmBooking = ({booking}) => {
    const {name,speciality,fee,education} = booking;

    const { handleDeleteBooking } =useContext(ApiProvider);
    return (
        <div className='max-w-full lg:max-w-5xl mx-auto space-y-4 text-center'>
            <div className="w-full rounded-xl bg-white p-5 space-y-4">
                <div className="flex justify-between">
                    <div className="text-start">
                        <h1 className="text-2xl font-bold">{name}</h1>
                        <p className="text-gray-500">{education}</p>
                        <p className="text-gray-500">{speciality}</p>
                    </div>
                    <p className="text-gray-500">Appointment Fee: ${fee} + VAT</p>
                </div>
                <hr className='border-1 border-dashed border-gray-300' />
                <button onClick={()=>handleDeleteBooking(booking.id)} className='w-full border-2 border-red-500 text-red-500 rounded-3xl py-3 font-bold'>Cancel Appointment</button>
            </div>
        </div>
    );
};

export default ConfirmBooking;
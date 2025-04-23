import React from 'react';
import { useNavigate } from 'react-router';

const EmptyBooking = () => {
    const navigate = useNavigate();

    const handleBooking = () => {
        navigate('/');
    }
    return (
        <div className="max-w-full lg:max-w-5xl mx-auto space-y-4 text-center py-[100px]">
            <h1 className="text-3xl lg:text-5xl font-bold">You Have not Booked any appointment yet</h1>
            <p className="py-6">
                Our plateform connects with verified, experienced doctors across various specialties — all at your convenience.
            </p>
            <button onClick={handleBooking} className="btn bg-blue-700 text-white">Book an Appointment</button>
        </div>
    );
};

export default EmptyBooking;
import React from 'react';

const EmptyBooking = () => {
    return (
        <div className="max-w-full lg:max-w-5xl mx-auto space-y-4 text-center py-[100px]">
            <h1 className="text-3xl lg:text-5xl font-bold">You Have not Booked any appointment yet</h1>
            <p className="py-6">
                Our plateform connects with verified, experienced doctors across various specialties — all at your convenience.
            </p>
            <button className="btn bg-blue-700 text-white">Book an Appointment</button>
        </div>
    );
};

export default EmptyBooking;
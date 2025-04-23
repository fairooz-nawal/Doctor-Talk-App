import React, { useContext } from 'react';
import ConfirmBooking from './ConfirmBooking';
import { ApiProvider } from '../contextAPI/ContextApi';
import EmptyBooking from './EmptyBooking';
import ConfirmContainer from './ConfirmContainer';

const MyBookings = () => {
    const {doctor, booking } = useContext(ApiProvider);
    const bookedDoctor = doctor.filter(single => booking.includes(single.id));
    console.log("this is booking",booking);
    return (
       <div className="">
        {
           bookedDoctor.length > 0 ? <ConfirmContainer bookedDoctor={bookedDoctor}></ConfirmContainer>  : <EmptyBooking></EmptyBooking>
        }
       </div>
    );
};

export default MyBookings;
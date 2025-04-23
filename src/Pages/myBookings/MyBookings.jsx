import React, { useContext } from 'react';
import ConfirmBooking from './ConfirmBooking';
import { ApiProvider } from '../contextAPI/ContextApi';
import EmptyBooking from './EmptyBooking';
import ConfirmContainer from './ConfirmContainer';

const MyBookings = () => {
    const {doctor, getCartFromLocalStorage } = useContext(ApiProvider);
    const booking = getCartFromLocalStorage();
    const bookedDoctor = doctor.filter(single => booking.includes(single.id));
    return (
       <div className="">
        {
           bookedDoctor.length > 0 ? <ConfirmContainer bookedDoctor={bookedDoctor}></ConfirmContainer>  : <EmptyBooking></EmptyBooking>
        }
       </div>
    );
};

export default MyBookings;
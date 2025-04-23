import React, { useContext } from 'react';
import ConfirmBooking from './ConfirmBooking';
import { ApiProvider } from '../contextAPI/ContextApi';
import EmptyBooking from './EmptyBooking';
import ConfirmContainer from './ConfirmContainer';

const MyBookings = () => {
    const {doctor, getCartFromLocalStorage,loading } = useContext(ApiProvider);
    const booking = getCartFromLocalStorage();
    const bookedDoctor = doctor.filter(single => booking.includes(single.id));
    if (loading) {
      return (
          <div className="max-w-[100px] mx-auto py-[80px]">
              <span className="loading loading-bars loading-xl"></span>
          </div>
      );
  }
    return (
       <div className="">
        {
           bookedDoctor.length > 0 ? <ConfirmContainer bookedDoctor={bookedDoctor}></ConfirmContainer>  : <EmptyBooking></EmptyBooking>
        }
       </div>
    );
};

export default MyBookings;
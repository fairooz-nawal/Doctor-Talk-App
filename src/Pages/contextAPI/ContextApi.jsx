import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const ApiProvider = createContext('');

const ContextApi = ({children}) => {
    const [doctor, setDoctor] = useState([]);
    const [loading,setloading] = useState(true);
    const [booking, setBooking] = useState([]);

    useEffect( ()=>{
        fetch('./Doctor.json')
        .then(res => res.json())
        .then(data => {
            setDoctor(data)
            setloading(false)
        })
    },[])

    const handleSetBooking = (id)=>{
            const newBooking = [...booking,id];
            setBooking(newBooking);
            toast.success('Your booking is Confirmed', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            addItemToCartLocalStorage(id);
    }

    const getCartFromLocalStorage = ()=>{
        const storedBookingString = localStorage.getItem('booking');
        if(storedBookingString){
            const storedCard = JSON.parse(storedBookingString);
            return storedCard;
    }
    return [];
}

    const saveCartToLocalStorage = (booking)=>{
        const bookString = JSON.stringify(booking);
        localStorage.setItem('booking',bookString);
    }
    const addItemToCartLocalStorage = (id)=>{
        const booking = getCartFromLocalStorage();
        booking.push(id);
        saveCartToLocalStorage(booking);
    }

    const handleDeleteBooking = (id)=>{
        const booking = getCartFromLocalStorage();
        const remaining = booking.filter(single => single !== id);
        saveCartToLocalStorage(remaining);
        setBooking(remaining);
        toast.warn('Your Booking is Cancelled', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }

    return (
        <div>
           <ApiProvider.Provider value = {{doctor,loading,getCartFromLocalStorage,handleDeleteBooking,handleSetBooking}}>
            {children}
           </ApiProvider.Provider>
        </div>
    );
};

export default ContextApi;
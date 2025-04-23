import React, { createContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

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
        toast("Your Booking is Confirmed")
    }
    return (
        <div>
           <ApiProvider.Provider value = {{doctor,loading,handleSetBooking,booking}}>
            {children}
           </ApiProvider.Provider>
        </div>
    );
};

export default ContextApi;
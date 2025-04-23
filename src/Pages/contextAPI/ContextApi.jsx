import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const ApiProvider = createContext('');

const ContextApi = ({ children }) => {
    const [doctor, setDoctor] = useState([]);
    const [loading, setloading] = useState(true);
    const [booking, setBooking] = useState([]);
    const [error,setError] =useState([]);
    const [validId,setValidId] = useState([])
    const [invalid,setInvalid] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('./Doctor.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const doctorIds = data.map((doctor)=> doctor.id);
                setValidId(doctorIds);
                setDoctor(data);
                setloading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                // You can also set an error state here
                setError(error.message);
            }
        };
        fetchData();
    }, []);

    const handleSetBooking = (id, name) => {
        const newBooking = [...booking, id];
        setBooking(newBooking);
        toast.success(`Your booking for ${name} is Confirmed`, {
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

    const getCartFromLocalStorage = () => {
        const storedBookingString = localStorage.getItem('booking');
        if (storedBookingString) {
            const storedCard = JSON.parse(storedBookingString);
            return storedCard;
        }
        return [];
    }

    const saveCartToLocalStorage = (booking) => {
        const bookString = JSON.stringify(booking);
        localStorage.setItem('booking', bookString);
    }
    const addItemToCartLocalStorage = (id) => {
        const booking = getCartFromLocalStorage();
        booking.push(id);
        saveCartToLocalStorage(booking);
    }

    const handleDeleteBooking = (id) => {
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

    const handleInvalid = (id) =>{
        setInvalid(id)
    }

    return (
        <div>
            <ApiProvider.Provider value={{ doctor, loading, getCartFromLocalStorage, handleDeleteBooking, handleSetBooking,error,validId,handleInvalid,invalid }}>
                {children}
            </ApiProvider.Provider>
        </div>
    );
};

export default ContextApi;
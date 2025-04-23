import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router';
import { FaRegRegistered } from "react-icons/fa6";
import { ApiProvider } from '../contextAPI/ContextApi';
import { toast } from 'react-toastify';


const DoctorDetail = () => {
    const { loading, doctor, handleSetBooking, getCartFromLocalStorage,error } = useContext(ApiProvider)
    const { id } = useParams();
    const intId = parseInt(id);
    const single = doctor.find(singleDoc => singleDoc.id == intId)

    const currentBooking = getCartFromLocalStorage();
    const navigate = useNavigate();
    const handleNavigate = (id,name) => {
        if (!currentBooking.includes(id)) {
            handleSetBooking(single.id,name)
            navigate('/myBooking');
        } 
        else {
            toast.warn('Your Booking is Already Confirmed', {
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
    }
    if (loading) {
        return (
            <div className="max-w-[100px] mx-auto py-[80px]">
                <span className="loading loading-bars loading-xl"></span>
            </div>
        );
    }
   
    return (
        <div className="max-w-full lg:max-w-7xl mx-auto px-5 lg:px-[100px] pb-[80px]">
            {error}
            <div className="w-full mx-auto text-center bg-white p-[50px] my-10 rounded-2xl">
                <h1 className="text-3xl font-bold">Doctor’s Profile Details</h1>
                <p className="py-6 text-gray-500">
                    Information about our experienced and elite doctors along with the consultation time and availability
                </p>
            </div>
            <div className="hero w-full bg-white p-[50px] rounded-2xl ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                    <img
                        src={single.image}
                        className="w-full lg:w-9/12 rounded-lg shadow-2xl"
                    />
                    <div className=''>
                        <h1 className="text-3xl font-bold">{single.name}</h1>
                        <p className="text-gray-500">{single.education}</p>
                        <p className="text-gray-500">{single.speciality}</p>
                        <p className="font-bold">Designation:{single.designation}</p><br />
                        <p className="text-gray-500">Working at</p>
                        <h1 className="text-xl font-bold">{single.workplace}</h1><br />
                        <hr className='border-1 border-dashed border-gray-300' />
                        <div className="flex gap-2 items-center py-2">
                            <FaRegRegistered />
                            <p className='text-gray-500'>REG No : {single.registration_number}</p>
                        </div>
                        <hr className='border-1 border-dashed border-gray-300' /><br />
                        <div className='grid grid-cols-1 lg:grid-cols-4 gap-3 items-center'>
                            <p className='font-bold' >Availability</p>
                            {
                                single.availability.map((avail, index) => <button key={index} className='border-2 border-yellow-300 bg-yellow-50 text-yellow-300 p-2 rounded-full'>{avail.day}</button>)
                            }
                        </div><br />
                        <p className='text-blue-500'><span className='font-bold text-black'>Consulation Fee :</span> <span className='font-bold text-blue-600'>${single.fee}</span> <span className='text-gray-500'>(inclu VAT)</span> Per Consultation</p>
                    </div>
                </div>
            </div>

            <div className="w-full mx-auto text-center bg-white p-[50px] my-10 rounded-2xl">
                <h1 className="text-3xl font-bold">Book an Appointment</h1><br />
                <hr className='border-1 border-dashed border-gray-300' /><br />
                <div className="flex justify-between items-center">
                    <p className='font-bold' >Availability</p>
                    <button className='font-bold p-1 rounded-xl text-green-500 bg-green-100 border-2 border-green-500' >Doctor Available Today</button>
                </div><br />
                <hr className='border-1 border-dashed border-gray-300' /><br />
                <button className="p-2 text-yellow-500 bg-yellow-100  rounded-2xl">
                    Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
                </button>
                <button onClick={() => handleNavigate(single.id,single.name)} className="w-full my-2 p-2 text-white bg-blue-700  rounded-2xl">
                    Book Appointment Now
                </button>
            </div>
        </div>

    );
};

export default DoctorDetail;
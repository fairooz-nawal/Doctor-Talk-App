import React, { useContext } from 'react';
import Banner from './Banner';
import DoctorList from './DoctorList';
import Success from './Success';
import { ApiProvider } from '../contextAPI/ContextApi';

const Home = () => {
    const {loading} = useContext(ApiProvider);
    if (loading) {
        return (
            <div className="max-w-[100px] mx-auto py-[80px]">
                <span className="loading loading-bars loading-xl"></span>
            </div>
        );
    }
    return (
        <div>
            <Banner></Banner>
            <DoctorList></DoctorList>
            <Success></Success>
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from './Banner';
import DoctorList from './DoctorList';
import Success from './Success';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DoctorList></DoctorList>
            <Success></Success>
        </div>
    );
};

export default Home;
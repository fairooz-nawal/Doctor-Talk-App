import React, { createContext, useEffect, useState } from 'react';

export const ApiProvider = createContext('');
const ContextApi = ({children}) => {
    const [doctor, setDoctor] = useState([]);
    useEffect( ()=>{
        fetch('./Doctor.json')
        .then(res => res.json())
        .then(data => setDoctor(data))
    },[])
    return (
        <div>
           <ApiProvider.Provider value = {{doctor}}>
            {children}
           </ApiProvider.Provider>
        </div>
    );
};

export default ContextApi;
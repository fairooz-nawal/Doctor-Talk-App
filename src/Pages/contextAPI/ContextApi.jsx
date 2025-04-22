import React, { createContext, useEffect, useState } from 'react';

export const ApiProvider = createContext('');
const ContextApi = ({children}) => {
    const [doctor, setDoctor] = useState([]);
    const [loading,setloading] = useState(true)
    useEffect( ()=>{
        fetch('./Doctor.json')
        .then(res => res.json())
        .then(data => {
            setDoctor(data)
            setloading(false)
        })
    },[])
    return (
        <div>
           <ApiProvider.Provider value = {{doctor,loading}}>
            {children}
           </ApiProvider.Provider>
        </div>
    );
};

export default ContextApi;
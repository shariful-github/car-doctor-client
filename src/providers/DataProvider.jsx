import React, { createContext, useRef } from 'react';

export const DataContext = createContext();

const DataProvider = ({children}) => {
    const serviceSection = useRef(null);
    
    const scrollToServices = () =>{
        serviceSection.current.scrollIntoView({ behavior: 'smooth' });
    }

    const dataInfo = {
        serviceSection,
        scrollToServices
    }

    return (
        <DataContext.Provider value={dataInfo}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;
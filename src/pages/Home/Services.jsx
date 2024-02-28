import React, { useContext, useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import { DataContext } from '../../providers/DataProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Services = () => {
    const [services, setServices] = useState([]);
    const { serviceSection } = useContext(DataContext);
    const [asc, setAsc] = useState(true);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get(`/services?sort=${asc ? 'asc' : 'desc'}`)
            .then(res => setServices(res.data))
    }, [asc])

    return (
        <div ref={serviceSection}>
            <div className='text-center'>
                <h5 className='font-bold text-lg text-red-500'>Services</h5>
                <h1 className='text-5xl font-bold'>Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='text-center'>
                <button
                    onClick={() => setAsc(!asc)}
                    className="btn btn-active btn-secondary mt-5">
                    Price: {asc ? 'high to low' : 'low to high'}
                </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
                {
                    services.map(service =>
                        <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;
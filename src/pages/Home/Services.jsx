import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [])

    return (
        <div>
            <div className='text-center'>
                <h5 className='font-bold text-lg text-red-500'>Services</h5>
                <h1 className='text-5xl font-bold'>Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
                {
                    services.map(service =>
                        <ServiceCard
                            key={service.key}
                            service={service}
                        ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;
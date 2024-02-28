import React, { useContext, useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import { DataContext } from '../../providers/DataProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Services = () => {
    const [services, setServices] = useState([]);
    const { serviceSection } = useContext(DataContext);
    const [asc, setAsc] = useState(true);
    const axiosSecure = useAxiosSecure();
    const [searchKey, SetSearchKey] = useState('');

    useEffect(() => {
        axiosSecure.get(`/services?sort=${asc ? 'asc' : 'desc'}&searchKey=${searchKey}`)
            .then(res => setServices(res.data))
    }, [axiosSecure, asc, searchKey])

    const handleSearch = event => {
        event.preventDefault();
        SetSearchKey(event.target.searchBox.value);
    }

    console.log(searchKey);

    return (
        <div ref={serviceSection}>
            <div className='text-center'>
                <h5 className='font-bold text-lg text-red-500'>Services</h5>
                <h1 className='text-5xl font-bold'>Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='flex justify-center mt-5 gap-3'>
                <button
                    onClick={() => setAsc(!asc)}
                    className="btn btn-active btn-secondary">
                    Price: {asc ? 'high to low' : 'low to high'}
                </button>
                <input
                    onChange={e => {
                        setTimeout(() => SetSearchKey(e.target.value), 1000);
                    }}
                    type="text"
                    placeholder='search service'
                    className='p-2 border-2 border-pink-500 focus:outline-sky-600 font-semibold'
                />
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
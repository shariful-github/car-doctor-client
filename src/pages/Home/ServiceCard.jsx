import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service;
    return (
        <div className="card border">
            <figure className="p-5">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="pl-5 pb-5 space-y-1 mt-auto">
                <h2 className="card-title font-bold text-2xl">{title}</h2>
                <p className='text-lg font-bold text-orange-600'>Price: ${price}</p>
                <div className='text-right'>
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-secondary mr-5 px-8 bg-orange-500">Book Service</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
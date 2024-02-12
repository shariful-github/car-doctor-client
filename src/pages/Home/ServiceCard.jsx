import React from 'react';

const ServiceCard = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div className="card border">
            <figure className="p-5">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="pl-5 pb-5 space-y-1">
                <h2 className="card-title font-bold text-2xl">{title}</h2>
                <p className='text-lg font-bold text-orange-600'>Price: ${price}</p>
            </div>
        </div>
    );
};

export default ServiceCard;
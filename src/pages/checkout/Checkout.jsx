import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Checkout = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const { _id, price, img, title } = service;

    const handleService = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;

        const booking = {
            customerName: name,
            email,
            img,
            date,
            price,
            service_id: _id,
            service_title: title,
        }
        
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                alert('Your service has been successfully booked!');
            }
        })

    }

    return (
        <form onSubmit={handleService} className="h-[450px] mb-5 p-24 card w-full card-body bg-zinc-100 rounded-md">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <input type="date" name='date' className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input type="email" name='email' defaultValue={user?.email} placeholder="Your Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Due Amount</span>
                    </label>
                    <input type="text" name='dueAmount' defaultValue={'$ ' + price} placeholder="Due Amount" className="input input-bordered" required readOnly />
                </div>
            </div>
            <button className="mt-5 btn btn-error text-white bg-orange-600">Order Confirm</button>
        </form>
    );
};

export default Checkout;
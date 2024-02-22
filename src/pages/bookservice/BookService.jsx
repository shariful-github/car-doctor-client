import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const BookService = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const [service, setService] = useState({});
    const { _id, price, img, title } = service;
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.get(`/services/${id}`)
            .then(res => {
                setService(res.data);
                setLoading(false);
            })
    }, [axiosSecure, id])


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

        axiosSecure.post('/bookings', booking)
            .then(result => {
                if (result.data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "You have successfully booked the service.",
                        icon: "success",
                        confirmButtonText: "My Bookings",
                    })
                        .then(() => {
                            navigate('/bookings');
                        })
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
                    <input type="text" name='dueAmount' value={loading ? 'Loading...' : ('$ ' + price)} placeholder="Due Amount" className="input input-bordered" required readOnly />
                </div>
            </div>
            <button className="mt-5 btn btn-error text-white bg-orange-600">Order Confirm</button>
        </form>
    );
};

export default BookService;
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import BookingRow from './BookingRow';
import axios from 'axios';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const axiosSecure = useAxiosSecure();

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/bookings/${id}`)
                    .then(result => {
                        if (result.data.deletedCount === 1) {
                            const remainingBookings = bookings.filter(booking => booking._id !== id);
                            setBookings(remainingBookings);
                            Swal.fire({
                                title: "Deleted!",
                                text: "The service has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }

    const handleConfirmBooking = (id) => {
        axiosSecure.patch(`/bookings/${id}`, { status: 'confirmed' })
            .then(result => {
                if (result.data.modifiedCount > 0) {
                    const AllBookings = [...bookings];
                    const confirmed = bookings.find(booking => booking._id === id);
                    confirmed.status = 'confirmed';
                    setBookings(AllBookings);
                }
            })
    }

    useEffect(() => {
        axiosSecure.get(`/bookings?email=${user.email}`)
            .then(res => { setBookings(res.data) })
    }, [])


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <tbody>
                        {/* table row */}
                        {
                            bookings.map(booking =>
                                <BookingRow
                                    key={booking._id}
                                    booking={booking}
                                    handleDelete={handleDelete}
                                    handleConfirmBooking={handleConfirmBooking}
                                ></BookingRow>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;
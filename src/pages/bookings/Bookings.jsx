import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import BookingRow from './BookingRow';
import axios from 'axios';
import Swal from 'sweetalert2';

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

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
                axios.delete(`http://localhost:5000/bookings/${id}`)
                    .then(result => {
                        if (result.data.deletedCount === 1) {
                            const remainingBookings = bookings.filter(booking => booking._id !== id);
                            setBookings(remainingBookings);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }

    const handleConfirmBooking = (id) => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirmed' })
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.modifiedCount > 0) {
                    const notConfirmed = bookings.filter(booking => booking._id !== id);
                    const confirmed = bookings.find(booking => booking._id === id);
                    confirmed.status = 'confirmed';
                    setBookings([...notConfirmed, confirmed]);
                }
            })
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/bookings?email=${user.email}`, { withCredentials: true })
            .then(res => setBookings(res.data))
    })


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
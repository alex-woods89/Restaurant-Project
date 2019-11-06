import React from 'react'
import EditBookingForm from './EditBookingForm'
import Button from '@material-ui/core/Button';

const BookingDetail = ({booking}) => {
    if(!booking) return null;
    return (

      <div className="detail">
            <h2>Booking Details</h2>
            <ul>
                <li>Date: {booking.date}</li>
                <li>Time: {booking.time}</li>
                <li>Customer Name: {booking._embedded.customer.name}</li>
                <li>Contact Details: {booking._embedded.customer.phone}</li>
                <li>Table Number: {booking._embedded.seating.tableNumber}</li>
                <li>Party Size: {booking.partySize}</li>
                <li className="highlightedText">Special Requests: {booking.notes}</li>
            </ul>
            <Button variant="contained" color="secondary" type="submit">Edit Booking</Button>
        <EditBookingForm booking={booking} />
        </div>
    )

}

export default BookingDetail

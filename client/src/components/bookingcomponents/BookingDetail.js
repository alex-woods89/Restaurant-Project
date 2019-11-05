import React from 'react'

const BookingDetail = ({booking}) => {
    if(!booking) return null;
    return (
      
        <div>
            <h2>Booking Details</h2>
            <ul>
                
                <li>Date: {booking.date}</li>
                <li>Time: {booking.time}</li>
                <li>Customer Name: {booking._embedded.customer.name}</li>
                <li>Contact Details: {booking._embedded.customer.phone}</li>
                <li>Table Number: {booking._embedded.seating.tableNumber}</li>
                <li>Party Size: {booking.partySize}</li>
            </ul>
           
        </div>
    )

}

export default BookingDetail
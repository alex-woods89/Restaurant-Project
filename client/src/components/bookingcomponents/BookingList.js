import React from 'react'

const BookingList = (props) => {

        const options = props.bookings.map((booking, index) => {
           return <option value={booking.id} key={index}>{booking.date}  {booking.time}</option>
        })

        function handleChange(event) {
            props.onBookingSelected(event.target.value);
          }

    return(
        <select id="booking-selector" onChange={handleChange} defaultValue="default">
      <option disabled value="default">Choose a booking...</option>
      {options}
    </select>
    )
}

export default BookingList
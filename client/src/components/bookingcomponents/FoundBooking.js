import React from 'react'

const FoundBooking = ({foundBookings}) => {
    console.log(foundBookings)
    const foundBookingItems = foundBookings.map((foundBooking, index) => {
        return <li>{foundBooking.date}{foundBooking.time}</li>
    })
    return {foundBookingItems}
    
    
}


export default FoundBooking;
import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import FoundBooking from './FoundBooking'

class BookingSearch extends Component {
    constructor(props){
        super(props);
        this.state = {
            foundBookings: [],
            date: "2019-11-01"
        }
        this.handleBookingSearch = this.handleBookingSearch.bind(this);
    }
    handleBookingSearch(){
        fetch(`http://localhost:8080/bookings/search/findBookingByDate?date=${this.state.date}`)
        .then(res => res.json())
        .then(data => this.setState({foundBookings: data._embedded.bookings}))
    }
    
    handleDateChange(event){
        this.setState({date: event.target.value})
    }
    render(){
        return(
            <div>
                <TextField
                type = "date"
                placeholder="Choose A Date"
                value={this.state.date}
                onChange={this.handleDateChange}
                >
                 </TextField>
                <FoundBooking foundBookings={this.state.foundBookings} onFoundBookingsSubmit={this.handleBookingSearch}/>
            </div>
        )

    }
}



export default BookingSearch;

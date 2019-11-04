import React, { Component } from 'react'
import BookingList from '../components/bookingcomponents/BookingList'
import BookingDetail from '../components/bookingcomponents/BookingDetail'

class BookingContainer extends Component{
   constructor(props) {
       super(props)
       this.state = {
           bookings: [],
           selectedBooking: null
       }
       this.handleBookingSubmit = this.handleBookingSubmit.bind(this)
       this.handleBookingSelected = this.handleBookingSelected.bind(this)
   }

   componentDidMount(){
    fetch('http://localhost:8080/bookings')
    .then(res => res.json())
    .then(data => this.setState({ bookings: data._embedded.bookings }))
  }

  handleBookingSelected(index){
    const booking = this.state.bookings[index]
    this.setState({selectedBooking: booking})
  }

  handleBookingSubmit(booking){
    booking.id = Date.now();
    const updatedbookings = [...this.state.bookings, booking]
    this.setState({bookings: updatedbookings});
  }

  render(){
      return(
          <div>
          <h3>Bookings</h3>
          <BookingList bookings={this.state.bookings} onBookingSelected={this.handleBookingSelected}/>
          <BookingDetail booking={this.state.selectedBooking}/>
          </div>
      )
  }
}

export default BookingContainer 
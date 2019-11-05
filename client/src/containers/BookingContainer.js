import React, { Component } from 'react'
import BookingList from '../components/bookingcomponents/BookingList'
import BookingDetail from '../components/bookingcomponents/BookingDetail'
import NewBookingForm from '../components/bookingcomponents/NewBookingForm'

class BookingContainer extends Component{
   constructor(props) {
       super(props)
       this.state = {
           bookings: [],
           customers:[],
           seatings: [],
           selectedBooking: null
       }
       this.handleBookingSubmit = this.handleBookingSubmit.bind(this)
       this.handleBookingSelected = this.handleBookingSelected.bind(this)
   }

   componentDidMount(){  
    fetch('http://localhost:8080/customers')
    .then(res => res.json())
    .then(data => this.setState({ customers: data._embedded.customers }))
  
    fetch('http://localhost:8080/seatings')
    .then(res => res.json())
    .then(data => this.setState({ seatings: data._embedded.seatings }))

    fetch('http://localhost:8080/bookings')
    .then(res => res.json())
    .then(data => this.setState({ bookings: data._embedded.bookings }))
  }

   

  handleBookingSelected(index){
    const booking = this.state.bookings[index]
    fetch(`http://localhost:8080/bookings/${booking.id}`)
    .then(res => res.json())
    .then(data => this.setState({selectedBooking: data}))
  }

  handleBookingSubmit(booking){
    fetch('http://localhost:8080/bookings')
    .then(res => res.json())
    .then(data => this.setState({ bookings: data._embedded.bookings }))
  }

  render(){
      return(
          <div>
          <h3>Bookings</h3>
          <NewBookingForm onBookingSubmit = {this.handleBookingSubmit} customers={this.state.customers} seatings ={ this.state.seatings}/>
          <BookingList bookings = {this.state.bookings} onBookingSelected={this.handleBookingSelected}/>
          <BookingDetail booking = {this.state.selectedBooking}/>
          </div>
      )
  }
}

export default BookingContainer 
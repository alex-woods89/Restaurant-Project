import React, {Component, Fragment} from 'react'

class BookingList extends Component {
         constructor(props){
           super(props);
           this.state = {
             selectedIndex: -1
           }
           this.handleChange = this.handleChange.bind(this)
         }

          handleChange(event) {
            this.setState({selectedIndex: event.target.value})
          this.props.onBookingSelected(event.target.value);
        }
         render(){
        const options = this.props.bookings.map((booking, index) => {
          console.log(booking)
           return <option value={index} key={index}>{booking.date}  {booking.time}</option>
        })

        

    return(
      <Fragment>
        <select id="booking-selector" onChange={this.handleChange} value={this.state.selectedIndex} defaultValue="default">
      <option disabled value={-1}>Choose a booking...</option>
      {options}
    </select>
    </Fragment>
    )
         }
  }

export default BookingList
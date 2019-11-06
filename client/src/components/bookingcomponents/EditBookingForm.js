import React, { Component } from 'react';

class EditBookingForm extends Component {
  constructor(props){
    super(props);
    const {date, time, partySize, notes, customerId, seatingId} = this.props.booking
    this.state = {
      date: date,
      time: time,
      partySize: partySize,
      notes: notes,
      customerId: customerId,
      seatingId: seatingId
    }

  }

  render(){
    return(
      "Hello World"
    )
  }
}









export default EditBookingForm

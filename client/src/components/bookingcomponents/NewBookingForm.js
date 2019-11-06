import React, { Component } from 'react'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';

class NewBookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      time: "",
      partySize: "",
      notes: "",
      customerId: "",
      seatingId: ""
    }
    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleTimeChange = this.handleTimeChange.bind(this)
    this.handlePartySizeChange = this.handlePartySizeChange.bind(this)
    this.handleNotesChange = this.handleNotesChange.bind(this)
    this.handleCustomerChange = this.handleCustomerChange.bind(this)
    this.handleSeatingChange = this.handleSeatingChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleDateChange(event) {
    this.setState({ date: event.target.value })
  }

  handleTimeChange(event) {
    this.setState({ time: event.target.value })
  }

  handlePartySizeChange(event) {
    this.setState({ partySize: event.target.value })
  }

  handleNotesChange(event) {
    this.setState({ notes: event.target.value })
  }

  handleCustomerChange(event) {
    this.setState({ customerId: event.target.value })
  }

  handleSeatingChange(event) {
    this.setState({ seatingId: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:8080/bookings', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        date: this.state.date,
        time: this.state.time,
        partySize: this.state.partySize,
        notes: this.state.notes,
        customer: `http://localhost:8080/customers/${this.state.customerId}`,
        seating: `http://localhost:8080/seatings/${this.state.seatingId}`
      })
    })
      .then(() => {
        const date = this.state.date.trim();
        const time = this.state.time.trim();
        const partySize = this.state.partySize;
        const notes = this.state.notes.trim();
        const customer = this.state.customerId;
        const seating = this.state.seatingId;
        if (!date || !time || !partySize || !notes || !customer || !seating) {
          return
        }
        

 this.props.onBookingSubmit({ date:date, time:time, partySize:partySize, notes:notes, customer:customer, seating:seating})
 this.setState({date:"", time:"", partySize: null, notes: "", customer: {}, seating: {}})
})
}

    handleCustomerChange(event){
        this.setState({customerId: event.target.value})
    }

    handleSeatingChange(event){
        this.setState({seatingId: event.target.value})
    }


    handleSubmit(event){
        event.preventDefault();
        fetch('http://localhost:8080/bookings', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                date: this.state.date,
                time: this.state.time,
                partySize: this.state.partySize,
                notes: this.state.notes,
                customer: `http://localhost:8080/customers/${this.state.customerId}`,
                seating: `http://localhost:8080/seatings/${this.state.seatingId}`
            })
        })
        .then(() => {
          const date = this.state.date.trim();
          const time = this.state.time.trim();
          const partySize = this.state.partySize;
          const notes = this.state.notes.trim();
          const customer = this.state.customerId;
          const seating = this.state.seatingId;
          if(!date|| !time || !partySize || !notes || !customer || !seating){
              return
          }
          
          this.props.onBookingSubmit({ date:date, time:time, partySize:partySize, notes:notes, customer:customer, seating:seating})
          this.setState({date:"", time:"", partySize: null, notes: "", customer: {}, seating: {}})
        })
    }

    render(){
        const customerOptions = this.props.customers.map((customer, index) => {
             return <MenuItem value={customer.id} key={index}>{customer.name}</MenuItem>
          })
          const seatingOptions = this.props.seatings.map((seating, index) => {
            return <MenuItem value={seating.id} key={index}>Table: {seating.tableNumber} Seats: {seating.capacity}</MenuItem>
         })
        return(
            <div className="booking-form">
            <h3>New Booking Form</h3>
            < br/>
            <form  onSubmit={this.handleSubmit}>
                <TextField
                fullWidth={true}
                className="inputField"
                type="date"
                placeholder="Choose a Date"
                value={this.state.date}
                onChange={this.handleDateChange}
                /><br></br>
                <TextField
                fullWidth={true}

                type="time"
                // defaultValue={time}
                // placeholder={Date.now}
                value={this.state.time}
                onChange={this.handleTimeChange}
                /><br></br>
                <br></br>
                <TextField
                fullWidth={true}

                type="number"
                placeholder="Number of customers"
                value={this.state.partySize}
                onChange={this.handlePartySizeChange}

                />
                <br></br><br></br>
                <TextField
                fullWidth={true}

                placeholder="Add notes"
                value={this.state.notes}
                onChange={this.handleNotesChange}/>
                <br></br>
                <InputLabel>Select a Customer</InputLabel>

                <Select
                fullWidth={true}

                id="customer-booking-selector" onChange={this.handleCustomerChange} value={this.state.customerId} >
                <MenuItem></MenuItem>
                {customerOptions}
                </Select>
                <br></br>
                <InputLabel>Select a Table</InputLabel>
                <Select
                fullWidth={true}

                 id="seating-booking-selector" onChange={this.handleSeatingChange} value={this.state.seatingId} >
                <MenuItem >Choose a seating...</MenuItem>
                {seatingOptions}
                </Select>
                <br></br><br/>

                <Button variant="contained" color="secondary" type="submit">Make A Booking</Button>
            </form>
            </div>
        )
    }
}

export default NewBookingForm;

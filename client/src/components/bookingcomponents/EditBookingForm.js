import React, { Component, Fragment } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';

class EditBookingForm extends Component {
  constructor(props) {
    super(props);
    const { date, time, partySize, notes } = this.props.booking
    this.state = {
      date: date,
      time: time,
      partySize: partySize,
      notes: notes,
      customerId: this.props.booking._embedded.customer.id,
      seatingId: this.props.booking._embedded.seating.id,
      showForm: false
    }
    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleTimeChange = this.handleTimeChange.bind(this)
    this.handlePartySizeChange = this.handlePartySizeChange.bind(this)
    this.handleNotesChange = this.handleNotesChange.bind(this)
    this.handleCustomerChange = this.handleCustomerChange.bind(this)
    this.handleSeatingChange = this.handleSeatingChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleForm = this.toggleForm.bind(this)
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
    fetch(`http://localhost:8080/bookings/${this.props.booking.id}`, {
      method: 'PATCH',
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

        this.props.onBookingSubmit({ date: date, time: time, partySize: partySize, notes: notes, customer: customer, seating: seating })
        this.setState({ date: "", time: "", partySize: null, notes: "", customer: {}, seating: {}, showForm: false })
      })
  }

  toggleForm() {
    this.setState({ showForm: true })
  }

  render() {

    const customerOptions = this.props.customers.map((customer, index) => {
      return <MenuItem value={customer.id} key={index}>{customer.name}</MenuItem>
    })

    const seatingOptions = this.props.seatings.map((seating, index) => {
      return <MenuItem value={seating.id} key={index}>{seating.tableNumber}</MenuItem>
    })

    return (
      <Fragment>
        <Button variant="contained" color="secondary" type="submit" onClick={this.toggleForm}>Edit Booking</Button>

        {this.state.showForm &&
          <form className="booking-form" onSubmit={this.handleSubmit}>
            <TextField
              className="inputField"
              type="date"
              placeholder="Choose a Date"
              value={this.state.date}
              onChange={this.handleDateChange}
            /><br></br>
            <TextField
              type="time"
              placeholder="Choose a Time"
              value={this.state.time}
              onChange={this.handleTimeChange}
            /><br></br>
            <br></br>
            <TextField
              type="number"
              placeholder="Number of customers"
              value={this.state.partySize}
              onChange={this.handlePartySizeChange}

            />
            <br></br><br></br>
            <TextField
              placeholder="Add notes"
              value={this.state.notes}
              onChange={this.handleNotesChange} />
            <br></br>
            <InputLabel>Select a Customer</InputLabel>
            <br></br>
            <Select id="customer-booking-selector" onChange={this.handleCustomerChange} value={this.state.customerId} >
              <MenuItem></MenuItem>
              {customerOptions}
            </Select>
            <br></br>
            <InputLabel>Select a Table</InputLabel>
            <Select id="seating-booking-selector" onChange={this.handleSeatingChange} value={this.state.seatingId} >
              <MenuItem >Choose a seating...</MenuItem>
              {seatingOptions}
            </Select>
            <br></br>
            <Button variant="contained" color="secondary" type="submit">Edit</Button>
          </form>
        }
      </Fragment>
    )
  }
}

export default EditBookingForm

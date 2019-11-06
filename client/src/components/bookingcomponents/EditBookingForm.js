import React, {Component} from 'react'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';

class EditBookingForm extends Component {
  constructor(props){
    super(props);
    const {date, time, partySize, notes} = this.props.booking
    this.state = {
      date: date,
      time: time,
      partySize: partySize,
      notes: notes,
    }
  }

  render(){
    return(
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
          onChange={this.handleNotesChange}/>
          <br></br>
          <InputLabel>Select a Customer</InputLabel>


          <br></br>

          <Button variant="contained" color="secondary" type="submit">Make A Booking</Button>
        </form>
    )
  }
}









export default EditBookingForm

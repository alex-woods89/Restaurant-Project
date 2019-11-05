import React, {Component} from 'react'

class NewBookingForm extends Component {
    constructor(props){
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

    handleDateChange(event){
        this.setState({date: event.target.value})
    }

    handleTimeChange(event){
        this.setState({time: event.target.value})
    }

    handlePartySizeChange(event){
        this.setState({partySize: event.target.value})
    }

    handleNotesChange(event){
        this.setState({notes: event.target.value})
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

    }

    render(){
        const customerOptions = this.props.customers.map((customer, index) => {
             return <option value={customer.id} key={index}>{customer.name}</option>
          })
          const seatingOptions = this.props.seatings.map((seating, index) => {
            return <option value={seating.id} key={index}>{seating.tableNumber}</option>
         })
        return(
            <form className="booking-form" onSubmit={this.handleSubmit}>
                <input 
                type="text"
                placeholder="Choose a Date"
                value={this.state.date}
                onChange={this.handleDateChange}
                />
                <input 
                type="text"
                placeholder="Choose a Time"
                value={this.state.time}
                onChange={this.handleTimeChange}
                />
                <input 
                type="number"
                placeholder="Number of customers"
                value={this.state.partySize}
                onChange={this.handlePartySizeChange}
                />
                <input
                type="text"
                placeholder="Add notes"
                value={this.state.notes}
                onChange={this.handleNotesChange}/>
                <select id="customer-booking-selector" onChange={this.handleCustomerChange} value={this.state.customerId} >
                <option disabled value="">Choose a customer...</option>
                {customerOptions}
                </select>
                <select id="seating-booking-selector" onChange={this.handleSeatingChange} value={this.state.seatingId} >
                <option disabled value="" >Choose a seating...</option>
                {seatingOptions}
                </select>

                <input type="submit" value="Make a booking"/>

              


            </form>
        )
    }
}

export default NewBookingForm;
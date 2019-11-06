import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class CustomerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      email: ''

    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleNameChange(event) {
    this.setState({ name: event.target.value })
  }

  handlePhoneChange(event) {
    this.setState({ phone: event.target.value })
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:8080/customers', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        phone: this.state.phone,
        email: this.state.email
      })
    });

    const name = this.state.name.trim();
    const phone = this.state.phone.trim();
    const email = this.state.email.trim();
    if (!name || !phone || !email) {
      return
    }

    this.props.onCustomerSubmit({ name: name, phone: phone, email: email })

    this.setState({ name: '', phone: '', email: '' });
  }

  render() {
    return (
      <form className="customer-form" onSubmit={this.handleSubmit}>
        <TextField
          fullWidth={true}
          type="text"
          placeholder="Your Name"
          value={this.state.name}
          onChange={this.handleNameChange}
          required
        />
        <TextField
          fullWidth={true}

          type="text" placeholder="Phone Number"
          value={this.state.phone}
          onChange={this.handlePhoneChange}
          required
        />
        <TextField
          fullWidth={true}

          type="text" placeholder="Email"
          value={this.state.email}
          onChange={this.handleEmailChange}
          required
        />
        <br /><br />
        <Button variant="contained" color="secondary"
          type="submit">
          Add Customer
                </Button>

      </form>
    )
  }
}

export default CustomerForm;

import React, { Component } from 'react'
import CustomerDetail from '../components/customercomponents/CustomerDetail'
import CustomerList from '../components/customercomponents/CustomerList'
import CustomerForm from '../components/customercomponents/CustomerForm'
import CustomerSelector from '../components/customercomponents/CustomerSelector'

class CustomerContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      customers: [],
      selectedCustomer: null
    }
    this.handleCustomerSubmit = this.handleCustomerSubmit.bind(this)
    this.handleCustomerSelected = this.handleCustomerSelected.bind(this);
    this.handleCustomerDelete = this.handleCustomerDelete.bind(this)
  }


  componentDidMount() {
    fetch('http://localhost:8080/customers')
      .then(res => res.json())
      .then(data => this.setState({ customers: data._embedded.customers }))
  }

  handleCustomerSelected(index) {
    const customer = this.state.customers[index]
    this.setState({ selectedCustomer: customer })
  }

  handleCustomerSubmit(customer) {
    customer.id = Date.now();
    const updatedCustomers = [...this.state.customers, customer]
    this.setState({ customers: updatedCustomers });
  }

  handleCustomerDelete(index) {
    const updatedCustomers = this.state.customers.splice(index, 1)
    this.setState({ customers: updatedCustomers })
  }

  render() {
    return (
      <div className="container">
        <div id="customer-form">
          <CustomerForm onCustomerSubmit={this.handleCustomerSubmit} />
        </div>
        <div>
          <CustomerSelector customers={this.state.customers} onCustomerSelected={this.handleCustomerSelected} />
          <CustomerDetail customer={this.state.selectedCustomer} onCustomerDelete={this.handleCustomerDelete} />
        </div>
        <div>
          <CustomerList customers={this.state.customers} onCustomerSelected={this.handleCustomerSelected} />
        </div>
      </div>
    )
  }
}

export default CustomerContainer

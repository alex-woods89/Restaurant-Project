import React, {Component} from 'react'
import CustomerDetail from '../components/CustomerDetail'
import CustomerList from '../components/CustomerList'
import CustomerForm from '../components/CustomerForm';

class CustomerContainer extends Component{
  constructor(props){
      super(props)
      this.state = {
          customers: [],
          selectedCustomer: null
      }
      this.handleCustomerSubmit = this.handleCustomerSubmit.bind(this)
    }
    

      componentDidMount(){
        fetch('http://localhost:8080/customers')
        .then(res => res.json())
        .then(data => this.setState({ customers: data._embedded.customers }))
      }

      handleCustomerSelected(customer){
        this.setState({selectedCustomer: customer})
      }

      handleCustomerSubmit(customer){
        customer.id = Date.now();
        const updatedCustomers = [...this.state.customers, customer]
        this.setState({customers: updatedCustomers});
      }

      render(){
          return(
              <div>
                <CustomerForm  onCustomerSubmit={this.handleCustomerSubmit}/>
              <CustomerList customers = {this.state.customers} onCustomerSelected={this.handleCustomerSelected}/>
              <CustomerDetail customer= {this.state.selectedCustomer} />
              </div>
          )
      }
  }

  export default CustomerContainer

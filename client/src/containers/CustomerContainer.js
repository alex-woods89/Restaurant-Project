import React, {Component} from 'react'
import CustomerDetail from '../customers/components/CustomerDetail'
import CustomerList from '../customers/components/CustomerList'

class CustomerContainer extends Component{
  constructor(props){
      super(props)
      this.state = {
          customers: [],
          selectedCustomer: null
      }
    }

      componentDidMount(){
        fetch('http://localhost:8080/customers')
        .then(res => res.json())
        .then(data => this.setState({ customers: data._embedded.customers }))
      }

      handleCustomerSelected(customer){
        this.setState({selectedCustomer: customer})
      }

      render(){
          return(
              <div>
              <CustomerList customers = {this.state.customers} onCustomerSelected={this.handleCustomerSelected}/>
              <CustomerDetail customer= {this.state.selectedCustomer} />
              </div>
          )
      }
  }

  export default CustomerContainer

import React, {Component} from 'react'
import CustomerDetail from '../components/CustomerDetail'
import CustomerList from '../components/CustomerList'
import CustomerForm from '../components/CustomerForm';
import CustomerSelector from '../components/CustomerSelector';

class CustomerContainer extends Component{
  constructor(props){
      super(props)
      this.state = {
          customers: [],
          selectedCustomer: null
      }
      this.handleCustomerSubmit = this.handleCustomerSubmit.bind(this)
      this.handleCustomerSelected = this.handleCustomerSelected.bind(this);
      this.handleCustomerDelete = this.handleCustomerDelete.bind(this)
    }


      componentDidMount(){
        fetch('http://localhost:8080/customers')
        .then(res => res.json())
        .then(data => this.setState({ customers: data._embedded.customers }))
      }

      handleCustomerSelected(index){
        const customer = this.state.customers[index]
        this.setState({selectedCustomer: customer})
      }

      handleCustomerSubmit(customer){
        customer.id = Date.now();
        const updatedCustomers = [...this.state.customers, customer]
        this.setState({customers: updatedCustomers});
      }

      handleCustomerDelete(index){
        const updatedCustomers = this.state.customers.splice(index, 1)
        this.setState({customers: updatedCustomers})
      }

      render(){
          return(
              <div>
                <CustomerForm  onCustomerSubmit={this.handleCustomerSubmit}/>
                <CustomerSelector customers={this.state.customers} onCustomerSelected={this.handleCustomerSelected}/>
              <CustomerList customers = {this.state.customers} onCustomerSelected={this.handleCustomerSelected}/>
              <CustomerDetail customer= {this.state.selectedCustomer} onCustomerDelete={this.handleCustomerDelete} />
              </div>
          )
      }
  }

  export default CustomerContainer

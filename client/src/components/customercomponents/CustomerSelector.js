import React, {Component, Fragment} from 'react';


class CustomerSelector extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedIndex: -1
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({selectedIndex: event.target.value})
        this.props.onCustomerSelected(event.target.value)
    }
    render(){
        const customerOptions = this.props.customers.map((customer, index) => {
            return <option value={index} key={index}>{customer.name}</option>
        })
        return(
            <Fragment>
                <label htmlFor="customer-selector" hidden>Select a Customer</label>
                <select
                id="customer-selector"
                onChange={this.handleChange}
                value={this.state.selectedIndex}>
                    <option disabled value={-1}>Select a Customer...</option>
                    {customerOptions}
                </select>
            </Fragment>
        )
    }

}





export default CustomerSelector;
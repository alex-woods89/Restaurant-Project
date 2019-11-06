import React, { Component, Fragment } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class CustomerSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: -1
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ selectedIndex: event.target.value })
    this.props.onCustomerSelected(event.target.value)
  }
  render() {
    const customerOptions = this.props.customers.map((customer, index) => {
      return <MenuItem value={index} key={index}>{customer.name}</MenuItem>
    })
    return (
      <div className="customer-selector">
        <Fragment>
          <Select
            // fullWidth="true"
            id="customer-selector"
            onChange={this.handleChange}
            value={this.state.selectedIndex}>
            <MenuItem disabled value={-1}>Select a Customer...</MenuItem>
            {customerOptions}
          </Select>
        </Fragment>
      </div>
    )
  }
}

export default CustomerSelector;
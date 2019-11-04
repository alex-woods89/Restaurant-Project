import React, {Component} from 'react'

const CustomerList = (props) => {

    const options = props.customers.map((customer, index) => {
    return <option value={customer.name} key={index}>{customer.name}</option>
    })

    function handleChange(event){
        props.onCustomerSelected(event.target.value)
    }

    return(
        <select id="customer-selected" >
         {options}
        </select>
    )
}

export default CustomerList
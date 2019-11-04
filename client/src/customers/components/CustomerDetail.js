import React, {Component} from 'react'

const CustomerDetail = (props) => {


    if(!props.customer) return null;
    return (
        <div>
           <p>{this.state.customer.name}</p>
        </div>
    )
}
export default CustomerDetail
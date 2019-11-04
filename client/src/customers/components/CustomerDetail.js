import React, {Component} from 'react'


const CustomerDetail = ({customer}) => {

    if(!customer) return null;
    return (
        <div>
            <h2>Customer Details</h2>
           <p>{customer.name}</p>
        </div>
    )
}
export default CustomerDetail
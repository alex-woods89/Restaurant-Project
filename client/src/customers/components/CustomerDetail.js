import React from 'react'


const CustomerDetail = ({customer}) => {

    if(!customer) return null;
    return (
        <div>
            <h2>Customer Details</h2>
           <p>{customer.name}</p>
           <p>{customer.phone}</p>
           <p>{customer.email}</p>
        </div>
    )
}
export default CustomerDetail
import React from 'react'
import CustomerDelete from './CustomerDelete'


const CustomerDetail = ({customer}) => {

    if(!customer) return null;
    return (
        <div>
            <h2>Customer Details</h2>
           <p>{customer.name}</p>
           <p>{customer.phone}</p>
           <p>{customer.email}</p>
           <button>Update Customer</button>
           <CustomerDelete />
        </div>
    )
}
export default CustomerDetail

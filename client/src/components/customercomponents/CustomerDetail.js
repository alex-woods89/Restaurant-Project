import React from 'react'
import Button from '@material-ui/core/Button';

const CustomerDetail = ({ customer }) => {

  if (!customer) return null;
  return (
    <div className="detail">
      <h2>Customer Details</h2>
      <p>{customer.name}</p>
      <p>{customer.phone}</p>
      <p>{customer.email}</p>
      <Button variant="contained" color="secondary">Update Customer</Button>
      <Button variant="contained" color="secondary">Delete Customer</Button>
    </div>
  )
}

export default CustomerDetail

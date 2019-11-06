import React from 'react'

const CustomerList = ({ customers }) => {

  const customersNames = customers.map((customer, index) => {
    return <p className="customer-list-item" key={index}> {customer.name}</p>
  })

  return (
    <div className="customer-list">
      <h3>All the Customers</h3>
      {customersNames}
    </div>
  )
}

export default CustomerList

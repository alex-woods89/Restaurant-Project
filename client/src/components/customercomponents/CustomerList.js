import React from 'react'

const CustomerList = ({customers}) => {

        const customersNames = customers.map((customer, index) => {
            return <li className="customer-list-item"> {customer.name}</li>
             

            
        })

        const text = "All the Customers"

    return(
        <div className="customer-list">
               {text}
               <ul>{customersNames}</ul>
           
        </div>
    )
}

export default CustomerList

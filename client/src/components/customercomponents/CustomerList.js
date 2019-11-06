import React from 'react'

const CustomerList = ({customers}) => {

        const customersNames = customers.map((customer, index) => {
            return <tr key={index}>
            <td>{customer.name}</td>

            </tr>
        })

    return(
        <div className="customer-list">
            
           <table>
           <h3>All Customers</h3>
               <tbody>{customersNames}</tbody>
           </table>
        </div>
    )
}

export default CustomerList

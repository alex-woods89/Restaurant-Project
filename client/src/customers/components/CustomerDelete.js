import React, {Component} from 'react';

class CustomerDelete extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(event){
      event.preventDefault();
      fetch(`http://localhost:8080/customers/${customer.id}`, {
        method: 'DELETE'

    render(){
        return(
          <button onClick={this.handleDelete}>Delete Customer</button>
        )
    }
}

export default CustomerDelete;

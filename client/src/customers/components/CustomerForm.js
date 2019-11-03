import React, {Component} from 'react';

class CustomerForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            phoneNumber: '',
            email: '',

        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlephoneNumberChange = this.handlephoneNumberChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleNameChange(event){
        this.setState({name: event.target.value})
    }

    handlephoneNumberChange(event){
        this.setState({phoneNumber: event.target.value})
    }

    handleemailChange(event){
        this.setState({email: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        const name = this.state.name.trim();
        const phoneNumber = this.state.phoneNumber.trim();
        const email = this.state.email.trim();


        this.props.onCustomerSubmit({name: name, phoneNumber: phoneNumber, email: email})
        //todo: update list of comments

        this.setState({name: '', phoneNumber: '', email: ''});
    }
}

export default CustomerForm;
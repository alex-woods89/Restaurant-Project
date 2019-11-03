import React, {Component} from 'react';

class CustomerForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: ''

        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleNameChange(event){
        this.setState({name: event.target.value})
    }

    handlePhoneChange(event){
        this.setState({phone: event.target.value})
    }

    handleEmailChange(event){
        this.setState({email: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        const name = this.state.name.trim();
        const phone = this.state.phone.trim();
        const email = this.state.email.trim();


        this.props.onCustomerSubmit({name: name, phone: phone, email: email})
        //todo: update list of comments

        this.setState({name: '', phone: '', email: ''});
    }

    render(){
        return(
            <form className="customer-form" onSubmit={this.handleSubmit}>
                <input 
                type="text"
                placeholder="Your Name"
                value={this.state.name}
                onChange={this.handleNameChange}
                />
                <input
                type="text" placeholder="Phone Number"
                value={this.state.phone}
                onChange={this.handlePhoneChange}
                />
                <input
                type="text" placeholder="Email"
                value={this.state.email}
                onChange={this.handleEmailChange}
                />
                <input
                type="submit"
                value="Post"
                />

            </form>
        )
    }
}

export default CustomerForm;
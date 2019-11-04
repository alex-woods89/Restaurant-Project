import React, { Component, Fragment } from 'react';
import NavBar from './NavBar';
import Home from './home/components/Home'
import Booking from './bookings/components/Booking';
import Customer from './customers/components/Customer';
import ErrorPage from './ErrorPage';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';



class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <NavBar />
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/bookings" component={Booking}/>
                        <Route path="/customers" component={Customer}/>
                        <Route component={ErrorPage}/>

                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Main

import React, { Component, Fragment } from 'react';
import NavBar from './NavBar';
import Booking from './bookings/components/Booking';
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
                        {/* <Route exact path="/" component={Home}/> */}
                        <Route path="/bookings" component={Booking}/>

                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Main

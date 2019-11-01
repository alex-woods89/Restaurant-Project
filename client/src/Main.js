import React, { Component, Fragment } from 'react';
import NavBar from './NavBar';
import Booking from './bookings/components/Booking';


export class Main extends Component {

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
                        <Route exact path="/bookings" component={Booking}/>

                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Main

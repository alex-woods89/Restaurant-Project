import React, { Component, Fragment } from 'react';
import NavBar from './NavBar';
import Home from './home/components/Home'
import BookingContainer from './containers/BookingContainer';
import ErrorPage from './ErrorPage';
import CustomerContainer from './containers/CustomerContainer'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



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
            <Route exact path="/" component={Home} />
            <Route path="/bookings" component={BookingContainer} />
            <Route path="/customers" component={CustomerContainer} />
            <Route component={ErrorPage} />
          </Switch>

        </Fragment>
      </Router>
    )
  }
}

export default Main

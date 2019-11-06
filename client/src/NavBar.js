import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <ul id="nav-bar">
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/bookings">Bookings</Link>
    </li>
    <li>
      <Link to="/customers">Customers</Link>
    </li>
  </ul>
);

export default NavBar;

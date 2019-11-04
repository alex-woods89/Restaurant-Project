import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => (
    <ul>
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

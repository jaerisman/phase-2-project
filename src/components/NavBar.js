import React from 'react';
import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <nav className="navbar">
      <ul>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/all-hikes">All Hikes</NavLink>
        </li>
        <li>
            <NavLink to="/add-a-hike">Add a Hike</NavLink>
        </li>
      </ul>
    </nav>
    )
}

export default NavBar
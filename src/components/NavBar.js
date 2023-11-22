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
            <NavLink to="/AllHikes">All Hikes</NavLink>
        </li>
        <li>
            <NavLink to="/AddAHike">Add A Hike</NavLink>
        </li>
        <li>
            <NavLink to="/CompletedHikes">Completed Hikes</NavLink>
        </li>
      </ul>
    </nav>
    )
}

export default NavBar
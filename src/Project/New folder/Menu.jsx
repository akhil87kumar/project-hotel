import React from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";

function Menu() {

  return (
    <>
      <div className="Navbars">
        <ul className="NavbarWrappers">
          <li className="NavbarElement">
            <NavLink className="link" to="/">
              Home
            </NavLink>
          </li>
          <li className="NavbarElement">
            <NavLink className="link" to="/about">
              About Us
            </NavLink>
          </li>
          <li className="NavbarElement">
            <NavLink className="link"to="/room">
              Room
            </NavLink>
          </li>
          <li className="NavbarElement">
            <NavLink className="link" to="/gallery">
              Gallery
            </NavLink>
          </li>
          <li className="NavbarElement">
            <NavLink className="link" to="/contact">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Menu;

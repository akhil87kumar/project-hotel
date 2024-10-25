import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import "./NaviBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars,faXmark } from '@fortawesome/free-solid-svg-icons'

function Navigation({clicked, isClicked}) {
   const handleClicked = ()=>{
    isClicked(!clicked);
   }

   
    // const navigate = useNavigate()

  const  handleNav = () => {
    window.scrollTo({
      top: window.screenTop,
    })
  }


  return (
    <div className="navbar">
      <nav className="nmain">
        <img src="./Logo.jpg" alt="image" height="80px" width="80px" />

        <ul className="NavbarWrapper">
          <li><NavLink to="/" className="NavElement" onClick={handleNav}>Home</NavLink></li>
          <li><NavLink to="/about" className="NavElement" onClick={handleNav}>About Us</NavLink></li>
          <li ><NavLink to="/room" className="NavElement" onClick={handleNav}>Rooms</NavLink></li>
          <li ><NavLink to="/gallery" className="NavElement" onClick={handleNav}>Gallery</NavLink></li>
          <li ><NavLink to="/contact" className="NavElement" onClick={handleNav}>Contact</NavLink></li>
        </ul>

        {!clicked?(<FontAwesomeIcon icon={faBars} className='icon' onClick={handleClicked} />): (<FontAwesomeIcon icon={faXmark} className='icon' onClick={handleClicked} />)}
        

      </nav>
      
    </div>
  );
}

export default Navigation;





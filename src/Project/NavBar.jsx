import React from 'react';
import Navbar from './Navbar.module.css'
function NavBar({data}) {
   

  return (
    <div className={Navbar.nv}>
      
      <div className={Navbar.imag}>
        <img src={data.imgnav} alt="img"  />
      </div>

      <div className={Navbar.head}>
        <h1>{data.line1}</h1>
        <h1>{data.line2}</h1>
        <p>{data.para}</p>
      </div>
      
      
      
    </div>
  );
}

export default NavBar;

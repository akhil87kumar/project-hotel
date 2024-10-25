import React from 'react';
import Searchcomp from './Searchcomp.module.css'

function SearchComp() {
  return (
    <div className={Searchcomp.main}>

      <div className={Searchcomp.col1}>
        <label htmlFor="" id="dt">Check-in and check-out</label>
        <br />
        <input type="date" />
      </div>
      
      <div className={Searchcomp.col2}>
        <label htmlFor="">Rooms and guests</label>
        <br />
        <input type="text" placeholder='Room1, Adults1'/>
      </div>

      <button>Search</button>

    </div>
  );
}

export default SearchComp;

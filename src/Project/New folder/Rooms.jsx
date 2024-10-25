import React from 'react';
import Roomstyle from './Roomstyle.module.css'
import SmallRoom1 from '../Images/SmallRoom1.jpg'


function Rooms() {
  return (
    <div className={Roomstyle.main}>

      <div className={Roomstyle.headsection}>
        <h1>COMFORT & CONVENIENCE</h1>
        <h3>High-End Services & Experiences to Meet Your Every Need</h3>
      </div>

      <div className={Roomstyle.roomsection}>
        <div className={Roomstyle.imag1}>
          <img src={SmallRoom1} alt="Small Room Image" />
          <span>
            <h1>Small Room</h1>
            <h4>best solution for travelers</h4>
          </span>

        </div>

        <div className={Roomstyle.imag2}>
          <img src="https://lirp.cdn-website.com/e2ccc0c7/dms3rep/multi/opt/Golden+Stork_11022023DSC09152-36-1920w.jpg" alt="Medium Room Image" />
          <span>
            <h1>Medium Room</h1>
            <h4>perfect for cosmopolitans who like to travel</h4>
          </span>
        </div>
      </div>

      <div className={Roomstyle.roomsection2}>
        <img src="https://lirp.cdn-website.com/e2ccc0c7/dms3rep/multi/opt/Golden+Stork_11022023DSC09052-Edit-67-1920w.jpg" alt="Large Room" />
        <span>
          <h1>Large Room</h1>
          <h4>A Vast,luxurious room, perfect for those who enjoy spacious comfort and indulgence</h4>
        </span>
      </div>




    </div>
  );
}

export default Rooms;


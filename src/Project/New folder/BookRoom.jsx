import React,{useState} from 'react';
import Navigation from './Navigation';
import NavBar from '../NavBar';
import Room from "./Room.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Menu from './Menu';

function BookRoom() {
  //--------------hambuger MENU---------------//
  const [clicked,isClicked]=useState(false);

  const fai = <FontAwesomeIcon icon={faCheck} />
  let dataObj = {
    line1: "ROOMS",
    line2: null,
    para: "A peak inside our gorgeous units",
    imgnav: "./roompageimg.webp"
  }

  return (
    <div>
      <Navigation clicked={clicked} isClicked={isClicked}/>
      {clicked? <Menu/>:null}
      <div className={Room.piccrop}>
        <NavBar data={dataObj} />
      </div>

      <div className={Room.para}>
        <p>The Golden Stork in The Hague is the ultimate choice for travelers seeking a perfect blend of work, exploration, and relaxation. Discover 125 beautifully designed Urban-style rooms with free Wi-Fi, complimentary bikes for city exploration, and a variety of well-appointed rooms featuring stylish en-suite bathrooms, our hotel provides all the comforts of home and more. Your ideal stay awaits! King Room</p>
      </div>

      <div>
        <section className={Room.detail1}>
          <h1>King Room</h1>
          <h2>Max Occupancy: 2</h2>

          <p>This small but cozy room will be the best solution for travelers who appreciate the most necessary things in optimal price. Here you will have a good rest after long day of visiting Den Haag.</p>
        </section>


        <section className={Room.detail2}>
          <h3>FACILITIES:</h3>
          <p><span className={Room.ico}>{fai}</span>Private bathroom with rainshower, washbasin and toilet</p>
          <p><span className={Room.ico}>{fai}</span>Comfy double handmade bed</p>
          <p><span className={Room.ico}>{fai}</span>Storage underneath the bed</p>
          <p><span className={Room.ico}>{fai}</span>ree super fast wifi</p>
          <p><span className={Room.ico}>{fai}</span>Best pillow in the world</p>
        </section>

      </div>

      <div className={Room.image}>
        <div className={`${Room.items} ${Room.item56}`}> <img src="./rimg1.webp" alt="image" /> </div>
        <div className={ `${Room.items} ${Room.item56}`}> <img src="./rimg2.webp" alt="image" /></div>
        <div className={`${Room.items} ${Room.item7}`}> <img src="./rimg3.webp" alt="image" /> </div>
        <div className={`${Room.items} ${Room.item56}`}> <img src="./rimg4.webp" alt="image" /> </div>
        <div className={ `${Room.items} ${Room.item56}`}> <img src="./rimg5.webp" alt="image" /></div>
      </div>

      <div className={Room.containimg}>
        <section className={Room.detail1}>
          <h1>Superior Room</h1>
          <h2>Max Occupancy: 2</h2>

          <p>This room is perfect for cosmopolitans who like to travel comfortably and more spacious. Your room is like a 23 m² dance floor, big enough to dance the day away!</p>
        </section>


        <section className={Room.detail2}>
          <h3>FACILITIES:</h3>

          <p><span className={Room.ico}>{fai}</span>
           Private bathroom featuring a rejuvenating rainshower, washbasin, and toilet.</p>
          <p><span className={Room.ico}>{fai}</span>Enjoy a restful sleep on a comfy double handmade bed.</p>
          <p><span className={Room.ico}>{fai}</span>Convenient storage space underneath the bed.</p>
          <p><span className={Room.ico}>{fai}</span>Stay connected with free super-fast WiFi.</p>
          <p><span className={Room.ico}>{fai}</span>Experience the ultimate comfort with the best pillow in the world.</p>
        </section>

      </div>

      <div className={Room.image2}>
        <div className={`${Room.items} ${Room.item56}`}> <img src="./rimg6.webp" alt="image" /> </div>
        <div className={ `${Room.items} ${Room.item56}`}> <img src="./rimg7.webp" alt="image" /></div>
        <div className={`${Room.items} ${Room.item7}`}> <img src="./rimg8.webp" alt="image" /> </div>
        <div className={`${Room.items} ${Room.item56}`}> <img src="./rimg9.webp" alt="image" /> </div>
        <div className={ `${Room.items} ${Room.item56}`}> <img src="./rimg10.webp" alt="image" /></div>
      </div>
      

      <div>
        <section className={Room.detail1}>
          <h1>Deluxe Room</h1>
          <h2>Max Occupancy: 4</h2>

          <p>Want some luxury during your stay?  This spacious room has everything you need. A kingsize bed to have a good night of rest, a huge rain shower, a sitting area to relax after a long day of work, lots of space, long story short: this is what you want! Your room is a comfortable 45 m².</p>
        </section>


        <section className={Room.detail2}>
          <h3>FACILITIES:</h3>

          <p><span className={Room.ico}>{fai}</span>Spacious 45m2 room offering ample space to relax and unwind.</p>
          <p><span className={Room.ico}>{fai}</span>Luxuriate in the comfort of a large double handmade bed.</p>
          <p><span className={Room.ico}>{fai}</span>Convenient storage options to keep your belongings organized.</p>
          <p><span className={Room.ico}>{fai}</span>Enjoy a soothing and indulgent experience in the private bathroom, complete with a rejuvenating bathtub, rain shower, washbasin, and toilet.</p>
          <p><span className={Room.ico}>{fai}</span>Stay connected with free super-fast WiFi throughout your stay.</p>
          <p><span className={Room.ico}>{fai}</span>LDiscover the epitome of comfort with the best pillow in the world.</p>
        </section>

      </div>

      <div className={`${Room.image} ${Room.last}`}>
        <div className={`${Room.items} ${Room.item56}`}> <img src="./rimg6.webp" alt="image" /> </div>
        <div className={ `${Room.items} ${Room.item56}`}> <img src="./rimg7.webp" alt="image" /></div>
        <div className={`${Room.items} ${Room.item7}`}> <img src="./rimg8.webp" alt="image" /> </div>
        <div className={`${Room.items} ${Room.item56}`}> <img src="./rimg9.webp" alt="image" /> </div>
        <div className={ `${Room.items} ${Room.item56}`}> <img src="./rimg10.webp" alt="image" /></div>
      </div>
    </div>
  );
}

export default BookRoom;

import React,{useState} from 'react';
import Aboutpage from './Aboutpage.module.css'
import AboutSilderData from './AboutSilderData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck } from '@fortawesome/free-solid-svg-icons'
import NavBar from '../NavBar';
import Navigation from './Navigation';
import Menu from './Menu';

function AboutUs() {
  //--------------hambuger MENU---------------//
  const [clicked,isClicked]=useState(false);

  const fai=<FontAwesomeIcon icon={faCheck} />
  let dataObj = {
    line1 : "About Us",
    line2 : null,
    para : " Let us walk you through our Hotel",
    imgnav:"./Aboutnav.webp"
  }
  return (
    <div>
      <Navigation clicked={clicked} isClicked={isClicked}/>
      {clicked? <Menu/>:null}
      <div className={Aboutpage.piccrop}>
      <NavBar data={dataObj}/> 
      </div>
      
      <h1 className={Aboutpage.heading}>DIVE INTO AN INCREDIBLE EXPERIENCE</h1>
      <h3 className={Aboutpage.heading2}>Welcome to Indian Hotel The Royal Hotel</h3>

      <div className={Aboutpage.slideabout}>
        <AboutSilderData />

        <div className={Aboutpage.parabout}>
          <p>Get ready to immerse yourself in an incredible experience at our vibrant hotel! Whether you're craving adventure or simply in need of some downtime, we've got you covered. Our diverse range of 148 thoughtfully designed rooms ensures the perfect short stay for anyone seeking a delightful escape.</p>

          <p>
            Feel at home as soon as you step through our doors, surrounded by a lively and welcoming atmosphere. We're all about bringing people together, so get ready to make new friends, enjoy great conversations, and bond over shared experiences in our cozy common rooms. Oh, and did we mention the fantastic coffee?
          </p>

          <p>Our industrial-style rooms are like a breath of fresh air, blending classic elements with a modern twist. With pops of color and unique designs, they create an inspiring backdrop that'll make your stay extra memorable. We're all about embracing change and celebrating individuality, and our spaces reflect that spirit.</p>
        </div>
      </div>

      <div className={Aboutpage.row2}>
        <div className={Aboutpage.row2col1}><h1>"Passport to Unforgettable Experience."</h1></div>
        <div className={Aboutpage.row2col2}><p>Come on over and discover a place that's bursting with energy and excitement. Our hotel is your passport to an unforgettable experience, where you can unwind, explore, and connect with like-minded souls. Get ready to embark on a journey that's all about embracing the moment and creating lasting memories.</p></div>
      </div>

      <div className={Aboutpage.foot}>
        <div className={Aboutpage.finter}>
          <span>
            <h1>OUR AMENITIES & SERVICES</h1>
            <h3>Hygiene, comfort, and convenience are our top priorities</h3>
          </span>

          <span className={Aboutpage.efctpara}>
            <p>We know you've got things to do and places to be, so we've made sure our hotel is perfectly equipped for your needs. From a good night's sleep to a productive work or study session, we've got you covered. </p>
            <p>Eat, sleep, work or play, and repeat—it's all right here</p>
          </span>
        </div>

        <div className={Aboutpage.icons}>
          <span>
          <span className={Aboutpage.ico}>{fai}</span>24-hour check-in <br />
          <span className={Aboutpage.ico}>{fai}</span>24-hour front desk <br />
          <span className={Aboutpage.ico}>{fai}</span>Internet <br />
          <span className={Aboutpage.ico}>{fai}</span>Elevator <br />
          <span className={Aboutpage.ico}>{fai}</span>Heating <br />
          <span className={Aboutpage.ico}>{fai}</span>Baggage storage
          </span>
          
          <span>
          <span className={Aboutpage.ico}>{fai}</span>Guest parking <br />
          <span className={Aboutpage.ico}>{fai}</span>Beauty services <br />
          <span className={Aboutpage.ico}>{fai}</span>Hair / Beauty salon <br />
          <span className={Aboutpage.ico}>{fai}</span>Massage <br />
          <span className={Aboutpage.ico}>{fai}</span>Restaurant <br />
          <span className={Aboutpage.ico}>{fai}</span>Terrace
          </span>

          <span>
          <span className={Aboutpage.ico}>{fai}</span>CCTV in common areas <br />
          <span className={Aboutpage.ico}>{fai}</span>CCTV outside property <br />
          <span className={Aboutpage.ico}>{fai}</span>Fire extinguishers <br />
          <span className={Aboutpage.ico}>{fai}</span>Non-smoking rooms <br />
          <span className={Aboutpage.ico}>{fai}</span>Security alarm <br />
          <span className={Aboutpage.ico}>{fai}</span>Smoke alarms <br />
          </span>

        </div>
      </div>
    </div>
  );
}

export default AboutUs;

import React from 'react';
import Cntr from './Cntr.module.css'
import SimpleSlider from './SimpleSlider';
import CenterDivSliderData from './CenterDivSliderData';
import { Link } from 'react-router-dom';

function CentreDiv() {

  const  handleNav = () => {
    window.scrollTo({
      top: window.screenTop,
    })
  }
  return (
    <div className={Cntr.container}>
      <div>
      <h1 className={Cntr.headist}>STAY IN STYLE & COMFORT</h1>
      <h3 className={Cntr.head2nd}>Welcome to ROYAL HOTEL</h3>
      </div>
      

      <div className={Cntr.about}>

        <CenterDivSliderData/>

        <div className={Cntr.para}>
          <p>Exploring the city center and museums of an urban city is great, but it's even better when you have the chance to take a break with a picnic in the park or a bike ride to the beach.
            The moment you walk through our doors, you'll feel the immaculate atmosphere. Our devoted staff, who we proudly regard as our extended family, stands ready to greet you with genuine smiles and unwavering assistance. Your every need, no matter how small or grand, is our top priority, as we are here to ensure your stay is not just comfortable but truly rejuvenating.
            Urban Hotel The Golden Stork promises you the best of both worlds city vibrancy and tranquil relaxation. So why wait? Secure your stay with us and savor each moment, knowing that we are here to shoulder any burdens, leaving you with nothing but cherished memories. Your escape begins here, with us.
          </p>
            <Link to="/about" onClick={handleNav}><button>ABOUT US</button></Link>
        </div>

      </div>
    </div>


  );
}

export default CentreDiv;


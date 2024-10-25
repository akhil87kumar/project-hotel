import React from 'react';
import Facility from './Facility.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKitchenSet,faBed ,faBurger} from '@fortawesome/free-solid-svg-icons'

function Facilites() {
  return (
    <div>
      <div className={Facility.heading}>
        <h1>FEATURED FACILITIES</h1>
        <h3>One of the many reasons to choose us</h3>
      </div>

      <div className={Facility.main} >
        <div className={Facility.row1}>
          <div className={Facility.rcol1}>
            <span className={Facility.designicon} ><FontAwesomeIcon icon={faBed}/></span>
            
            <span><h1>Affordable rooms </h1>
            <p>At our hotel, you have the freedom to select <br /> the stay option that suits you best</p></span>
            
          </div>
          <div className={Facility.rcol1}>
              <span className={Facility.designicon} ><FontAwesomeIcon icon={faKitchenSet}/></span>
              <span><h1>Ground floor restaurant</h1>
            <p>Choose a tasty meal, whether breakfast or late,<br /> to enjoy.</p></span>
          </div>
        </div>


        <div className={Facility.row1}>
          <div className={Facility.rcol1}>
          <span className={Facility.designicon} ><FontAwesomeIcon icon={faBurger} /></span>
              <span><h1>24-hour reception</h1>
            <p>Late check-in, early check out, conversation <br />during the restless midnight hours</p></span>
          </div>
          <div className={Facility.rcol1}>
          <span className={Facility.designicon} ><FontAwesomeIcon icon={faBurger} /></span>
              <span><h1>Guest parking</h1>
            <p>We monitor parking behind the building for pre- <br />reservation.</p></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facilites;

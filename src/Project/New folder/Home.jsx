import React,{useState} from 'react';
import SearchComp from './SearchComp';
import CentreDiv from './CentreDiv';
import Rooms from './Rooms';
import Effact from './Effact';
import Facilites from './Facilites';
import GuestReview from './GuestReview';
import NavBar from '../NavBar';
import Navigation from './Navigation';
import Menu from './Menu';



function Home() {
  const [clicked,isClicked]=useState(false);


  let dataObj = {
    line1 : "YOUR NEST OF COMFORT:",
    line2 : "ROYAL HOTEL",
    para : "We deliver high-end quality memories",
    imgnav:"./hotel3.jpg"
  }
  return (
    <div>
      <Navigation clicked={clicked} isClicked={isClicked}/>
      {clicked? <Menu/>:null}
      <NavBar data={dataObj}/>
      <CentreDiv/>
      <Rooms/>
      <Effact/>
      <Facilites/>
      <GuestReview />
    </div>
  );
}

export default Home;

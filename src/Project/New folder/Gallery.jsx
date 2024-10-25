import React,{useState} from 'react';
import Navigation from './Navigation';
import NavBar from '../NavBar';
import Gallerys from './Gallerys.module.css'
import Menu from './Menu';

function Gallery() {
  //--------------hambuger MENU---------------//
  const [clicked,isClicked]=useState(false);

  let dataObj = {
    line1 : "Gallery",
    line2 : null,
    para : "Visit us through imagery",
    imgnav:"./Gallery.jpg"
  }
  return (
    <div>
      <Navigation clicked={clicked} isClicked={isClicked}/>
      {clicked? <Menu/>:null}
      <div className={Gallerys.galstyle}>
      <NavBar data={dataObj}/>
      </div>
      <div className={Gallerys.container}>
        <div className={`${Gallerys.items} ${Gallerys.item1}`}> <img src="./gallery1.webp" alt="image" /> </div>
        <div className={`${Gallerys.items} ${Gallerys.item23}`}> <img src="./gallery2.webp" alt="image" /></div>
        <div className={`${Gallerys.items} ${Gallerys.item23}`}> <img src="./gallery3.webp" alt="image" /> </div>
        <div className={`${Gallerys.items} ${Gallerys.item4}`}> <img src="./gallery4.webp" alt="image" /></div>
      </div>

      <div className={Gallerys.container2}>
        <div className={`${Gallerys.items} ${Gallerys.item56}`}> <img src="./galimg1.webp" alt="image" /> </div>
        <div className={ `${Gallerys.items} ${Gallerys.item56}`}> <img src="./galimg2.webp" alt="image" /></div>
        <div className={`${Gallerys.items} ${Gallerys.item7}`}> <img src="./galimg3.webp" alt="image" /> </div>
        <div className={`${Gallerys.items} ${Gallerys.item8}`}> <img src="./galimg4.webp" alt="image" /></div>
      </div>

      <div className={Gallerys.container2}>
        <div className={`${Gallerys.items} ${Gallerys.item1}`}> <img src="./galimg9.webp" alt="image" /> </div>
        <div className={ `${Gallerys.items} ${Gallerys.item23}`}> <img src="./galimg10.webp" alt="image" /></div>
        <div className={`${Gallerys.items} ${Gallerys.item23}`}> <img src="./galimg11.webp" alt="image" /> </div>
        <div className={`${Gallerys.items} ${Gallerys.item4}`}> <img src="./galimg12.webp" alt="image" /></div>
      </div>

      <div className={Gallerys.containerend}>
        <div className={`${Gallerys.items} ${Gallerys.item56}`}> <img src="./galimg13.webp" alt="image" /> </div>
        <div className={ `${Gallerys.items} ${Gallerys.item56}`}> <img src="./galimg14.webp" alt="image" /></div>
        <div className={`${Gallerys.items} ${Gallerys.item7}`}> <img src="./galimg15.webp" alt="image" /> </div>
        <div className={`${Gallerys.items} ${Gallerys.item8}`}> <img src="./galimg16.webp" alt="image" /></div>
      </div>
    </div>
  );
}

export default Gallery;


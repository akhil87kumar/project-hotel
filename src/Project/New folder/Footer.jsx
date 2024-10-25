import React from 'react';
import { Link } from 'react-router-dom';
import Footerstyle from './Footerstyle.module.css'
function Footer() {
    const  handleNav = () => {
        window.scrollTo({
          top: window.screenTop,
        })
      }
    return (
        <div className={Footerstyle.mainfooter}>
            <div className={Footerstyle.boxfooter}>
                <img src="./Logo.jpg" alt="" height="300px" width="270px" />
            </div>
            <div className={Footerstyle.boxfooter}>
                <h2>CONTACT US</h2>
                <div>
                    <h3>Volmerlaan 7, 2288 GC, Rijswijk</h3>
                    <h3>Phone:  +31 70 800 2128</h3>
                    <h3>Email:  royalhotel@gmail.com</h3>
                </div>

                <div>
                    <span><Link><img src="./Facebook icon.jpeg" alt="logo" /></Link></span>
                    <span><Link><img src="./insta.jpg" alt="logo" /></Link></span>
                    <span><Link><img src="./twitter.jpg" alt="logo" /></Link></span>
                    <span><Link><img src="./whatsapp.jpg" alt="logo" /></Link></span>
                    </div>
            </div>
            <div className={Footerstyle.boxfooter}>
                <h2>LINKS</h2>
                <div className={Footerstyle.link}>
                    <Link to="/" onClick={handleNav}><h3 >HOME</h3></Link>
                    <Link to="/about" onClick={handleNav}><h3 >ABOUT US</h3></Link>
                    <Link to="/room" onClick={handleNav}><h3 >ROOM</h3></Link>
                    <Link to="/gallery" onClick={handleNav}><h3 >GALLERY</h3></Link>
                    <Link to="/contact" onClick={handleNav}><h3 >CONTACT US</h3></Link>
                    
                </div>
            </div>
        </div>
    );
}

export default Footer;

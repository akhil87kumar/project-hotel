import React,{useState} from 'react';
import Navigation from './Navigation';
import NavBar from '../NavBar';
import Contact from './Contact.module.css'
import ContactForm from './ContactForm';
import Menu from './Menu';

function ContactUs() {
  //--------------hambuger MENU---------------//
  const [clicked,isClicked]=useState(false);
  let dataObj = {
    line1: "CONTACT US",
    line2: null,
    para: "We would love to hear from you!",
    imgnav: "./ContactUs.webp"
  }
  return (
    <div>
      <Navigation clicked={clicked} isClicked={isClicked}/>
      {clicked? <Menu/>:null}
      <div className={Contact.piccrop}>
        <NavBar data={dataObj} />
      </div>

      <div className={Contact.info}>

        <div className={Contact.conta}>
          <h1>Contact Info</h1>
          <p>Check-In: 12:00 PM</p>
          <p>Check-Out: 11:99 AM</p>
          <p><span>Address:</span> Volmerlaan 7,<br />
            2288 GC, Rijswijk</p>
          <p><span>Phone:</span> +31 70 800 2128</p>
          <p className={Contact.psize}> <span>Email:</span> royahotel@gmail.com</p>
        </div>

        <div className={Contact.mapcontainer}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1741220.8574267032!2d74.13455529374997!3d31.52904880000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391ad34c6aea6ddd%3A0xeaa7a7e9b022069e!2sHotel%20Sagar%20View!5e0!3m2!1sen!2sin!4v1714741701673!5m2!1sen!2sin" width="600" height="450" allowFullCcreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      <div className={Contact.message}>
        <span>
          <h1>GET IN TOUCH!</h1>
          <p>Interested in booking your next stay at Indian Hotel The Royal Hotel? We'd love to hear from you - contact us using the</p>
          <p>orm below, and we'll get right back to you. We look forward to serving you.</p>
        </span>


        <ContactForm />
      </div>


      <section className={Contact.lastsec}>
        <h1>Indian Hotel The Royal Hotel</h1>
        <div className={Contact.lastcon}>
          <div><img src="./img1.jpeg" alt="image" /></div>
          <div><img src="./img2.jpg" alt="image" /></div>
          <div><img src="./img3.png" alt="image" /></div>
          <div><img src="./ContactUs.webp" alt="image" /></div>
        </div>
        <div className={Contact.lastcon1}>
          <div><img src="./img5.webp" alt="image" /></div>
          <div><img src="./img6.jpg" alt="image" /></div>
          {/* <div><img src="" alt="" /></div>
          <div><img src="" alt="" /></div> */}
        </div>
      </section>

    </div>
  );
}

export default ContactUs;

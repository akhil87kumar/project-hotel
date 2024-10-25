import React from 'react';
import Footer from './Project/New folder/Footer';
import { Routes, Route} from 'react-router-dom';
import BookRoom from './Project/New folder/BookRoom';
import AboutUs from './Project/New folder/AboutUs';
import Gallery from './Project/New folder/Gallery';
import ContactUs from './Project/New folder/ContactUs';
import Home from './Project/New folder/Home';




function App() {
  
  return (
    <div>
     <Routes>
          <Route path='/' element={<Home/>}/>  
          <Route path='/room' element={<BookRoom />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
      <Footer />
      

    </div>
  );
}

export default App;

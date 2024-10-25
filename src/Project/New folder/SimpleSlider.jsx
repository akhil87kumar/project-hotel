import Slider from "react-slick";
import Simpleslide from './Simpleslide.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider({data}) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    isPaused:true,
    arrows:false,
  };

  return (

    <Slider {...settings} className={Simpleslide.images}>

      <div className={Simpleslide.picsd}>
        <img src={data.img1} alt="image"/>
      </div>
      
      <div className={Simpleslide.picsd}>
        <img src={data.img2} alt="image"/>
      </div>

      <div className={Simpleslide.picsd}>
        <img src={data.img3} alt="image"/>
      </div>

    </Slider>

  );
}


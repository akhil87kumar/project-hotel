import React, { Component } from "react";
import Slider from "react-slick";
import Slick from "./Slick.module.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Custom from './Custom.module.css'


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black", position:"absolute",marginRight:"15px",zIndex:"1"}}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black",position:"absolute",marginLeft:"15px",zIndex:"1"}}
            onClick={onClick}
        />
    );
}


function CustomArrows() {
    const icons = <FontAwesomeIcon icon={faStar} />;
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        nextArrow: <SampleNextArrow className={Custom.next}/>,
        prevArrow: <SamplePrevArrow className={Custom.next}/>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    return (
        <div className={Slick.main}>
            <span className={Slick.headstyle}>
            <h1>GUEST REVIEWS</h1>
            <h2>Read what are guests say about us</h2></span>
            
            <Slider {...settings}>
                <div className={Slick.style}>
                    <h3 className={Slick.iconstyle}>{icons}{icons}{icons}{icons}{icons}</h3>
                    <p>Lots of space in the room and will give you a comfortable stay, tram stop right in front of it making it very easy to get to the center or to the beach, staff is friendly and helpful, recommend!</p>
                    <h3>Ger K</h3>
                </div>
                <div className={Slick.style}>
                    <h3 className={Slick.iconstyle}>{icons}{icons}{icons}{icons}{icons}</h3>
                    <p>Cozy, clean place to stay. Easy to reach by public transport and car and in fact really close to the city center, even though it says it's "Urban". Staff really helpful and friendly. Good price/quality.</p>
                    <h3>Skirmantė Sabataitytė</h3>
                </div>
                <div className={Slick.style}>
                    <h3 className={Slick.iconstyle}>{icons}{icons}{icons}{icons}{icons}</h3>
                    <p>Amazing place to stay, very nice people and an amazing atmosphere: comfy beds and good hygiëne.Very cosy place for a perfect price.Nice common space for relax at every floor.</p>
                    <h3>Laura Tuinebreyer</h3>
                </div>
                <div className={Slick.style}>
                    <h3 className={Slick.iconstyle} id="icon">{icons}{icons}{icons}{icons}{icons}</h3>
                    <p>Very cosy place for a perfect price.Nice common space for relax at every floor.Amazing place to stay, very nice people and an amazing atmosphere: comfy beds and good hygiëne.A perfect price.</p>
                    <h3>Olena Rozhko</h3>
                </div>
                <div className={Slick.style}>
                    <h3 className={Slick.iconstyle}>{icons}{icons}{icons}{icons}{icons}</h3>
                    <p>Lovely rooms, free parking, convenient location, Rijswijk station around the corner, and the tram stops around the other one, shops and markets within 8 minutes walk.</p>
                    <h3>Akemi Go Go</h3>
                </div>
            </Slider>
        </div>
    );
}

export default CustomArrows;

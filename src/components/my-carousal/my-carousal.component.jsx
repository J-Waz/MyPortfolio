import React from "react";
import Carousel from "react-bootstrap/Carousel";
import carousalImage1 from "../../assets/img/carousalImage1.jpg";
import carousalImage2 from "../../assets/img/carousalImage2.jpeg";
import carousalImage3 from "../../assets/img/carousalImage3.jpeg";
import ScrollDown from "../scroll-down/scroll-down.component";
import "./my-carousel.component.style.css"

const MyCarousal = () => {
  return (
    <div id="home">
      <Carousel
        controls={false}
        indicators
        interval={2600}
        pauseOnHover={false}
      >
        <Carousel.Item>
          <img
            className="d-block w- custom-img"
            src={carousalImage1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w- custom-img"
            src={carousalImage3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w- custom-img"
            src={carousalImage2}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <ScrollDown />
    </div>
  );
};

export default MyCarousal;

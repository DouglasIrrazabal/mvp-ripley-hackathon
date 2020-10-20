import React from "react";
import { Carousel } from "react-bootstrap";
import '../assets/css/slider.css'

export const Slider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-70 img-carousel"
            src={require("../assets/img/slider-1.jpg")}
            alt="Primera imagen"
          />
          <Carousel.Caption>
            <h3>Conoce R-Works</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-carousel"
            src={require("../assets/img/slider-2.jpg")}
            alt="Segunda imagen"
          />

          <Carousel.Caption>
            <h3>Únete a nuestro equipo</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-carousel"
            src={require("../assets/img/slider-3.jpg")}
            alt="Tercera imagen"
          />
          <Carousel.Caption>
            <h3>Innovación Ripley Tech</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

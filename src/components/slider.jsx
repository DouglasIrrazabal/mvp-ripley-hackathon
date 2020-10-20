import React from "react";
import { Carousel } from "react-bootstrap";
import '../assets/css/slider.css'

export const Slider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 img-carousel"
            src={require("../assets/img/dog.jpg")}
            alt="Primera imagen"
          />
          <Carousel.Caption>
            <h3>Somos transparentes</h3>
            <p>Mostramos a los demás todo lo que hacemos, siempre abiertos a recibir y dar feedback que permita aprender, crecer y mejorar.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-carousel"
            src={require("../assets/img/dog.jpg")}
            alt="Segunda imagen"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-carousel"
            src={require("../assets/img/dog.jpg")}
            alt="Tercera imagen"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

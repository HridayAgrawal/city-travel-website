import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carousel1.css";
import bridge from "../bridge.jpg";
import hollywoodSign from "../hollywoodSign.jpg";
import santaMonica from "../santaMonica.jpg";

function Carousel1() {
  return (
    <main>
      <div className="carousel-heading">
        <h1>Must visit places in the city</h1>
      </div>
      <div className="container-3">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block carousel-img"
              src={bridge}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Bay Bridge</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block carousel-img"
              src={hollywoodSign}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Hollywood Mountains</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block carousel-img"
              src={santaMonica}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Santa Monica Pier</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </main>
  );
}

export default Carousel1;

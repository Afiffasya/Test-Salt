import React from "react";
import Container from "react-bootstrap/Container";
import "./Speciality.css";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../assets/Vector (1).jpg";
import img2 from "../../assets/Vector (2).jpg";
import img3 from "../../assets/Group.png";

function Speciality() {


  return (
    <Container fluid className="car">
      <Carousel className="spes">
        <Carousel.Item>
          <h2>OUR SPECIALITY</h2>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            euismod libero vel leo auctor, in venenatis nulla consequat. Sed
            commodo nunc sit amet congue aliquam.
          </span>
          <img src={img1} alt="" />
          
        </Carousel.Item>
        <Carousel.Item>
          <h2>OUR SPECIALITY</h2>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            euismod libero vel leo auctor, in venenatis nulla consequat. Sed
            commodo nunc sit amet congue aliquam.
          </span>
          <img src={img2} alt="" />
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            euismod libero vel leo auctor, in venenatis nulla consequat. Sed
            commodo nunc sit amet congue aliquam.
          </span>
        </Carousel.Item>
        <Carousel.Item>
          <h2>OUR SPECIALITY</h2>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            euismod libero vel leo auctor, in venenatis nulla consequat. Sed
            commodo nunc sit amet congue aliquam.
          </span>
          <img src={img3} alt="" />
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            euismod libero vel leo auctor, in venenatis nulla consequat. Sed
            commodo nunc sit amet congue aliquam.
          </span>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Speciality;

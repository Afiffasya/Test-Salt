import React from "react";
import Container from "react-bootstrap/Container";
import "./Main.css";
import Group from "../../assets/Group.svg";
import topbanner from "../../assets/Hero.svg"
import botbanner from "../../assets/Background.svg";

function Main() {
  return (
    <Container fluid>
      <div className="Hero">
        <img src={topbanner} alt="" />
      </div>
      <div className="Hero-content">
        <img src={botbanner} alt="" />
        <h1>Discover Your Wonder</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
      <div className="scroll">
        <img className="group" src={Group} />
      </div>
    </Container>
  );
}

export default Main;

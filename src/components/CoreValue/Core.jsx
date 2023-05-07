import React from "react";
import "./Core.css";
import CoreValues from "../../assets/Core Values Illustration.jpg";
import Container from "react-bootstrap/Container";

function Core() {
  return (
    <Container fluid>
        <div className="core">
      <h2 className="title">Our Core Values</h2>
      <span>
        Ridiculus laoreet libero pretium et, sit vel elementum convallis fames.
        Sit suspendisse etiam eget egestas. Aliquet odio et lectus etiam sit. In
        mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec amet
        enim.
      </span>
      <ul className="ul-core">
        <li>
          Dedication{" "}
          <span>
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat.
          </span>
        </li>
        <li>
          Dedication{" "}
          <span>
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat.
          </span>
        </li>
        <li>
          Dedication{" "}
          <span>
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat.
          </span>
        </li>
      </ul>
      <img src={CoreValues} alt="ilustrations" />
      </div>
    </Container>
  );
}

export default Core;

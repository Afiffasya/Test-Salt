import Container from "react-bootstrap/Container";
import "./Footer.css";
import frame from "../../assets/Frame.svg";

function Footer() {
  return (
    <Container fluid className="foot">
      <div className="icon">
        <img className="logo" src={frame} />
      </div>
      <div className="addres">
        <div class="dropdown">
          <button
            class="btn btn-white dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            TECHNOLOGY DEPARTMENT
          </button>
        </div>
        <h6>
          Jl. Lembong No 8 Kel. Braga Kec. Sumur Bandung, Kota Bandung, Jawa
          Barat
        </h6>
      </div>
      <ul type="none" className="ul-foot">
        <li className="txt">Who We Are</li>
        <li className="txt">Our Values</li>
        <li className="txt">The Perks</li>
      </ul>
    </Container>
  );
}

export default Footer;

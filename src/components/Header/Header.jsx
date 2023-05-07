import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import frame0 from "../../assets/Frame0.svg";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <img className="logo" src={frame0} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

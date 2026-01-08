import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../pages/Home.css";
import { Link } from "react-router-dom";
function Nnav() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="custom-navbar ">
        <Container >
          <Navbar.Toggle aria-controls="responsive-navbar-nav  " />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="centered-nav mx-auto" >
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/projects" className="nav-link">Projects</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
              <Link to="/about" className="nav-link">About</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Nnav;

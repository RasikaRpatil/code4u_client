import React from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import './Code4uNavBar.css';

function Code4uNavBar() {
  return (
    <div>
      <Navbar  fixed="top" id="code4unavbar" collapseOnSelect expand="lg"
      variant="dark" bg="dark">
        <Container>
        <Navbar.Brand><h2 className="Name">CODE<span className="NameFour">4</span>U</h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-nav-bar"></Navbar.Toggle>
          <Navbar.Collapse id="responsive-nav-bar">
            <Nav className="ms-auto">
              <Nav.Link  href="#home" className="mNavLink">
                Home
              </Nav.Link>
              <Nav.Link   href="#about" className="mNavLink">
                About
              </Nav.Link>
              <Nav.Link  href="#blog" className="mNavLink">
                  Blogs
                 </Nav.Link>
                 <Nav.Link  href="#pseudocode" className="mNavLink">
                Pseudo Code
              </Nav.Link>
              <Nav.Link  href="#codehacks" className="mNavLink">
                Codehacks
              </Nav.Link>
              <Nav.Link   href="#studymaterial" className="mNavLink">
                Study Material
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Code4uNavBar;

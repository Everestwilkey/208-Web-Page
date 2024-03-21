import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3"> {/* Increase padding for more vertical space */}
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-3">208Trader</Navbar.Brand> {/* Bold and larger text */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home" className="fs-5 px-3">Home</Nav.Link> {/* Bigger text and spaced apart */}
            <Nav.Link href="profile" className="fs-5 px-3">Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

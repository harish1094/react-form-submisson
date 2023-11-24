import React from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Navbar.Brand href="/">Navbar</Navbar.Brand>
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="/users">Users</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;

import React, { useState } from "react";
import { Jumbotron, Container, Navbar, Nav, Badge, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  return (
    // <Jumbotron style={{ marginBottom: 0, background: "lightGrey" }}>
    //
    <Navbar
      sticky="top"
      className="stickyTop"
      expand="lg"
      style={{ background: "#31708E" }}
    >
      <Container>
        <Navbar.Brand>
          <Nav.Link href="/">
            <h1>
              <Badge variant="secondary">Dylan Travis</Badge>
            </h1>
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => toggle()}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/projects">
              <h3>Projects</h3>
            </Nav.Link>
            <Nav.Link href="/about">
              <h3>About</h3>
            </Nav.Link>
            <Nav.Link href="/about">
              <FaGithub size="2rem" />
            </Nav.Link>
            <Nav.Link href="/about">
              <FaLinkedin size="2rem" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    //
    // </Jumbotron>
  );
};

export default NavBar;

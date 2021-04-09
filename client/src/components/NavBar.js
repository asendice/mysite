import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  return (
    <Navbar
      sticky="top"
      expand="lg"
      style={{ background: "#31708E", marginTop: 0 }}
    >
      <Container>
        <Navbar.Brand>
          <Nav.Link href="/">
            <h1 style={{ color: "#F7F9Fb" }}>Dylan Travis</h1>
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
            <Nav.Link href="/">
              <FaGithub size="2rem" />
            </Nav.Link>
            <Nav.Link href="/">
              <FaLinkedin size="2rem" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

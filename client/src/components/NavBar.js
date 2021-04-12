import React, { useState } from "react";
import { Container, Navbar, Nav, Badge, Button } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  return (
    <Navbar
      sticky="top"
      expand="lg"
      style={{ marginTop: 0, background: "#687864" }}
    >
      <Container>
        <Navbar.Brand>
          <Link to="home" spy={true} smooth={true} className="links">
            <h1 style={{ color: "#F7F9FB", textDecoration: "none" }}>
              Dylan Travis
            </h1>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => toggle()}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              className="links"
              style={{ color: "#fff" }}
            >
              <Badge className="navBadge">
                <h3>Projects</h3>
              </Badge>
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              className="links"
              style={{ color: "#fff" }}
            >
              <Badge className="navBadge">
                <h3>About</h3>
              </Badge>
            </Link>
            <a
              href="https://github.com/asendice"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Badge style={{ color: "#fff" }}>
                <FaGithub size="2rem" />
              </Badge>
            </a>
            <a
              href="https://www.linkedin.com/in/dylan-travis-2716a4205/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Badge style={{ color: "#fff" }}>
                <FaLinkedin size="2rem" />
              </Badge>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

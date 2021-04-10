import React from "react";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { Jumbotron, Container, Row, Col, Image } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <Jumbotron style={{ marginBottom: 0, background: "#687864"  }}>
        <Container>
          <Row>
            <Col style={{ textAlign: "center" }}>
              <h1>Contact Me</h1>
              <hr></hr>
            </Col>
          </Row>
          <Row>
            <Col style={{ textAlign: "center" }}>
              <h5>dylan.travis23@outlook.com</h5>
              <h5>775-203-4364</h5>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col lg="6" style={{ textAlign: "center" }}>
              <div className="contactIcons">
                <FaGithub size="3rem" />
                <FaLinkedin size="3rem" />
                <FaMailBulk size="3rem" />
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  );
};

export default Contact;

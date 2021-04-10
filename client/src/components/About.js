import React from "react";
import { Jumbotron, Container, Row, Col, Image } from "react-bootstrap";

const About = () => {
  return (
    <Jumbotron fluid style={{ minHeight: 700, marginBottom: 0, background: "#5085A5" }}>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col style={{ textAlign: "center" }}>
            <h1>About</h1>
            <hr></hr>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default About;

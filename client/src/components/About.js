import React from "react";
import { Jumbotron, Badge, Container, Row, Col, ListGroup } from "react-bootstrap";

const About = () => {
  return (
    <div id="about">
      <Jumbotron
        fluid
        style={{ minHeight: 700, marginBottom: 0, background: "#5085A5" }}
        className="smt"
      >
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col style={{ textAlign: "center" }}>
              <h1>About</h1>
              <hr></hr>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col style={{ textAlign: "center" }}>
              <Container>
                <h3 style={{ color: "#fff" }}>Technical Skills:</h3>
                <ul variant="flush">
                  <Badge className="skills" as="h5">
                    HTML
                  </Badge>
                  <Badge className="skills" as="h5">
                    {" "}
                    CSS
                  </Badge>
                  <Badge className="skills" as="h5">
                    JavaScript
                  </Badge>
                  <Badge className="skills" as="h5">
                    React
                  </Badge>
                  <Badge className="skills" as="h5">
                    React Native
                  </Badge>
                  <Badge className="skills" as="h5">
                    {" "}
                    Node
                  </Badge>
                  <Badge className="skills" as="h5">
                    Python
                  </Badge>
                  <Badge className="skills" as="h5">
                    Mongo DB
                  </Badge>
                  <Badge className="skills" as="h5">
                    {" "}
                    Express
                  </Badge>
                </ul>
              </Container>
            </Col>
            <Col style={{ textAlign: "center" }}>
              <Container>
                <h3>Ideal role:</h3>
              </Container>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default About;

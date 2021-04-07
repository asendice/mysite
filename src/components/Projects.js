import React from "react";
import { Jumbotron, Container, Row, Col, Badge } from "react-bootstrap";

const Projects = () => {
  return (
    <>
      <Jumbotron style={{ minHeight: 700, marginBottom: 0, background: "#687864" }}>
        <Container fluid style={{ justifyContent: "center" }}>
          <Row className="justify-content-md-center">
            <Col style={{ textAlign: "center" }}>
              <h1>Projects</h1>
              <hr></hr>
            </Col>
          </Row>
          <Row>

          </Row>
        </Container>
      </Jumbotron>
    </>
  );
};

export default Projects;

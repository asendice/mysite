import React from "react";
import stickyFigure from "../img/stick-figure.jpeg";
import { Jumbotron, Container, Row, Col, Image } from "react-bootstrap";

const Landing = () => {
  return (
    <Jumbotron style={{ minHeight: 700, top: 0 }}>
      <Container fluid style={{ justifyContent: "center" }}>
        <Row className="justify-content-md-center">
          <Col md="auto" style={{textAlign:"center"}}>
            {/* <Image src={stickyFigure}/> */}
            <h1>Dylan Travis</h1>
            <hr></hr>
            <h3>Front End Web Developer</h3>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Landing;

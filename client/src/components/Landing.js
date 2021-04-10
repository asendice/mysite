import React from "react";
import treeLine from "../img/treeLine.png";
import { Jumbotron, Container, Row, Col, Image } from "react-bootstrap";

const Landing = () => {
  return (
    <Jumbotron fluid style={{ minHeight: 700, marginBottom: 0, background: "#31708E" }}>
      <Container fluid style={{ justifyContent: "center", position: "relative" }}>
        <Row className="justify-content-md-center">
          <Col style={{ textAlign: "center", color: "#fff" }}>
            {/* <Image src={stickyFigure}/> */}
            <h1>Dylan Travis</h1>
            <hr></hr>
            <h3>Front End Web Developer</h3>
          </Col>
        </Row>
        <Row className="justify-content-md-center d-none d-sm-block" style={{ marginBottom: 0, position: "absolute", bottom: -514, marginRight: 0  }}>
          <Image  src={treeLine} fluid/>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Landing;

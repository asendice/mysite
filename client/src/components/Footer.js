import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Container fluid style={{ background: "#31708E", minHeight: 35 }}>
        <Row className="justify-content-md-center" >
          <Col style={{ textAlign: "center" }}>
            <span>
              Copyright <FaRegCopyright /> Dylan Travis 2021
            </span>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;

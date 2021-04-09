import React, { useState, useEffect } from "react";
import backendApi from "../apis/backendApi";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  CardDeck,
  Card,
} from "react-bootstrap";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  console.log(projects);

  const getProjects = async () => {
    await backendApi
      .get("/projects")
      .then((response) => {
        if (response) {
          console.log(response, "response");
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      })
      .then((response) => setProjects(response.data.message));
  };

  useEffect(() => {
    getProjects();
  }, []);

  const renderCards = () => {
    if (projects) {
      return projects.map((proj) => {
        return (
          <Card style={{ width: "22rem" }} key={proj._id}>
            <Card.Img src={proj.imgOne} />
          </Card>
        );
      });
    } else {
      return null;
    }
  };

  return (
    <>
      <Jumbotron
        style={{ minHeight: 700, marginBottom: 0, background: "#687864" }}
      >
        <Container style={{ justifyContent: "center" }}>
          <Row className="justify-content-md-center">
            <Col style={{ textAlign: "center" }}>
              <h1>Projects</h1>
              <hr></hr>
            </Col>
          </Row>
          {renderCards()}
        </Container>
        
      </Jumbotron>
    </>
  );
};

export default Projects;

import React, { useState, useEffect } from "react";
import backendApi from "../apis/backendApi";
import {
  Jumbotron,
  Container,
  Button,
  Badge,
  Row,
  Col,
  CardDeck,
  Card,
  Carousel,
  Modal,
  Image,
} from "react-bootstrap";
import { XCircle } from "react-bootstrap-icons";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProj, setSelectedProj] = useState({});
  const [open, setOpen] = useState(false);

  console.log((selectedProj), "selectedProj");

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

  const onCardClick = (proj) => {
    console.log("clicked");
    setSelectedProj(proj);
    setOpen(!open);
  };

  const renderSkills = () => {
    if (selectedProj.skills) { 
      return selectedProj.skills.map((skill) => {
        return (
          <>
          <Badge style={{ background: "grey", color: "#fff" }}>{skill}</Badge> {" "}
          </>
        );
      });
    } else {
      return null;
    }
  };

  const renderCards = () => {
    if (projects) {
      return projects.map((proj) => {
        return (
          <Card
            onClick={() => onCardClick(proj)}
            className="project-card"
            style={{ width: "100%" }}
            key={proj._id}
          >
            <Card.Img src={proj.imgOne} />
          </Card>
        );
      });
    } else {
      return null;
    }
  };

  const renderModal = () => {
    return (
      <Modal size="lg" show={open} onHide={() => setOpen(false)}>
        <Modal.Header>
          <Modal.Title as="h2">{selectedProj.name}</Modal.Title>
          <span className="btn-pos">
            <Button
              style={{ marginRight: 25, marginTop: 5 }}
              rel="noopener noreferrer"
              href={selectedProj.live}
              target="_blank"
            >
              Live Demo
            </Button>
            <Button
              style={{ marginRight: 50, marginTop: 5 }}
              rel="noopener noreferrer"
              href={selectedProj.gitHub}
              target="_blank"
            >
              GitHub
            </Button>
            <XCircle
              onClick={() => setOpen(false)}
              style={{ cursor: "pointer" }}
            />
          </span>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Modal.Title>{` Description`}</Modal.Title>
            <hr />
            <div>{selectedProj.description}</div>
          </Container>
          <Container>
            <Carousel style={{ border: "black solid 2px" }}>
              <Carousel.Item>
                <Image
                  className="carousel-image modal-image"
                  src={selectedProj.imgOne}
                  alt="first slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="carousel-image modal-image"
                  src={selectedProj.imgTwo}
                  alt="second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="carousel-image modal-image"
                  src={selectedProj.imgThree}
                  alt="third slide"
                />
              </Carousel.Item>
            </Carousel>
            <hr style={{ display: "hidden" }} />
            <Modal.Title>Skills</Modal.Title>
            {renderSkills()}
          </Container>
        </Modal.Body>
      </Modal>
    );
  };

  return (
    <div id="projects">
      <Jumbotron style={{ minHeight: 700, marginBottom: 0 }} className="smt">
        <Container style={{ justifyContent: "center" }}>
          <Row className="justify-content-md-center">
            <Col style={{ textAlign: "center" }}>
              <h1>Projects</h1>
              <hr></hr>
            </Col>
          </Row>
          <CardDeck style={{ alignItems: "center !important" }}>
            {renderCards()}
          </CardDeck>
        </Container>
      </Jumbotron>
      {renderModal()}
    </div>
  );
};

export default Projects;

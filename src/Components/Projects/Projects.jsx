import { React } from "react";
import { CardGroup, Card, Container, Button, Row } from "react-bootstrap";

import "./Projects.css";
import biodesign from "../../Assets/Projects/McGillBioDesign.jpg";
import rpArticle from "../../Assets/Projects/rp_article.png";
import quoridor from "../../Assets/Projects/quoridor.png";

export default function Projects() {
  return (
    <div className="projects-landing" id="projects">
      <Container classname="mx-auto">
        <h1> Projects </h1>
        <Row xs={1} md={4} className="g-4 justify-content-center">
          <Card className="my-card">
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>Arneet's Portfolio Website</Card.Title>
              <Card.Text>
                Another one of my projects is in fact this website! I developed
                this in order to learn React, and to get better at CSS.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">August 2021 - September 2021</small>
              <hr></hr>
              <Button
                variant="dark"
                onClick={e => {
                  e.preventDefault();
                  window.location.href =
                    "https://github.com/arneetsinghkalra/portfolio-website";
                }}
              >
                Repository
              </Button>
            </Card.Footer>
          </Card>

          <Card className="my-card">
            <Card.Img variant="top" src={rpArticle} />
            <Card.Body>
              <Card.Title>McGill Smart Waste Platform</Card.Title>
              <Card.Text>
                Continued working on the Recycling Pioneer project after I
                finished my internship. The project aims to bring a network of
                smart moitoring devices capable of recording the weight and
                fullness level of the waste bins at McGill University. The
                project is still underway, and has been recognized by University
                Advancment at McGill with a couple published articles.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">June 2020 - Present</small>
              <hr></hr>
              <Button
                variant="dark"
                onClick={e => {
                  e.preventDefault();
                  window.location.href =
                    "https://github.com/arneetsinghkalra/recycling-pioneers-web";
                }}
              >
                Web Repo
              </Button>

              <Button
                variant="dark"
                onClick={e => {
                  e.preventDefault();
                  window.location.href =
                    "https://github.com/arneetsinghkalra/recycling-pioneers-esp32";
                }}
                className="mx-1"
              >
                ESP32 Repo
              </Button>
            </Card.Footer>
          </Card>

          <Card className="my-card">
            <Card.Img variant="top" src={biodesign} />
            <Card.Body>
              <Card.Title>BluBand</Card.Title>
              <Card.Text>
                As part of McGill Biodesign, I worked on a project called
                BluBand. Our end goal was to develop a watch which monitors the
                blood glucose level of type-1 diabetic children. As part of the
                software team, I assisted in the development of the Andriod
                application which had a Firebase backend.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">September 2019 - August 2020</small>
              <hr></hr>
              <Button
                variant="dark"
                href="https://github.com/arneetsinghkalra/BluBand"
              >
                Repository
              </Button>
            </Card.Footer>
          </Card>

          <Card className="my-card">
            <Card.Img variant="top" src={quoridor} />
            <Card.Body>
              <Card.Title>Quoridor Board Game Application</Card.Title>
              <Card.Text>
                Developed a Java application of the famous strategic boardgame,
                Quoridor. Started the project by developing a UML Domain Model
                and State Machine with Umple. Followed a MVC (Model, View,
                Controller) architecture and a Behavior Drive Development
                approach by using Gherkin Step Definitions for testing and
                development. Project consisted of 5 sprints and used Git as our
                DVCS.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                September 2019 - December 2019
              </small>
              <hr></hr>
              <Button
                variant="dark"
                href="https://github.com/arneetsinghkalra/Quoridor"
              >
                Repository
              </Button>
            </Card.Footer>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

import { React } from "react";
import { Card, Container, Button, Row } from "react-bootstrap";

import "./Projects.css";
import biodesign from "../../Assets/Projects/McGillBioDesign.jpg";
import rpArticle from "../../Assets/Projects/rp_article.png";
import quoridor from "../../Assets/Projects/quoridor.png";
import mcgill from "../../Assets/Education/McGill.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import stthomas from "../../Assets/Projects/stthomasApp.png";

import ReactLogo from "../../Assets/Experience/reactjs-icon.svg";
import Java from "../../Assets/Experience/java.svg";
import Python from "../../Assets/Experience/python.svg";
import C from "../../Assets/Experience/c.png";
import Bootstrap from "../../Assets/Experience/bootstrap.svg";
import AndroidStudio from "../../Assets/Experience/androidstudio.png";
import Firebase from "../../Assets/Experience/firebase.png";
import Victory from "../../Assets/Experience/victory.svg";
import Arduino from "../../Assets/Experience/arduino.svg";
import Postgresql from "../../Assets/Experience/postgresql.svg";
import Django from "../../Assets/Experience/django.svg";
import Emailjs from "../../Assets/Experience/emailjs.png";
import Cucumber from "../../Assets/Experience/cucumber.svg";
import Uml from "../../Assets/Experience/uml.png";

export default function Projects() {
  const capstone_tech = [ReactLogo, Python, Django, Postgresql];
  const rp_tech = [ReactLogo, Victory, Bootstrap, Firebase, Arduino, C];
  const portfolio_tech = [ReactLogo, Bootstrap, Emailjs];
  const biodesign_tech = [Java, AndroidStudio, Firebase];
  const quoridor_tech = [Java, Cucumber, Uml];
  const stthomas_tech = [Java, AndroidStudio];

  return (
    <div className="projects-landing" id="projects">
      <Container classname="mx-auto" fluid>
        <h1 className="py-5"> Projects </h1>

        <Row xs={1} md={4} className="justify-content-center p-0 mx-0">
          <Card className="my-card ">
            <Card.Img variant="top" src={mcgill} />
            <Card.Body>
              <Card.Title>
                <b>St. Mary's Physician to Volunteer Network </b>
              </Card.Title>
              <Card.Text>
                For the final year Engineer project, my team and I are working
                with the McGill Chair of Family and Community Medicine at St.
                Mary's Hospital. The goal of the project is to continue the
                development of a web application which coordinates referrals
                from family physicians to community health volunteers. The
                product will pilot at St. Mary's Hospital.
              </Card.Text>
              {capstone_tech.map((technology, _) => (
                <img
                  src={technology}
                  alt={technology}
                  height="40px"
                  width="auto"
                  className="tech-image"
                />
              ))}
            </Card.Body>
            <Card.Footer className="my-footer">
              <small className="text-muted my-footer-text">
                In Progress since September 2021
              </small>
              <hr></hr>
              <Button
                variant="dark"
                onClick={e => {
                  e.preventDefault();
                  window.location.href =
                    "https://github.com/arneetsinghkalra/portfolio-website";
                }}
                disabled
              >
                Restricted Repository
              </Button>
            </Card.Footer>
          </Card>

          <Card className="my-card">
            <Card.Img variant="top" src={rpArticle} id="cover_background" />
            <Card.Body>
              <Card.Title>
                <b>McGill Smart Waste Platform</b>
              </Card.Title>
              <Card.Text>
                I continuted working on the Recycling Pioneers project after I
                finished my internship with the startup. Our team aims to bring
                a network of smart monitoring devices capable of recording the
                weight and fullness level of the waste bins at McGill
                University. The goal is to educate the community and reduce the
                waste generated on campus. The project is still underway, and
                has been recognized by University Advancment at McGill with a
                couple published articles.
              </Card.Text>
              {rp_tech.map((technology, _) => (
                <img
                  src={technology}
                  alt={technology}
                  height="40px"
                  width="auto"
                  className="tech-image"
                />
              ))}
            </Card.Body>
            <Card.Footer>
              <small className="text-muted my-footer-text">
                June 2020 - Present
              </small>
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
                className="m-1"
              >
                ESP32 Repo
              </Button>

              <Button
                variant="dark"
                onClick={e => {
                  e.preventDefault();
                  window.location.href = "https://recyclingpioneers.ca";
                }}
              >
                RP Website
              </Button>
            </Card.Footer>
          </Card>

          <Card className="my-card">
            <Card.Img variant="top" src={portfolio} id="cover_background" />
            <Card.Body>
              <Card.Title>
                <b>Arneet's Portfolio Website</b>
              </Card.Title>
              <Card.Text>
                Another one of my projects is in fact this website! I developed
                this in order develop my React and CSS skills. The website uses
                the React-Bootstrap library. EmailJs is integrated to allow
                emails to be sent directly to my email address using the contact
                form located at the bottom of the page (feel free to use it!). I
                also made use of external CSS libraries for animation such as
                React Spring.
              </Card.Text>
              {portfolio_tech.map((technology, _) => (
                <img
                  src={technology}
                  alt={technology}
                  height="40px"
                  width="auto"
                  className="tech-image"
                />
              ))}
            </Card.Body>
            <Card.Footer>
              <small className="text-muted my-footer-text">
                August 2021 - September 2021
              </small>
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
            <Card.Img variant="top" src={biodesign} />
            <Card.Body>
              <Card.Title>
                <b>BluBand</b>
              </Card.Title>
              <Card.Text>
                As part of McGill Biodesign, I worked on a project called
                BluBand. Our end goal was to develop a watch which monitors the
                blood glucose level of type-1 diabetic children. As part of the
                software team, I assisted in the development of the Andriod
                application which had a Firebase backend.
              </Card.Text>
              {biodesign_tech.map((technology, _) => (
                <img
                  src={technology}
                  alt={technology}
                  height="40px"
                  width="auto"
                  className="tech-image"
                />
              ))}
            </Card.Body>
            <Card.Footer>
              <small className="text-muted my-footer-text">
                September 2019 - August 2020
              </small>
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
              <Card.Title>
                <b>Quoridor Board Game Application</b>
              </Card.Title>
              <Card.Text>
                Developed a Java application of the famous strategic boardgame,
                Quoridor. Started the project by developing a UML Domain Model
                and State Machine with Umple. Followed a MVC (Model, View,
                Controller) architecture and a Behavior Drive Development
                approach by using Gherkin Step Definitions for testing and
                development. Project consisted of 5 sprints and used Git as our
                DVCS.
              </Card.Text>
              {quoridor_tech.map((technology, _) => (
                <img
                  src={technology}
                  alt={technology}
                  height="40px"
                  width="auto"
                  className="tech-image"
                />
              ))}
            </Card.Body>
            <Card.Footer>
              <small className="text-muted my-footer-text">
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

          <Card className="my-card">
            <Card.Img variant="top" src={stthomas} />
            <Card.Body>
              <Card.Title>
                <b>St. Thomas Android App</b>
              </Card.Title>
              <Card.Text>
                My first project ever that involved coding. For the
                International Baccalaureate final year project, I decided to
                code an Android application that would present the data
                avaliable on the official school website in an Android
                application. While showcasing text based information, it was
                capable of pulling the daily announcements and presenting it in
                a PDF format each day.
              </Card.Text>
              {stthomas_tech.map((technology, _) => (
                <img
                  src={technology}
                  alt={technology}
                  height="40px"
                  width="auto"
                  className="tech-image"
                />
              ))}
            </Card.Body>
            <Card.Footer>
              <small className="text-muted my-footer-text">
                September 2015 - June 2016
              </small>
              <hr></hr>
              <Button
                variant="dark"
                href="https://github.com/arneetsinghkalra/Quoridor"
                disabled
              >
                Repository Unavaliable
              </Button>
            </Card.Footer>
          </Card>
        </Row>

        <div className="projects-quote-div">
          <h4>
            "Programming is a skill best acquired by practice and example rather
            than from books."
          </h4>
          <p>
            <i> - Alan Turing </i>
          </p>
        </div>
      </Container>
    </div>
  );
}

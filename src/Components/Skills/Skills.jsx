import { React } from "react";
import { Container, Col, Row, ProgressBar } from "react-bootstrap";

import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import reactLogo from "../../Assets/Skills/react-logo.png";
import webTools from "../../Assets/Skills/webTools.png";
import firebase from "../../Assets/Skills/firebase.png";
import spring from "../../Assets/Skills/spring.png";
import java from "../../Assets/Skills/java.png";
import python from "../../Assets/Skills/python.png";

export default function Skills() {
  return (
    <div className="skills-landing" id="skills">
      <Container classname="mx-auto">
        <h1 className="py-3" style={{ color: "white" }}>
          Skills{" "}
        </h1>

        <Row>
          <Col xs={12} md={6}>
            <div className="skills-div">
              <h1 className="py-1"> Technical Skills</h1>
              <hr></hr>
              <br></br>

              <div className="mb-3">
                <img
                  src={reactLogo}
                  alt="PS Logo"
                  height="60px"
                  width="auto"
                  className="mx-1"
                />
                <img
                  src={webTools}
                  alt="PS Logo"
                  height="60px"
                  width="auto"
                  className="mx-1"
                />
              </div>
              <ProgressBar animated now={90} />

              <div className="my-3">
                <img
                  src={firebase}
                  alt="PS Logo"
                  height="60px"
                  width="auto"
                  className="mx-1"
                />
                <img
                  src={spring}
                  alt="PS Logo"
                  height="50px"
                  width="auto"
                  className="mx-1"
                />
              </div>
              <ProgressBar animated now={70} variant="danger" />

              <div className="my-3">
                <img
                  src={java}
                  alt="PS Logo"
                  height="60px"
                  width="auto"
                  className="mx-1"
                />
                <img
                  src={python}
                  alt="PS Logo"
                  height="60px"
                  width="auto"
                  className="mx-1"
                />
              </div>
              <ProgressBar animated now={95} variant="success" />
            </div>
          </Col>

          <Col xs={12} md={6}>
            <Row>
              <Col xs={12}>
                <div className="skills-div">
                  <h1 className="py-1"> Soft Skills</h1>
                  <hr></hr>
                  <br></br>

                  <h5 className="py-1">Communication</h5>
                  <ProgressBar animated now={95} />

                  <FontAwesomeIcon icon={["fab", "fa-react"]} />

                  <h5 className="py-1">Teamwork</h5>
                  <ProgressBar animated now={85} />

                  <h5 className="py-1">Leadership</h5>
                  <ProgressBar animated now={75} />
                </div>
              </Col>
            </Row>

            <Row>
              <Col xs={12}>
                <div className="skills-div">
                  <h1 className="py-1">Languages</h1>
                  <hr></hr>
                  <br></br>

                  <h5 className="py-1">English</h5>
                  <ProgressBar animated now={100} />

                  <FontAwesomeIcon icon={["fab", "fa-react"]} />

                  <h5 className="py-1">French</h5>
                  <ProgressBar animated now={90} />

                  <h5 className="py-1">Punjabi & Hindi</h5>
                  <ProgressBar animated now={95} />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <div class="curveArea">
        <div class="mainBox">
          <div class="curveSection"></div>
        </div>
      </div>
    </div>
  );
}

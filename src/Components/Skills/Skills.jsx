import { React } from "react";
import { Container, Row, ProgressBar, Card, Col } from "react-bootstrap";

import "./Skills.css";

import ReactLogo from "../../Assets/Experience/reactjs-icon.svg";
import Java from "../../Assets/Experience/java.svg";
import Python from "../../Assets/Experience/python.svg";
import C from "../../Assets/Experience/c.png";
import Bootstrap from "../../Assets/Experience/bootstrap.svg";
import AndroidStudio from "../../Assets/Experience/androidstudio.png";
import Firebase from "../../Assets/Experience/firebase.png";
import Arduino from "../../Assets/Experience/arduino.svg";
import Postgresql from "../../Assets/Experience/postgresql.svg";
import Spring from "../../Assets/Experience/spring.png";
import Django from "../../Assets/Experience/django.svg";
import Nodejs from "../../Assets/Experience/nodejs.svg";
import SQL from "../../Assets/Experience/sql.svg";
import Javascript from "../../Assets/Experience/javascript.svg";
import Vuejs from "../../Assets/Experience/vuejs.svg";
import MSSQL from "../../Assets/Experience/mssql.svg";
import Axios from "../../Assets/Experience/axios.svg";
import Emailjs from "../../Assets/Experience/emailjs.png";
import Cucumber from "../../Assets/Experience/cucumber.svg";
import Uml from "../../Assets/Experience/uml.png";

import TechnicalSkillRating from "./TechnicalSkillRating";
import SoftSkill from "./SoftSkills";

export default function Skills() {
  return (
    <div className="skills-landing" id="skills">
      <Container classname="mx-auto">
        <h1 className="py-5" style={{ color: "white" }}>
          Skills
        </h1>

        <Row xs={1} className="justify-content-center p-0 mx-0">
          <Card className="my-card">
            <Card.Body>
              <Card.Title>
                <h2>Technical Skills</h2>
                <hr></hr>
              </Card.Title>

              <Card.Text>
                <Row>
                  <Col xs={12} md={6}>
                    <h4>Front End</h4>
                    <TechnicalSkillRating
                      tech={ReactLogo}
                      techName="React"
                      percent="85"
                    />
                    <TechnicalSkillRating
                      tech={Vuejs}
                      techName="VueJS"
                      percent="70"
                    />
                    <TechnicalSkillRating
                      tech={Bootstrap}
                      techName="Bootstrap"
                      percent="90"
                    />
                    <TechnicalSkillRating
                      tech={Axios}
                      techName="Axios"
                      percent="83"
                    />
                    <TechnicalSkillRating
                      tech={Emailjs}
                      techName="Email JS"
                      percent="92"
                    />
                  </Col>

                  <Col xs={12} md={6}>
                    <h4>Back End</h4>
                    <TechnicalSkillRating
                      tech={Firebase}
                      techName="Firebase"
                      percent="85"
                    />
                    <TechnicalSkillRating
                      tech={Postgresql}
                      techName="PostgreSQL"
                      percent="70"
                    />
                    <TechnicalSkillRating
                      tech={Django}
                      techName="Django"
                      percent="55"
                    />

                    <TechnicalSkillRating
                      tech={Nodejs}
                      techName="Node JS"
                      percent="80"
                    />

                    <TechnicalSkillRating
                      tech={Spring}
                      techName="Spring Boot"
                      percent="85"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col xs={12} md={6}>
                    <h4 className="mt-3">Languages</h4>

                    <TechnicalSkillRating
                      tech={Java}
                      techName="Java"
                      percent="90"
                    />
                    <TechnicalSkillRating
                      tech={Python}
                      techName="Python"
                      percent="80"
                    />
                    <TechnicalSkillRating tech={C} techName="C" percent="70" />
                    <TechnicalSkillRating
                      tech={Javascript}
                      techName="Javascript"
                      percent="78"
                    />
                    <TechnicalSkillRating
                      tech={SQL}
                      techName="SQL"
                      percent="70"
                    />
                  </Col>
                  <Col xs={12} md={6}>
                    <h4 className="mt-3">Others</h4>

                    <TechnicalSkillRating
                      tech={AndroidStudio}
                      techName="Android Studio"
                      percent="88"
                    />
                    <TechnicalSkillRating
                      tech={Arduino}
                      techName="Arduino"
                      percent="82"
                    />
                    <TechnicalSkillRating
                      tech={MSSQL}
                      techName="MSSQL"
                      percent="74"
                    />
                    <TechnicalSkillRating
                      tech={Cucumber}
                      techName="Cucumber"
                      percent="78"
                    />
                    <TechnicalSkillRating
                      tech={Uml}
                      techName="UML"
                      percent="86"
                    />
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="my-card">
            <Card.Body>
              <Card.Title>
                <h2>Soft Skills</h2>
                <hr></hr>
              </Card.Title>

              <Card.Text>
                <Row>
                  <Col xs={12} md={6}>
                    <h4 className="mt-1 mb-3">Skills</h4>
                    <SoftSkill skill="Communication" percent="94" />
                    <SoftSkill skill="Team Work" percent="95" />
                    <SoftSkill skill="Leadership" percent="97" />
                    <SoftSkill skill="Researching" percent="98" />
                    <SoftSkill skill="Colloboration" percent="96" />
                  </Col>
                  <Col xs={12} md={6}>
                    <h4 className="mb-3 mt-1">Languages</h4>
                    <SoftSkill skill="English" percent="99" />
                    <SoftSkill skill="French" percent="92" />
                    <SoftSkill skill="Punjabi" percent="90" />
                    <SoftSkill skill="Hindi" percent="85" />
                    <SoftSkill skill="Spanish" percent="60" />
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
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

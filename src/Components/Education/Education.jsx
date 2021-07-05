import { React } from "react";
import { Container, Row } from "react-bootstrap";
import MyCard from "./Card";
import McGill from "../../Assets/Education/McGill.png";
import Marianopolis from "../../Assets/Education/Marianopolis.jpg";

import "./Education.css";

export default function Education() {
  return (
    <div className="education-landing" id="education">
      <Container classname="mx-auto">
        <h1> Education </h1>
        <Row className="cards">
          <MyCard
            school="McGill University"
            program="Software Engineering"
            imgSrc={McGill}
            time="2018 - 2022"
          />
          <MyCard
            school="Marianopolis College"
            program="Health Sciences"
            imgSrc={Marianopolis}
            time="2016 - 2018"
          />
        </Row>
      </Container>
    </div>
  );
}

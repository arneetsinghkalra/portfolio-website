import React from "react";

import { Row, Col, ProgressBar } from "react-bootstrap";

import "./TechnicalSkillRating.css";

export default function Coding(props) {
  return (
    <Row className="justify-content-center  mx-0 my-auto">
      <Col xs={3} className=" img__wrap my-auto">
        <img
          src={props.tech}
          alt={props.techName}
          height="35px"
          width="auto"
          className="img__img"
          title={props.techName}
        />
        <p className="img__description">{props.techName}</p>
      </Col>
      <Col xs={9} className="my-auto">
        <ProgressBar now={props.percent} variant="dark" />
      </Col>
    </Row>
  );
}

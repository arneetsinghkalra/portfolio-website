import React from "react";

import { Row, Col, ProgressBar } from "react-bootstrap";

export default function SoftSkill(props) {
  return (
    <Row className="justify-content-left p-0 mt-2">
      <Col xs={5} md={3} className="my-auto">
        {props.skill}
      </Col>
      <Col xs={7} md={9} className="my-auto">
        <ProgressBar now={props.percent} variant="dark" />
      </Col>
    </Row>
  );
}

import React from "react";
import Col from "react-bootstrap/Col";

import "./Portrait.css";
import PortraitImage from "../../Assets/Personal/casualPhoto.jpg";

export default function Portrait() {
  return (
    <Col className="my-portrait-card">
      <img src={PortraitImage} alt="arneet-portrait"></img>
    </Col>
  );
}

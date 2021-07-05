import React from "react";
import { Col } from "react-bootstrap";

import "./Card.css";

export default function MyCard(props) {
  return (
    <Col xs={12} md={6}>
      <div className="my-card">
        <img src={props.imgSrc} alt={props.title}></img>
        <div className="my-card-body">
          <hr></hr>
          <h3>{props.school}</h3>
          <h5>{props.program}</h5>
          <p>{props.time}</p>
        </div>
      </div>
    </Col>
  );
}

/*
 <Card className="myCard">
        <Card.Img variant="top" src={props.imgSrc} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.program}</Card.Text>
        </Card.Body>
      </Card>
      */

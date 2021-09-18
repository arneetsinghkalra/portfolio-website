import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Card.scss";

export default function MyCard(props) {
  return (
    <Card className="my-card">
      <Card.Img variant="top" src={props.src} height="auto" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.date}</Card.Text>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="dark" className="my-2">
          {props.button1}
        </Button>
        <Button variant="dark">{props.button2}</Button>
      </Card.Body>
    </Card>
  );
}

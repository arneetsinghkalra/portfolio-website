import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import React from "react";
import "./Projects.css";

/**
 * Card used in Project (Reusable)
 * Takes in:
 * image: main image to display
 * imageCoverBackground: optional prop -> will cover background if exists
 * title: name of project
 * description: summary of project
 * tech: technology stack used
 * date: when project started/ended
 * gitRepos:
 *      An array of arrays(each of size 3)
 *          Each subarray contains 3 parameters:
 *              1) Github Url
 *              2) Boolean: if true then disabled button else visible
 *              3) Text to be in button
 *
 * @param {*} props
 */
export default function ProjectCard(props) {
  return (
    <>
      <Card className="my-card">
        <Card.Img
          variant="top"
          src={props.image}
          id={props.imageCoverBackground && "cover_background"}
        />
        <Card.Body>
          <Card.Title>
            <b>{props.title}</b>
          </Card.Title>
          <Card.Text>{props.description}</Card.Text>
          {props.tech.map((technology, _) => (
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
          <small className="text-muted my-footer-text">{props.date}</small>
          <hr></hr>
          {props.gitRepos.map((btnItem, idx) => (
            <Button
              variant="dark"
              className="m-1"
              onClick={e => {
                e.preventDefault();
                window.location.href = btnItem[0];
              }}
              disabled={btnItem[1]}
            >
              {btnItem[2]}
            </Button>
          ))}
        </Card.Footer>
      </Card>
    </>
  );
}

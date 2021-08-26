import { React, useState } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { useSpring, animated, config } from "react-spring";

import "./Landing.css";
import SocialMediaLinks from "./SocialMediaLinks";
import Portrait from "./Portrait";
import CV from "../../Assets/Personal/CV.pdf";
import "../../index.css";

export default function Landing() {
  //Using react spring to define an animation
  const [flip, set] = useState(false);

  const words = ["Software Engineer", "Student", "Athlete", "Tech Enthusiast"];

  const { scroll } = useSpring({
    scroll: (words.length - 1) * 100,
    from: { scroll: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip)
  });

  const headerProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reverse: false,
    delay: 200,
    config: config.molasses
  });

  return (
    <Container className="my-landing-container" fluid>
      <Row>
        <Portrait />
      </Row>

      <Row>
        <Col className="justify-content-center">
          <animated.h1 style={headerProps}>Arneet Singh Kalra</animated.h1>
        </Col>
      </Row>

      <Row className="scrolling_div">
        <animated.div
          style={{
            position: "relative",
            width: "100%",
            height: 80,
            overflow: "auto",
            fontSize: "1.8em"
          }}
          scrollTop={scroll}
        >
          {words.map((word, i) => (
            <div
              key={`${word}_${i}`}
              style={{ width: "100%", height: 100, textAlign: "center" }}
            >
              {word}
            </div>
          ))}
        </animated.div>
      </Row>

      <Row>
        <Col className="resume-download justify-content-center">
          <a href={CV} download>
            <Button variant="light" id="my-btn">
              Download Resume
            </Button>
          </a>
        </Col>
      </Row>

      <Row className="my-social-media">
        <SocialMediaLinks />
      </Row>
    </Container>
  );
}

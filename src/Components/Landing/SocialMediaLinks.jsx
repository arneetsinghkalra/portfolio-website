import React from "react";
import Col from "react-bootstrap/Col";
import "./SocialMediaLinks.css";

import Linkedin from "../../Assets/SocialMedia/linkedin.png";
import Github from "../../Assets/SocialMedia/github.png";
import Instagram from "../../Assets/SocialMedia/insta.png";

//import GithubHidden from "../../Assets/SocialMedia/githubHidden.png";

export default function SocialMediaLinks() {
  return (
    <>
      <Col xs={12}>
        <div className="mx-auto social-media-background">
          <a href="https://github.com/arneetsinghkalra">
            <img
              src={Github}
              alt="Github Logo"
              className="my-logo"
              id="github"
            ></img>
          </a>

          <a href="https://www.instagram.com/arneetsinghk/">
            <img src={Instagram} alt="Instagram Logo" className="my-logo"></img>
          </a>

          <a href="https://www.linkedin.com/in/arneetsinghkalra/">
            <img src={Linkedin} alt="Linkedin Logo" className="my-logo"></img>
          </a>
        </div>
      </Col>
    </>
  );
}

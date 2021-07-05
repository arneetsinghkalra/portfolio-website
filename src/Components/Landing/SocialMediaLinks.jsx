import React from "react";
import { Col } from "react-bootstrap";
import "./SocialMediaLinks.css";

import Instagram from "../../Assets/SocialMedia/instagram.png";
import Linkedin from "../../Assets/SocialMedia/linkedin.png";
import Facebook from "../../Assets/SocialMedia/facebook.png";
import Github from "../../Assets/SocialMedia/github.png";
//import GithubHidden from "../../Assets/SocialMedia/githubHidden.png";

export default function SocialMediaLinks() {
  return (
    <>
      <Col>
        <a href="https://github.com/arneetsinghkalra">
          <img
            src={Github}
            alt="Github Logo"
            className="my-logo"
            id="github"
          ></img>
        </a>

        <a href="https://instagram.com">
          <img src={Instagram} alt="Instagram Logo" className="my-logo"></img>
        </a>

        <a href="https://www.linkedin.com/in/arneetsinghkalra/">
          <img src={Linkedin} alt="Linkedin Logo" className="my-logo"></img>
        </a>

        <a href="https://www.facebook.com/arneet.kalra">
          <img src={Facebook} alt="Facebook Logo" className="my-logo"></img>
        </a>
      </Col>
    </>
  );
}

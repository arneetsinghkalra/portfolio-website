import React from "react";
import "./Footer.css";
import SocialMedia from "../Landing/SocialMediaLinks.jsx";
import { Row } from "react-bootstrap";

export default function Footer() {
  return (
    <footer>
      <Row className="mb-3 justify-content-center">
        <SocialMedia />
      </Row>
    </footer>
  );
}

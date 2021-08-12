import React from "react";
import "./Navigation.css";

import { scroller, animateScroll as scroll } from "react-scroll";
import { Nav, Navbar } from "react-bootstrap";
import Signature from "../../Assets/Personal/newSignature.png";

export default function Navigation() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        sticky="top"
        className="my-nav-bar"
      >
        <div className="my-nav-brand" onClick={scroll.scrollToTop}>
          <Navbar.Brand to="landing">
            <img
              src={Signature}
              className="d-inline-block align-top my-brand-image"
              alt="Arneet Signature"
            />
          </Navbar.Brand>
        </div>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="my-nav-links" id="responsive-navbar-nav ">
          <Nav className="mx-auto ">
            <Nav.Link
              onClick={() =>
                scroller.scrollTo("education", {
                  spy: true,
                  smooth: true,
                  duration: 500
                })
              }
            >
              Education
            </Nav.Link>

            <Nav.Link
              onClick={() =>
                scroller.scrollTo("experience", {
                  spy: true,
                  smooth: true,
                  duration: 500
                })
              }
            >
              Experience
            </Nav.Link>

            <Nav.Link
              onClick={() =>
                scroller.scrollTo("projects", {
                  spy: true,
                  smooth: true,
                  duration: 500
                })
              }
            >
              Projects
            </Nav.Link>

            <Nav.Link
              onClick={() =>
                scroller.scrollTo("contact", {
                  spy: true,
                  smooth: true,
                  duration: 500
                })
              }
            >
              Contact Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

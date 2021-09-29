import React from "react";
import "./Navigation.css";

import { scroller, animateScroll as scroll } from "react-scroll";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Signature from "../../Assets/Personal/newSignatureWhite.png";

export default function Navigation() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        sticky="top"
        variant="dark"
        bg="black"
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
          <Nav className="mx-auto text-center">
            <Nav.Link
              eventKey="1"
              onClick={() =>
                scroller.scrollTo("education", {
                  spy: true,
                  smooth: true,
                  duration: 500
                })
              }
              className="my-nav-link"
            >
              Education
            </Nav.Link>

            <Nav.Link
              eventKey="2"
              onClick={() =>
                scroller.scrollTo("experience", {
                  spy: true,
                  smooth: true,
                  duration: 500
                })
              }
              className="my-nav-link"
            >
              Experience
            </Nav.Link>

            <Nav.Link
              eventKey="3"
              onClick={() =>
                scroller.scrollTo("projects", {
                  spy: true,
                  smooth: true,
                  duration: 500
                })
              }
              className="my-nav-link"
            >
              Projects
            </Nav.Link>
            <Nav.Link
              eventKey="4"
              onClick={() =>
                scroller.scrollTo("skills", {
                  spy: true,
                  smooth: true,
                  duration: 500
                })
              }
              className="my-nav-link"
            >
              Skills
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              eventKey="5"
              onClick={() =>
                scroller.scrollTo("contact", {
                  spy: true,
                  smooth: true,
                  duration: 500
                })
              }
              className="my-nav-link"
            >
              <Button variant="light" className="my-contact-btn">
                Contact Me
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

/*
 <p
        style={{
          backgroundColor: scrollState === "blackNavBar" ? "red" : "green",
          color: scrollState === "blackNavBar" ? "white" : "blue",
          position: "fixed"
        }}
      ></p>
      */

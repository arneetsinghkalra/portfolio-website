import { React, useState, useEffect } from "react";
import "./Navigation.css";

import { scroller, animateScroll as scroll } from "react-scroll";
import { Nav, Navbar, Button } from "react-bootstrap";
import Signature from "../../Assets/Personal/newSignatureWhite.png";

export default function Navigation() {
  let listener = null;
  const [scrollState, setScrollState] = useState("blackNavBar");

  useEffect(() => {
    listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 9425) {
        if (scrollState !== "whiteNavBar") {
          setScrollState("whiteNavBar");
        }
      } else {
        if (scrollState !== "blackNavBar") {
          setScrollState("blackNavBar");
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);

  return (
    <>
      <p
        style={{
          backgroundColor: scrollState === "blackNavBar" ? "red" : "green",
          color: scrollState === "blackNavBar" ? "white" : "blue",
          position: "fixed"
        }}
      >
        TESSTTTER
      </p>
      <Navbar
        collapseOnSelect
        expand="md"
        sticky="top"
        variant={scrollState === "blackNavBar" ? "dark" : "light"}
        bg={scrollState === "blackNavBar" ? "black" : "white"}
        color="red"
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
            <Button
              size="sm"
              variant="outline-light"
              className="my-contact-btn"
            >
              <Nav.Link
                onClick={() =>
                  scroller.scrollTo("contact", {
                    spy: true,
                    smooth: true,
                    duration: 500
                  })
                }
                className="my-nav-link"
              >
                Contact Me
              </Nav.Link>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

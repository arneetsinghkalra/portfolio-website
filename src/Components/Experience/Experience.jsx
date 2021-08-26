import { React } from "react";
import { Container } from "react-bootstrap";

import PS from "../../Assets/Experience/PublicisSapient.png";
import Greybox from "../../Assets/Experience/grey-box.jpg";
import RecyclingPioneers from "../../Assets/Experience/recyclingpioneers.png";
import Rogers from "../../Assets/Experience/rogers-logo.svg";
import ReactLogo from "../../Assets/Experience/reactjs-icon.svg";

import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import ExeprienceTimelineElement from "./ExperienceTimelineElement";

import "./Experience.css";

export default function Experience() {
  return (
    <div className="experience-landing" id="experience">
      <Container className="mx-auto">
        <h1 className="py-5"> Experience </h1>

        <VerticalTimeline>
          <ExeprienceTimelineElement
            logo={PS}
            date="June 2021 - August 2021"
            title="Software Engineer Intern"
            company="Publicis Sapient"
            location="Toronto, Ontario"
            description=" Developed a fullstack web application for a large Canadian banking
            client using React, Spring, and MSSQL."
            cardBackground="white"
            textColor="black"
            iconBackground="white"
            tech={ReactLogo}
          />

          <ExeprienceTimelineElement
            logo={Greybox}
            date="January 2021 - May 2021"
            title="Java Developer Intern"
            company="Greybox"
            location="Montreal, Quebec"
            description="Worked at a social tech startup aiming to bring online resources
              to rural communities. Added to the Java codebase, impleneted a
            file manager, and contributed to a web scraping tool."
            cardBackground="rgb(33, 150, 243)"
            textColor="black"
            arrowStyle="7px solid  rgb(33, 150, 243)"
            iconBackground="rgba(129,129,129,255)"
          />

          <ExeprienceTimelineElement
            logo={RecyclingPioneers}
            date="June 2020 - August 2020"
            title="Software Engineer Intern"
            company="Recycling Pioneers"
            location="Montreal, Quebec"
            description="  Interned at a startup led by McGill students. Aiming to bring a
              smart waste platform to the McGill campus. Worked with an ESP32
              microcontroller to read data from sensors and store wirelessly in
              a Firebase Realtime database. Developed a React website to
              integrate with database and display data in an efficent and
              informative manner."
            cardBackground="white"
            textColor="black"
            arrowStyle="white"
            iconBackground="white"
          />

          <ExeprienceTimelineElement
            logo={Rogers}
            date="May 2019 - August 2019"
            title="Demand Analytics Intern"
            company="Rogers Communications"
            location="Toronto, Ontario"
            description="  Worked as an analyst to develop an internal tool capable of
              categorizing the call volume at Rogers' call centers. Tool to be
              used in order to efficiently assign workers at centers at the
              correct times."
            cardBackground="rgb(218,41,28)"
            textColor="white"
            arrowStyle="7px solid rgb(218,41,28)"
            iconBackground="white"
          />

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            dateClassName="my-element-date"
            iconStyle={{ background: "black" }}
            icon={
              <FontAwesomeIcon icon={faBriefcase} size="lg" color="white" />
            }
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
    </div>
  );
}

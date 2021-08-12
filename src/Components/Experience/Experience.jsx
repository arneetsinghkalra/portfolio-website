import { React } from "react";
import { Container } from "react-bootstrap";

import PS from "../../Assets/Experience/PublicisSapient.png";
import { ReactComponent as Rogers } from "../../Assets/Experience/rogers-logo.svg";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import "./Experience.css";

export default function Experience() {
  return (
    <div className="experience-landing" id="experience">
      <Container className="mx-auto">
        <h1 className="py-5"> Experience </h1>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            dateClassName="my-element-date"
            date="June 2021 - August 2021"
            iconStyle={{ background: "white" }}
            icon={
              <img
                src={PS}
                alt="PS Logo"
                height="20px"
                width="auto"
                object-fit="none"
                object-position="-50px 50px"
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Software Engineer Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Pubicis Sapient
            </h4>
            <p className="vertical-timeline-element-subtitle">
              Toronto, Ontario
            </p>
            <p>
              Developed a fullstack web application for a large Canadian banking
              client using React, Spring, and MSSQL.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            dateClassName="my-element-date"
            date="January 2021 - May 2021"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<img src={PS} alt="PS Logo" height="20px" width="auto" />}
          >
            <h3 className="vertical-timeline-element-title">
              Java Developer Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Grey-Box</h4>
            <p className="vertical-timeline-element-subtitle">
              Montreal, Quebec
            </p>
            <p>
              Worked at a social tech startup aiming to bring online resources
              to rural communities. Added to the Java codebase, impleneted a
              file manager, and contributed to a web scraping tool.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            dateClassName="my-element-date"
            date="June 2020 - August 2020"
            iconStyle={{ background: "white" }}
            icon={<img src={PS} alt="PS Logo" height="20px" width="auto" />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Engineer Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Recycling Pioneers
            </h4>
            <p className="vertical-timeline-element-subtitle">
              Montreal, Quebec
            </p>
            <p>
              Interned at a startup led by McGill students. Aiming to bring a
              smart waste platform to the McGill campus. Worked with an ESP32
              microcontroller to read data from sensors and store wirelessly in
              a Firebase Realtime database. Developed a React website to
              integrate with database and display data in an efficent and
              informative manner.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(218,41,28)", color: "white" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(218,41,28)" }}
            dateClassName="my-element-date"
            date="June 2020 - August 2020"
            iconStyle={{ background: "white" }}
            icon={<Rogers />}
          >
            <h3 className="vertical-timeline-element-title">
              Demand Analytics Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Rogers</h4>
            <p className="vertical-timeline-element-subtitle">
              Toronto, Ontario
            </p>
            <p>
              Worked as an analyst to develop an internal tool capable of
              categorizing the call volume at Rogers' call centers. Tool to be
              used in order to efficiently assign workers at centers at the
              correct times.
            </p>
          </VerticalTimelineElement>

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
      <div className="div-after-experience">
        <div className="experience-to-project-quote"></div>
      </div>
    </div>
  );
}

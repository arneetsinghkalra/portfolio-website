import { React } from "react";
import Container from "react-bootstrap/Container";
import { Element } from "react-scroll";

import Meta from "../../Assets/Experience/meta.png";
import PS from "../../Assets/Experience/PublicisSapient.png";
import Greybox from "../../Assets/Experience/grey-box.jpg";
import RecyclingPioneers from "../../Assets/Experience/recyclingpioneers.png";
import Rogers from "../../Assets/Experience/rogers-logo.svg";

import ReactLogo from "../../Assets/Experience/reactjs-icon.svg";
import Java from "../../Assets/Experience/java.svg";
import Python from "../../Assets/Experience/python.svg";
import SQL from "../../Assets/Experience/sql.svg";
import Javascript from "../../Assets/Experience/javascript.svg";
import C from "../../Assets/Experience/c.png";
import Bootstrap from "../../Assets/Experience/bootstrap.svg";
import PowerBi from "../../Assets/Experience/powerbi.png";
import Excel from "../../Assets/Experience/excel.png";
import Spring from "../../Assets/Experience/spring.png";
import AndroidStudio from "../../Assets/Experience/androidstudio.png";
import Firebase from "../../Assets/Experience/firebase.png";
import Victory from "../../Assets/Experience/victory.svg";
import Arduino from "../../Assets/Experience/arduino.svg";
import MSSQL from "../../Assets/Experience/mssql.svg";
import Axios from "../../Assets/Experience/axios.svg";
import TBD from "../../Assets/Experience/tbd.webp";

import { faLaptop } from "@fortawesome/free-solid-svg-icons/faLaptop";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import ExeprienceTimelineElement from "./ExperienceTimelineElement";

import "./Experience.css";
import "./ExperienceTimelineElement.css";
import Quote from "../RepeatedComponents/Quote";

export default function Experience() {
  return (
    <Element id="experience" name="experience">
      <div className="experience-landing" id="experience">
        <Container className="mx-auto">
          <h1 className="py-5"> Experience </h1>

          <VerticalTimeline className="experience-timeline">
            <ExeprienceTimelineElement
              logo={Meta}
              date="August 2022"
              title="Software Engineer"
              company="Meta (Facebook)"
              location="Menlo Park, California"
              description="I will be kicking off my professional career this summer!"
              cardBackground="rgba(1,128,255,255)"
              textColor="white"
              iconBackground="white"
              tech={[TBD]}
              iconClickLink={() =>
                window.open("https://about.facebook.com/meta/", "_blank")
              }
            />

            <ExeprienceTimelineElement
              logo={PS}
              date="June 2021 - August 2021"
              title="Software Engineer Intern"
              company="Publicis Sapient"
              location="Toronto, Ontario"
              description="Developed a fullstack web application for a large Canadian banking
            client. The application is to be used by the Commercial Account Manager to monitor the credit utilization of businesses in order to
            expedite the process of approving or denying credit increases."
              cardBackground="white"
              textColor="black"
              iconBackground="white"
              tech={[ReactLogo, Bootstrap, Victory, Axios, Spring, MSSQL, SQL]}
              iconClickLink={() =>
                window.open("https://www.publicissapient.com/", "_blank")
              }
            />

            <ExeprienceTimelineElement
              logo={Greybox}
              date="January 2021 - May 2021"
              title="Java Developer Intern"
              company="Greybox"
              location="Montreal, Quebec"
              description="Worked at a social tech startup aiming to bring online resources
            to rural communities through an Android box. Added to the Java codebase by implementing a
            file management system. Also began the production of a web scraping tool to contribute to the database of educational resources."
              cardBackground="rgba(129,129,129,255)"
              textColor="white"
              arrowStyle="7px solid  rgba(129,129,129,255)"
              iconBackground="rgba(129,129,129,255)"
              tech={[Java, Python, Javascript, AndroidStudio]}
              iconClickLink={() =>
                window.open("https://www.grey-box.ca/", "_blank")
              }
            />

            <ExeprienceTimelineElement
              logo={RecyclingPioneers}
              date="June 2020 - August 2020"
              title="Software Engineer Intern"
              company="Recycling Pioneers"
              location="Montreal, Quebec"
              description="Interned at a startup led by McGill students aiming to bring a
              smart waste platform to McGill campus. Worked with an ESP32
              microcontroller to read data from sensors and store it wirelessly in
              a Firebase Realtime database. Developed a React website to
              integrate with the database and display data in an efficent and
              informative manner. Stayed on the team as a volunteer to continue the project."
              cardBackground="white"
              textColor="black"
              arrowStyle="7px solid white"
              iconBackground="white"
              tech={[ReactLogo, Victory, Bootstrap, Firebase, Arduino, C]}
              iconClickLink={() =>
                window.open("https://recyclingpioneers.ca/", "_blank")
              }
            />

            <ExeprienceTimelineElement
              logo={Rogers}
              date="May 2019 - August 2019"
              title="Demand Analytics Intern"
              company="Rogers Communications"
              location="Toronto, Ontario"
              description="Worked as an analyst to develop an internal tool capable of
              categorizing the call volume at Rogers' call centers. Tool to be
              used in coordination with Machine Learning algorithms to determine the most efficient scheduling and training of call center employees."
              cardBackground="rgb(218,41,28)"
              textColor="white"
              arrowStyle="7px solid rgb(218,41,28)"
              iconBackground="white"
              tech={[Excel, PowerBi, SQL]}
              iconClickLink={() =>
                window.open("https://www.rogers.com/", "_blank")
              }
            />

            <VerticalTimelineElement
              className="last-element"
              iconStyle={{ background: "black" }}
              icon={<FontAwesomeIcon icon={faLaptop} size="lg" color="white" />}
            ></VerticalTimelineElement>
          </VerticalTimeline>

          <Quote
            className="quote-white-background"
            quote="The best way to predict the future is to invent it."
            author="Alan Kay"
          />
        </Container>
      </div>
    </Element>
  );
}

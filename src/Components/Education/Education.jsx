import { React } from "react";
import Container from "react-bootstrap/Container";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import EducationTimelineElement from "./EducationTimelineElement";

import McGill from "../../Assets/Education/McGill.png";
import Marianopolis from "../../Assets/Education/Marianopolis.webp";
import SaintThomas from "../../Assets/Education/StThomas.jpeg";
import McGillLandscape from "../../Assets/Education/mcgill-landscape.jpeg";
import MarianopolisLandscape from "../../Assets/Education/Marianopolis-landscape.jpeg";
import SaintThomasLandscape from "../../Assets/Education/st.thomas-landscape.jpeg";

import { faGraduationCap } from "@fortawesome/free-solid-svg-icons/faGraduationCap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Education.css";
import Quote from "../RepeatedComponents/Quote";

export default function Education() {
  return (
    <div className="education-landing" id="education">
      <Container className="mx-auto">
        <h1 className="py-5">Education</h1>
        <VerticalTimeline className="education-timeline">
          <EducationTimelineElement
            date="Sepetember 2018 - Present"
            cardBackground="rgb(237,27,47)"
            arrowStyle="7px solid rgb(237,27,47)"
            title="B.Eng Software Engineering"
            school="McGill University"
            location="Montreal, Quebec"
            logo={McGill}
            iconClickLink={() =>
              window.open("https://www.mcgill.ca/", "_blank")
            }
            iconBackground="white"
            textColor="white"
            landscape={McGillLandscape}
            activities={[
              "Teaching Assistant for COMP 421: Database Systems (Winter 2022)",
              "VP Finance McGill Biodesign (2021-22)",
              "VP Sponsorship MEC (2020-21)",
              "Finance Coordinator McGill Biodesign (2020-21)",
              "Software Engineer McGill Biodesign (2019-20)"
            ]}
          />

          <EducationTimelineElement
            date="August 2016 - May 2018"
            cardBackground="rgba(1,55,154,255)"
            title="Health Sciences"
            school="Marianopolis College"
            location="Westmount, Quebec"
            logo={Marianopolis}
            arrowStyle="7px solid rgba(1,55,154,255)"
            textColor="white"
            iconBackground="white"
            iconClickLink={() =>
              window.open("https://www.marianopolis.edu/", "_blank")
            }
            landscape={MarianopolisLandscape}
            activities={[
              "Marianopolis Rugby Team (2016-18)",
              "Marianopolis MedLife: Peru Chapter (2017-18)",
              "Marianopolis Global Brigades (2016-17)"
            ]}
          />

          <EducationTimelineElement
            date="August 2011 - June 2016"
            cardBackground="rgba(45,85,52,255)"
            title="IB Program & Sciences"
            school="Saint Thomas High School"
            location="Pointe Claire, Quebec"
            logo={SaintThomas}
            arrowStyle="7px solid rgba(45,85,52,255)"
            textColor="white"
            iconBackground="white"
            iconClickLink={() =>
              window.open("https://stthomas.lbpsb.qc.ca/", "_blank")
            }
            landscape={SaintThomasLandscape}
            activities={[
              "Honours Top 20 Student",
              "Home and Life Award Recipient",
              "Member of Student Council",
              "Men's Rugby Team (Sec. 5)",
              "Men's Soccer Team (Sec. 5)"
            ]}
          />

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            dateClassName="my-element-date"
            iconStyle={{ background: "white" }}
            icon={
              <FontAwesomeIcon icon={faGraduationCap} size="lg" color="black" />
            }
          ></VerticalTimelineElement>
        </VerticalTimeline>

        <Quote
          className="quote-black-background"
          quote="Strive not to be a success, but rather to be of value."
          author="Albert Einstein"
        />
      </Container>
    </div>
  );
}

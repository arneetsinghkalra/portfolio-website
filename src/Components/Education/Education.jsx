import { React } from "react";
import { Container } from "react-bootstrap";
import { useSpring, animated, config } from "react-spring";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import EducationTimelineElement from "./EducationTimelineElement";

import McGill from "../../Assets/Education/McGill.png";
import Marianopolis from "../../Assets/Education/marianopolis_logo.webp";
import SaintThomas from "../../Assets/Education/StThomas.jpeg";
import McGillLandscape from "../../Assets/Education/mcgill-landscape.jpeg";
import MarianopolisLandscape from "../../Assets/Education/Marianopolis-landscape.jpeg";
import SaintThomasLandscape from "../../Assets/Education/st.thomas-landscape.jpeg";

import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Education.css";

export default function Education() {
  const headerProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reverse: false,
    delay: 200,
    config: config.molasses
  });

  return (
    <div className="education-landing" id="education">
      <Container className="mx-auto">
        <animated.h1 className="py-5 " style={headerProps}>
          Education
        </animated.h1>

        <VerticalTimeline className="education-timeline">
          <EducationTimelineElement
            date="Sepetember 2018 - Present"
            cardBackground="rgb(237,27,47)"
            arrowStyle="7px solid rgb(237,27,47)"
            title="B.Eng Software Engineering"
            school="McGill University"
            location="Montreal, Quebec"
            logo={McGill}
            iconBackground="white"
            textColor="white"
            landscape={McGillLandscape}
            activities={[
              "Vice President Finance of McGill Biodesign",
              "Previously VP Sponsorship of MEC",
              "Previously Finance Coordinator of McGill Biodesign"
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
            landscape={MarianopolisLandscape}
            activities={[
              "Active Member of Marianopolis MedLife: Peru Chapter",
              "Marianopolis Rugby Team"
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
            landscape={SaintThomasLandscape}
            activities={[
              "Honours Top 20 Student",
              "Home and Life Award Recipient",
              "Member of Student Council"
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

        <div className="code-div">
          <h4>"Strive not to be a success, but rather to be of value."</h4>
          <p>
            <i> - Albert Einstein </i>
          </p>
        </div>
      </Container>
    </div>
  );
}

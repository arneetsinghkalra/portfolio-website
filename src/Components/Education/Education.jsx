import { React } from "react";
import { Container } from "react-bootstrap";
/*
import Marianopolis from "../../Assets/Education/Marianopolis.jpg";
*/
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { ReactComponent as McGill } from "../../Assets/Education/McGill_logo.svg";
import PS from "../../Assets/Experience/PublicisSapient.png";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Education.css";

export default function Education() {
  return (
    <div className="education-landing" id="education">
      <Container className="mx-auto">
        <h1 className="py-5"> Education </h1>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            dateClassName="education-date"
            date="Sepetember 2018 - Present"
            iconStyle={{ background: "white" }}
            icon={<McGill />}
          >
            <h3 className="vertical-timeline-element-title">
              B.Eng Software Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              McGill University
            </h4>
            <p className="vertical-timeline-element-subtitle">
              Montreal, Quebec
            </p>
            <p></p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            dateClassName="education-date"
            date="August 2016 - May 2018"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<img src={PS} alt="PS Logo" height="20px" width="auto" />}
          >
            <h3 className="vertical-timeline-element-title">Health Sciences</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Marianopolis College
            </h4>
            <p className="vertical-timeline-element-subtitle">
              Westmount, Quebec
            </p>
            <p></p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            dateClassName="education-date"
            date="August 2011 - June 2016"
            iconStyle={{ background: "white" }}
            icon={<img src={PS} alt="PS Logo" height="20px" width="auto" />}
          >
            <h3 className="vertical-timeline-element-title">
              Science IB Program
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              St. Thomas High School
            </h4>
            <p className="vertical-timeline-element-subtitle">
              Pointe Claire, Quebec
            </p>
            <p></p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            dateClassName="my-element-date"
            iconStyle={{ background: "white" }}
            icon={
              <FontAwesomeIcon icon={faGraduationCap} size="lg" color="black" />
            }
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
    </div>
  );
}

/*
 <Row className="cards">
          <Col md={6} xs={12}>
            <MyCard
              school="McGill University"
              program="Software Engineering"
              imgSrc={McGill}
              time="2018 - 2022"
            />
          </Col>

          <Col md={6} xs={12}>
            <MyCard
              school="Marianopolis College"
              program="Health Sciences"
              imgSrc={Marianopolis}
              time="2016 - 2018"
            />
          </Col>
        </Row>
 */

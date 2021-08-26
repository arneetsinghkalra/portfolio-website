import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import React from "react";
import "./ExperienceTimelineElement.css";

export default function ExperienceTimelineElement(props) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: props.cardBackground,
        color: props.textColor
      }}
      dateClassName="my-element-date"
      date={props.date}
      iconStyle={{ background: props.iconBackground }}
      contentArrowStyle={{ borderRight: props.arrowStyle }}
      icon={
        <img
          src={props.logo}
          alt={props.title}
          height="20px"
          width="auto"
          object-fit="none"
          object-position="-50px 50px"
        />
      }
    >
      <h3 className="vertical-timeline-element-title">{props.title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{props.company}</h4>
      <p className="vertical-timeline-element-subtitle">{props.location}</p>
      <p>{props.description}</p>
      <div className="tech-used">
        <p>
          <i>Technologies Used: </i>
        </p>
      </div>
    </VerticalTimelineElement>
  );
}

import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import React from "react";
import "./EducationTimelineElement.css";

export default function EducationTimelineElement(props) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: props.cardBackground,
        color: props.textColor
      }}
      dateClassName="my-element-date"
      //date={props.date}
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
      <img
        src={props.landscape}
        alt={props.title}
        height="auto"
        width="100%"
        object-fit="none"
        object-position="-50px 50px"
        className="pb-3 landscape-image"
      />
      <div className="education-element-text-content">
        <h3 className="vertical-timeline-element-title">{props.title}</h3>
        <h4 className="vertical-timeline-element-subtitle">{props.school}</h4>

        <h5 className="pt-3">{props.date}</h5>
        <p className="vertical-timeline-element-subtitle">
          <i>{props.location}</i>
        </p>
      </div>
      <div className="education-description">
        {props.activities.map((activity, index) => (
          <p className="my-0">{activity}</p>
        ))}
      </div>
    </VerticalTimelineElement>
  );
}

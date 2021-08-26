import { React } from "react";
import { Container, Row } from "react-bootstrap";

import "./Projects.css";
import biodesign from "../../Assets/Projects/McGillBioDesign.jpg";
import rpArticle from "../../Assets/Projects/rp_article.png";
import MyCard from "./Card";

export default function Projects() {
  return (
    <div className="projects-landing" id="projects">
      <Container classname="mx-auto">
        <h1> Projects </h1>

        <Row>
          <MyCard
            src={rpArticle}
            title="McGill Smart Waste Platform"
            date="June 2020 - Present"
            description="Continued working on the Recycling Pioneer project after I
                  finished my internship. The project aims to bring a network of
                  smart moitoring devices capable of recording the weight and
                  fullness level of the waste bins at McGill University. The
                  project is still underway, and has been recognized by
                  University Advancment at McGill with a published article."
            button1="   Recycling Pioneers Website"
            button2="Git Repository"
          />

          <MyCard
            src={biodesign}
            title="BluBand"
            date="September 2019 - August 2020"
            description="    As part of McGill Biodesign, I worked on a project called
                  BluBand. Our end goal was to develop a watch which monitors
                  the blood glucose level of type-1 diabetic children. As part
                  of the software team, I assisted in the development of the
            Andriod application which had a Firebase backend."
            button1="McGill Biodesign Website"
            button2="Git Repository"
          />

          <MyCard
            src={rpArticle}
            title="McGill Smart Waste Platform"
            description="Continued working on the Recycling Pioneer project after I
                  finished my internship. The project aims to bring a network of
                  smart moitoring devices capable of recording the weight and
                  fullness level of the waste bins at McGill University. The
                  project is still underway, and has been recognized by
                  University Advancment at McGill with a published article."
            button1="   Recycling Pioneers Website"
            button2="Git Repository"
          />
        </Row>
      </Container>
    </div>
  );
}

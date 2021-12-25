import { React } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import "./Projects.css";
import ProjectCard from "./ProjectCard";
import Quote from "../RepeatedComponents/Quote";

import biodesign from "../../Assets/Projects/McGillBioDesign.jpg";
import rpArticle from "../../Assets/Projects/rp_article.png";
import quoridor from "../../Assets/Projects/quoridor.png";
import mcgill from "../../Assets/Education/McGill.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import stthomas from "../../Assets/Projects/stthomasApp.png";

import ReactLogo from "../../Assets/Experience/reactjs-icon.svg";
import Java from "../../Assets/Experience/java.svg";
import Python from "../../Assets/Experience/python.svg";
import C from "../../Assets/Experience/c.png";
import Bootstrap from "../../Assets/Experience/bootstrap.svg";
import AndroidStudio from "../../Assets/Experience/androidstudio.png";
import Firebase from "../../Assets/Experience/firebase.png";
import Victory from "../../Assets/Experience/victory.svg";
import Arduino from "../../Assets/Experience/arduino.svg";
import Postgresql from "../../Assets/Experience/postgresql.svg";
import Django from "../../Assets/Experience/django.svg";
import Emailjs from "../../Assets/Experience/emailjs.png";
import Cucumber from "../../Assets/Experience/cucumber.svg";
import Uml from "../../Assets/Experience/uml.png";

export default function Projects() {
  // Declaring variables to hold btn status
  // Refer to ./ProjectCard description to understand better
  const disabled = true;
  const visible = false;

  return (
    <div className="projects-landing" id="projects">
      <Container className="mx-auto" fluid>
        <h1 className="py-5"> Projects </h1>

        <Row xs={1} md={4} className="justify-content-center p-0 mx-0">
          <ProjectCard
            image={mcgill}
            title="St. Mary's Physician to Volunteer Network"
            description="For my final year Engineer project, my team and I are working
                with the McGill Chair of Family and Community Medicine at St.
                Mary's Hospital. The goal of the project is to continue the
                development of a web application which coordinates referrals
                from family physicians to community health volunteers. The
            product will pilot at St. Mary's Hospital."
            tech={[ReactLogo, Python, Django, Postgresql]}
            date="In Progress since September 2021"
            gitRepos={[
              [
                "https://github.com/arneetsinghkalra/portfolio-website",
                disabled,
                "Restricted Repository"
              ]
            ]}
          />

          <ProjectCard
            image={rpArticle}
            imageCoverBackground
            title="McGill Smart Waste Platform"
            description="I continuted working on the Recycling Pioneers project after I
                finished my internship with the startup. Our team aims to bring
                a network of smart monitoring devices capable of recording the
                weight and fullness level of the waste bins at McGill
                University. The goal is to educate the community and reduce the
                waste generated on campus. The project is still underway, and
                has been recognized by University Advancment at McGill with a
                couple of published articles."
            tech={[ReactLogo, Victory, Bootstrap, Firebase, Arduino, C]}
            date="June 2020 - Present"
            gitRepos={[
              [
                "https://github.com/arneetsinghkalra/recycling-pioneers-web",
                visible,
                "Web Repo"
              ],
              [
                "https://github.com/arneetsinghkalra/recycling-pioneers-esp32",
                visible,
                "ESP32 Repo"
              ],
              ["https://recyclingpioneers.ca", visible, "RP Website"]
            ]}
          />

          <ProjectCard
            image={portfolio}
            imageCoverBackground
            title="Personal Portfolio Website"
            description="  Another one of my projects is in fact this website! I developed
                this in order to develop my React and CSS skills. The website uses
                the React-Bootstrap library. EmailJs is integrated to allow
                emails to be sent directly to my email address using the contact
                form located at the bottom of the page (feel free to use it!). I
                also made use of external CSS libraries for animation such as
                React Spring."
            tech={[ReactLogo, Bootstrap, Emailjs]}
            date="August 2021 - September 2021"
            gitRepos={[
              [
                "https://github.com/arneetsinghkalra/portfolio-website",
                visible,
                "Repository"
              ]
            ]}
          />

          <ProjectCard
            image={biodesign}
            title="BluBand"
            description="As part of McGill Biodesign, I worked on a project called
                BluBand. Our end goal was to develop a watch which monitors the
                blood glucose level of type-1 diabetic children. As part of the
                software team, I assisted in the development of the Android
                application which had a Firebase backend."
            tech={[Java, AndroidStudio, Firebase]}
            date="  September 2019 - August 2020"
            gitRepos={[
              [
                "https://github.com/arneetsinghkalra/BluBand",
                visible,
                "Repository"
              ]
            ]}
          />

          <ProjectCard
            image={quoridor}
            title="Quoridor Board Game Application"
            description="Developed a Java version of the famous strategic boardgame,
                Quoridor. Started the project by developing a UML Domain Model
                and State Machine with Umple. Followed a MVC (Model, View,
                Controller) architecture and a Behavior Drive Development
                approach by using Gherkin Step Definitions for testing and
                development. Project consisted of 5 sprints and used Git as our
                DVCS."
            tech={[Java, Cucumber, Uml]}
            date="September 2019 - December 2019"
            gitRepos={[
              [
                "https://github.com/arneetsinghkalra/Quoridor",
                visible,
                "Repository"
              ]
            ]}
          />

          <ProjectCard
            image={stthomas}
            title="St. Thomas Android App"
            description="My first project ever! For the
                International Baccalaureate final year project, I decided to
                code an application that would present the data
                avaliable on the official school website in an Android
                application. While showcasing text based information, it was
                capable of pulling the daily announcements and presenting them in
                a PDF format each day."
            tech={[Java, AndroidStudio]}
            date="September 2015 - June 2016"
            gitRepos={[
              [
                "https://github.com/arneetsinghkalra/Quoridor",
                disabled,
                "  Repository Unavaliable"
              ]
            ]}
          />
        </Row>

        <Quote
          className="quote-black-background"
          quote="Programming is a skill best acquired by practice and example rather
          than from books."
          author="Alan Turing"
        />
      </Container>
    </div>
  );
}

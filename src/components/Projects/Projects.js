import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Musical from "../../Assets/Projects/Musical.jpg";
import Categorizer from "../../Assets/Projects/Categorize.jpg";
import Climate from "../../Assets/Projects/Climate.jpeg";
import Calendar from "../../Assets/Projects/Calender.jpg";
import TicTacToe from "../../Assets/Projects/TicTacToe.webp";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Musical}
              isBlog={false}
              title="Musical Keyboard"
              description="I integrated FluidSynth with a Raspberry Pi to create a keyboard implemented in C, achieving sound synthesis with an impressive 46ms latency."
              ghLink="https://github.com/Hadis-fa/musical-keyboard.git"            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Categorizer}
              isBlog={false}
              title="Resume Categorizer System"
              description="I developed a resume categorizer that achieved an accuracy of 86% by utilizing libraries such as Pandas, NLTK, and Gensim, which were trained on carefully processed text features. "
              ghLink="https://github.com/Hadis-fa/Resume-Categorizer-System.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Climate}
              isBlog={false}
              title="Destination Climate"
              description="I developed a Flask application that allows users to input temperatures and returns matching cities, leveraging 3rd party API integration for accurate results. To ensure a seamless user experience across various devices, I designed a responsive frontend using HTML, CSS, and Bootstrap. "
              ghLink="https://github.com/Hadis-fa/destination-climate.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Calendar}
              isBlog={false}
              title="Inclusive Workplace Calendar"
              description="At the WiE Hackathon, I developed a calendar app using Flask and JavaScript, designed to track holidays from various cultures. The app features a dynamic user interface built with JavaScript, allowing users to easily modify and filter the holidays displayed on the calendar. This functionality not only enhances user engagement but also promotes cultural awareness by highlighting a diverse range of celebrations."
              ghLink="https://github.com/Hadis-fa/Event-Calendar.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TicTacToe}
              isBlog={false}
              title="TicTacToe"
              description="I developed a Tic-Tac-Toe game in Java, utilizing object-oriented programming principles to structure the application effectively. This approach allowed me to encapsulate the game mechanics within distinct classes, enhancing the maintainability and scalability of the code."
              ghLink="https://github.com/Hadis-fa/TicTacToe-Java.git"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

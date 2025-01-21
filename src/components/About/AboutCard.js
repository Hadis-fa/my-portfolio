import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey there! 👋 I'm <span className="purple">Hadis Farrokhi </span>
            a dedicated and versatile software engineer currently pursuing an undergraduate degree in <span className="purple"> Software Engineering at the University of Waterloo.</span>
            <br />
            I specialize in full-stack web application development, machine learning, and various software engineering disciplines.
            <br />
           As a student, I'm actively looking for co-op positions where I can contribute to meaningful projects and further enhance my skills.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Volleyball
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new skills 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Me</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

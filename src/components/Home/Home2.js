import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiOutlineMail } from 'react-icons/ai';
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            Thank you for visiting my portfolio! Here, you can explore the projects that fuel my passion for technology. 
              <br />
              <br />Currently, I am pursuing a Bachelor of
              <i>
                <b className="purple"> Software Engineering at the University of Waterloo </b>
              </i>
              <br />
              <br />
              My professional experience spans &nbsp;
              <i>
                <b className="purple">machine learning, full-stack development, and software engineering.</b> Each project I undertake is crafted with ❤ and dedication, reflecting my commitment to{" "}
                <b className="purple">
                 creating impactful and innovative solutions.
                </b>
              </i>
              <br />
              <br />
              As a creative and analytical thinker, I am constantly exploring 
              with <b className="purple">new technologies and methodologies</b> to push the boundaries of what's possible.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Hadis-fa"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/hadis-f"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:ha.farokhi85@gmail.com"  // Replace "your-email@gmail.com" with your actual email address
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />  
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

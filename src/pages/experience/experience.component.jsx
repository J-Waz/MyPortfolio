import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_ACCENTURE from "../../assets/img/experience/experienceCard1.jpg";
import Tilt from "react-tilt";
import "./experience.styles.css";
import { Parallax } from "react-parallax";


const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details pb-3">EXPERIENCE</h1>
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_ACCENTURE} alt="Accenture logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Web Developer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Full Stack Web Developer</strong>
                    <br />
                    <strong>Role:</strong> Web Development | Marketing | Instruction
                    <br />
                    <strong>Description:</strong> Developed multiple features with full customizability option across web application. Debugging existing code to solve problems. Also provided community outreach, Instruction, and other business needs in an effort to increase business.
                    <br />
                    <strong>Technology:</strong> ReactJS, Firebase, MERN Stack
                    <br />
                    <strong>Duration:</strong> February 2018 - Present
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
    </div>
  );
};

export default Experience;

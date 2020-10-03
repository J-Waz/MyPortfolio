import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import AboutPic from "../../assets/img/AboutPic.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={AboutPic} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                <strong>&nbsp;Jacob Wazydrag</strong>
                <br />A passionate programmer born and raised in Chicago, and a Full Stack Web developer with ReactJS, Redux, ExpressJS, NodeJS, Ruby on Rails as my tech stack.
                <br />
                In 2020 I successfully completed my engineering training at FlatIron school.  
                <br />
                Working with ArtSpace chicago I was able to get my feet wet in a web development environment, developing web applications for artists using ReactJS.
                <br />
                Using my experience in customer service I was able to communicate with clients and the business owner to launch a product on time and met the needs of the store.
                <br /> <br />
                I am excited to join a team to further my development as a Software Engineer.
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://docs.google.com/document/d/e/2PACX-1vQU7wNwpVOvquL0qkoPo0jsbOK1YdCLaGfw3j9468iimP1KpWcp37xJgmwDmaq07oiElToEh7_AAF_w/pub" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/JacobWazydrag" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;

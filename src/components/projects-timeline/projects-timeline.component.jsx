import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import WinfredArtShow from "../../assets/img/projects/WinfredArtShow.png";
import ArtSpaceLessons from "../../assets/img/projects/ArtSpaceLessons.png";
import ReminderPro from "../../assets/img/projects/ReminderPro.png";
import L_ProductHuntClone from "../../assets/img/projects/product_hunt_clone.webp";
import L_PortfolioUsingDjango from "../../assets/img/projects/portfolioUsingDjango.webp";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";

import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
          {/* Project: Winfred's ArtShow */}
          <ImageEvent date="08/01/2020" className="text-center" text="Winfreds Art Show" src={WinfredArtShow} alt="Winfreds Art Show">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Web app commisioned by Art Space Chicago for a local Chicago Artist and his art showing.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Browse Art Work</li>
                          <li>Buy Paintings</li>
                          <li>Contact form</li>
                          <li>About Page</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              CSS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              React-Bootstrap
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              Firebase
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div  className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://winfred-art-show.web.app/" target="_blank">
                  SEE LIVE
                </UrlButton>
                <UrlButton href="https://github.com/JacobWazydrag/WinfredsArtApp" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* ArtSpace Lessons */}
          <ImageEvent date="10/01/2020" className="text-center" text="ArtSpace Lessons App" src={ArtSpaceLessons} alt="ArtSpace Lessons App">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Creating the Uber of the Art world, connecting artists with students where you can make schedule appointments. 
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Displaying competence in OOP using ruby on rails as an API making models with relationships to allow for full CRUD in appointments/bookings, calendars, and profiles. </li>
                          <li>Using ReactJS for a front end UI rendering a user experience that's easy to follow and aesthetically pleasing.</li>
                          <li>Including authorization for users using JWT token based authorization</li>
                          <li>Styling each page using HTML and CSS manipulation from scratch.</li>
                          <li>Went above and beyond project requirements and leaned/implemented “Hooks” within 
the code.
</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              React Hooks
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              Ruby on Rails
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              HTML
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              CSS
                            </span>
                          </li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">

                <UrlButton href="https://github.com/JacobWazydrag/final-mod-5-frontend" target="_blank">
                  SOURCE CODE
                </UrlButton>
                <UrlButton href="https://youtu.be/_f6oPEbLZTE" target="_blank">
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Redux Reminder App */}

          <ImageEvent date="9/01/2020" className="text-center" text="Reminder Pro" src={ReminderPro} alt="Robo Friends">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A basic reminder making web application that shows how to use React/Redux when building a CRUD app. 
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>CRUD functionality  using redux in a react web application </li>
                          <li>Styling using ReactBootstrap.</li>
                          <li>Using cookies to persist data.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              Redux
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              sfCookies
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              ReactBootstrap
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://github.com/JacobWazydrag/ReminderApp" target="_blank">
                  SOURCE CODE
                </UrlButton>
                <UrlButton href="https://www.youtube.com/channel/UCa7lAH6TD8DZ1r7sqaFfMog?view_as=subscriber" target="_blank">
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;

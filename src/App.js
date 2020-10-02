import React from "react";
import MyNavbar from "./components/my-navbar/my-navbar.component";
import MyCarousel from "./components/my-carousal/my-carousal.component";
import MyTitleMessage from "./components/title-message/title-message.component";
import FooterPanel from "./components/footer/footer.component";
import Container from "react-bootstrap/Container";
import ContactForm from "./pages/contact-form/contact-form.component";
import About from "./pages/about/about.component";
import { Parallax } from "react-parallax";
//import Slide from "react-reveal/Slide";
import Skills from "./pages/skills/skills.component";
//import Fade from "react-reveal/Fade";
import Experience from "./pages/experience/experience.component";
import Fade from "react-reveal/Fade";
import TimeLine from "./components/projects-timeline/projects-timeline.component";
import Slide from "react-reveal/Slide";



import "./App.css";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyCarousel />
      <MyTitleMessage />
      <MyNavbar />
      
        <Parallax
          blur={-505550}
          bgImage={require("./assets/img/parallex/background.jpg")}
          bgImageAlt=""
          strength={2100}
        >

          <div>
            <Container className="container-box rounded">
              <About />
            </Container>
          </div>
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <Experience />
          </Fade>
        </Container>
      </div>
      <Container className="container-box rounded">
        <hr />
        <Skills />
      </Container>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <TimeLine />
        </Slide>
      </Container>

      <div>
        <Container className="container-box rounded">
          <hr />
          <ContactForm />
        </Container>
      </div>

      <div>
      </div>
        <FooterPanel />
        </Parallax>
      
    </div>
  );
};

export default App;

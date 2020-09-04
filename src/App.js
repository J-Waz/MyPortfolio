import React from "react";
import MyNavbar from "./components/my-navbar/my-navbar.component";
import MyCarousel from "./components/my-carousal/my-carousal.component";
import MyTitleMessage from "./components/title-message/title-message.component";
import FooterPanel from "./components/footer/footer.component";
import Container from "react-bootstrap/Container";
import ContactForm from "./pages/contact-form/contact-form.component";
import About from "./pages/about/about.component";
import { Parallax } from "react-parallax";
//import Fade from "react-reveal/Fade";

import "./App.css";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyTitleMessage />
      <MyCarousel />

      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.jpg")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <About />
            </Container>
          </div>
        </Parallax>
      </div>
      <Container className="container-box rounded">
        <hr />
        <ContactForm />
      </Container>
      <FooterPanel />
    </div>
  );
};

export default App;

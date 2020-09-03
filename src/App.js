import React from "react";
import MyNavbar from "./components/my-navbar/my-navbar.component";
import MyCarousel from "./components/my-carousal/my-carousal.component";
import MyTitleMessage from "./components/title-message/title-message.component";
import FooterPanel from "./components/footer/footer.component";
import Container from "react-bootstrap/Container";
import ContactForm from "./pages/contact-form/contact-form.component";
//import Fade from "react-reveal/Fade";

import "./App.css";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyTitleMessage />
      <MyCarousel />
      
      <Container className="container-box rounded">
       
          <hr />
          <ContactForm />
       
      </Container>
      <FooterPanel />
    </div>
  );
};

export default App;

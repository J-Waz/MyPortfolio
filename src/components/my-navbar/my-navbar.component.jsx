import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from '../../assets/icons/myPortfoliLogo4.png'
import "./my-navbar.styles.css";

const MyNavbar = () => {
  return (
    <div>
      <Navbar
        fixed="top"
        variant="dark"
        expand="md"
        className="animate-navbar nav-theme justify-content-between"
      >
        <div>
          <Navbar.Brand href="#home">
            <img className="logo" src={Logo} alt="My Portfolio Logo" />
            <img className="logo" src={Logo} alt="My Portfolio Logo" />
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
      <Nav.Link href="Home">Home</Nav.Link>
      <Nav.Link href="About">About</Nav.Link>
      <Nav.Link href="Skills">Skills</Nav.Link>
      <Nav.Link href="Experience">Experience</Nav.Link>
      <Nav.Link href="Contact">Contact</Nav.Link>
    </Nav>

          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact-form.styles.css";
import * as emailjs from "emailjs-com";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });

    // const target = event.target;
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    // const name = target.name;

    // this.setState({
    //     [name]: value
    // })
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    emailjs
      .sendForm(
        "gmail",
        "template_vOfinGFA",
        "ContactForm",
        "user_naEa7wSiNFaTtGJKCJiGJ"
      )
      .then((res) => {
        if (res.data.success) {
          this.setState({
            disabled: false,
            emailSent: true,
          });
        } else {
          this.setState({
            disabled: false,
            emailSent: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);

        this.setState({
          disabled: false,
          emailSent: false,
        });
      });

    this.setState({
      name: "",
      email: "",
      message: "",
    });
  };

  render() {
    return (
      <div id="contact">
        <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
        <div>
          <Form id="ContactForm" onSubmit={this.handleSubmit.bind(this)}>
            <Form.Group>
              <Form.Label htmlFor="full-name">Full Name</Form.Label>
              <Form.Control
                id="full-name"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange.bind(this)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                id="email"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange.bind(this)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="message">Message</Form.Label>
              <Form.Control
                id="message"
                name="message"
                as="textarea"
                rows="3"
                value={this.state.message}
                onChange={this.handleChange.bind(this)}
              />
            </Form.Group>

            <Button  className="d-inline-block" variant="primary" type="submit">
              Send
            </Button>

            {this.state.emailSent === true && (
              <p className="d-inline success-msg">Email Sent!</p>
            )}
            {this.state.emailSent === false && (
              <p className="d-inline err-msg">Email Sent!</p>
            )}
          </Form>
        </div>
        <Jumbotron className="contact-jumbotron">
          <Row>
            <Col className="d-flex justify-content-center flex-wrap">
              <div className="m-2">
                <a
                  href="mailto:akjha96@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline-danger" title="akjha96@gmail.com">
                    <i className="fas fa-envelope-square"></i> Email Me
                  </Button>
                </a>
              </div>
              <div className="m-2">
                <a
                  href="https://www.linkedin.com/in/anand-kumar-jha-745798a4/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline-primary" title="Visit my LinkenIn">
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </Button>
                </a>
              </div>
              <div className="m-2">
                <a
                  href="https://www.facebook.com/akjha132"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline-primary" title="Say hello on FB">
                    <i className="fab fa-facebook-square"></i> FaceBook
                  </Button>
                </a>
              </div>
              <div className="m-2">
                <a
                  href="https://github.com/akjha96"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline-dark" title="My other projects">
                    <i className="fab fa-github-square"></i> GitHub
                  </Button>
                </a>
              </div>
              <div className="m-2">
                <a
                  href="https://twitter.com/akjha96"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline-info" title="Tweets are welcomed!">
                    <i className="fab fa-twitter"></i> Twitter
                  </Button>
                </a>
              </div>
            </Col>
          </Row>
        </Jumbotron>
      </div>
    );
  }
}
export default ContactForm;

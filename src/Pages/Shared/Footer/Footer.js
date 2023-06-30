import React from "react";
import { Col, Container, Button, Row, Form } from "react-bootstrap";
import "./Footer.css";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className="text-white"
      style={{ backgroundColor: "RGB(39, 39, 39)", maxWidth: "100vw" }}
    >
      <Container className="pt-4">
        <Row>
          <Col sm={4}>
            <h3 className="fw-bolder mb-3 text-warning">
              FlyXDrone - A Premium Drone Provider
            </h3>
            <p className="mb-3">
              Our drones are extremely easy to fly. The drone becomes
              disconnected from the controller during flight the drone will
              autonomously fly back to where it took off. These drones also have
              intelligent flight modes such as active track, tapfly, and hand
              gesture control.
            </p>
            <div className="icons text-center mb-3">
              <i className="fab fa-facebook-square fa-2x icon facebook-icon-color me-2"></i>
              <i className="fab fa-twitter-square fa-2x icon twitter-icon-color me-2"></i>
              <i className="fab fa-linkedin fa-2x icon linkedin-icon-color me-2"></i>
              <i className="fab fa-youtube-square fa-2x icon youtube-icon-color me-2"></i>
              <i className="fab fa-whatsapp-square fa-2x icon whatsapp-icon-color me-2"></i>
            </div>
          </Col>
          <Col sm={2}>
            <h3 className="text-center text-warning fw-bold mb-3">
              Useful Links
            </h3>
            <ul>
              <HashLink
                className="me-2 nav-link pb-3"
                style={{ color: "white" }}
                to="/home#products"
              >
                <i className="fas fa-check"></i>&nbsp;Products
              </HashLink>

              <HashLink
                className="me-2 nav-link pb-3"
                style={{ color: "white" }}
                to="/home#features"
              >
                <i className="fas fa-check"></i>&nbsp;Features
              </HashLink>

              <HashLink
                className="me-2 nav-link pb-3"
                style={{ color: "white" }}
                to="/home#reviews"
              >
                <i className="fas fa-check"></i>&nbsp;Reviews
              </HashLink>

              <HashLink
                className="me-2 nav-link pb-3"
                style={{ color: "white" }}
                to="/home#gallery"
              >
                <i className="fas fa-check"></i>&nbsp;Gallery
              </HashLink>
            </ul>
          </Col>

          <Col sm={3}>
            <h3 className="mb-4 text-warning fw-bold ">Contact Us</h3>
            <div className="footer-addresss mb-3 text-center">
              <i className="fas fa-map-marker-alt"></i>&nbsp; Priyanka City,
              Uttara Sector-12, Dhaka-1230.
            </div>

            <div className="footer-phone mb-3 text-center">
              <i className="fas fa-envelope"></i>&nbsp; fly_drone@yahoo.com
              <br />
              <i className="fas fa-envelope"></i>&nbsp; fly_drone@gmail.com
            </div>

            <div className="footer-phone mb-3 text-center">
              <i className="fas fa-phone"></i>&nbsp; +881-54647835
              <br />
              <i className="fas fa-phone"></i>&nbsp; +881-54647835
            </div>
          </Col>
          <Col sm={3}>
            <h3 className="mb-3 text-warning fw-bold">Stay In Touch</h3>
            <Form>
              <Form.Group
                className="mb-1"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group
                className="mb-1"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="Email" placeholder="Email" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control as="textarea" rows={3} placeholder="Message" />
              </Form.Group>
              <div className="d-flex justify-content-center">
                <Button variant="danger" className="px-5">
                  Send
                  <span className="icon-cus icon-send"></span>
                </Button>{" "}
              </div>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex flex-column align-self-end justify-content-center pb-1  fw-bold">
            <hr />
            <h5 className="text-warning">
              Copyright © {currentYear} FlyXDrone, All Rights Reserved.
            </h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;

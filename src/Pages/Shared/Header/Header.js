import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { userInfo, handleLogOut } = useAuth();

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="p-3"
    >
      <Container>
        <Link to="/">
          <Navbar.Brand className="fs-3 fw-bolder fst-italic text-white">
            <i className="fas fa-plane-slash"></i>&nbsp;FlyXDrone
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {userInfo?.displayName && (
              <Nav.Link className="me-2 fw-bold text-white">
                Signed in as: {userInfo?.displayName}
              </Nav.Link>
            )}

            <HashLink
              className="me-2 nav-link text-white"
              style={{ fontWeight: "bold" }}
              to="/explore"
            >
              Explore
            </HashLink>

            {userInfo?.displayName ? (
              <Link to="/dashboard">
                <Button variant="primary" className="me-3 fw-bold">
                  Dashboard
                </Button>
              </Link>
            ) : (
              <Link to="/register">
                <Button variant="danger" className="me-3">
                  Signup
                </Button>
              </Link>
            )}

            {userInfo?.email ? (
              <Link to="/">
                <Button
                  variant="warning"
                  className="me-3 mb-1"
                  onClick={() => handleLogOut()}
                >
                  Logout
                </Button>
              </Link>
            ) : (
              <Link to="/login">
                <Button variant="warning" className="me-3">
                  Login
                </Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { userInfo, handleLogOut } = useAuth();

  const cart = useSelector((state) => state.cart);

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="p-3"
      fixed="top"
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

            {/* {userInfo?.email &&
             <Link to="/">
               <Button
                 variant="warning"
                 className="me-3 mb-1"
                 onClick={() => handleLogOut()}
               >
                 Cart
               </Button>
             </Link>} */}

            {/* {
             <Link to="/cart">
               <Button
                 variant="btn btn-light"
                 className="me-3 mb-1 rounded-circle"
                 style={{position: 'relative'}}    
               >
                 <i class="fas fa-cart-arrow-down"></i>
                 <span style={{position: 'absolute', bottom: '25px', color: 'white', right: '-5px'}}>5</span>
 
               </Button>
             </Link>} */}

            {
              <Link to="/cart">
                <Button
                  variant="btn btn-light"
                  className="me-3 mb-1 rounded-circle btn-lg"
                  style={{ position: "relative" }}
                >
                  <i class="fas fa-cart-arrow-down"></i>
                  <Button
                    variant="btn btn-danger"
                    className=" rounded-circle btn-sm"
                    style={{
                      position: "absolute",
                      bottom: "25px",
                      color: "white",
                      right: "-10px",
                    }}
                  >
                    {getTotalQuantity() || 0}
                  </Button>
                </Button>
              </Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

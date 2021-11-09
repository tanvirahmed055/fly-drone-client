import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import './Header.css';

const Header = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="p-3">
            <Container>
                <Link to="/">
                    <Navbar.Brand className="fs-3 fw-bolder fst-italic text-white"><i className="fas fa-plane-slash"></i>&nbsp;FlyXDrone</Navbar.Brand>
                </Link>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">



                        <HashLink className="me-2 nav-link text-white" style={{ fontWeight: 'bold' }} to="/home#products">Products</HashLink>


                        <Link to="/dashboard">
                            <Button variant="primary" className="me-3 fw-bold">Dashboard</Button>
                        </Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
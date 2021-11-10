import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';
import './Features.css';


const Features = () => {

    return (
        <div className="container-fluid mt-5 mb-5 pt-5" id="features">
            <h1 className="fw-bolder mb-3 text-primary">Powerful Features</h1>

            <h4 className="text-center mb-5 text-secondary">Diverse and Unique Aspects of Our Drones</h4>

            <Row xs={1} md={3} className="g-4 d-flex align-items-center mt-4">
                <Col sm={3}>

                    <Card className="text-center  shadow-lg p-1 mb-5 bg-body rounded card">
                        <span className="icon-color pt-2">
                            <i className="fas fa-gamepad fa-3x icon-color"></i>
                        </span>
                        <Card.Body>
                            <Card.Title className="fw-bold"> Easy & Intuitive Controls</Card.Title>
                        </Card.Body>
                    </Card>

                    <Card className="text-center  shadow-lg p-1 mb-5 bg-body rounded card">
                        <span className="icon-color pt-2">
                            <i className="fas fa-video fa-3x icon-color"></i>
                        </span>
                        <Card.Body>
                            <Card.Title className="fw-bold">
                                4K VIDEO AT UP TO 30FPS
                            </Card.Title>
                        </Card.Body>
                    </Card>

                </Col>

                <Col sm={6}>

                    <Card className="text-center  shadow-lg p-1 bg-body rounded card">
                        <span className="icon-color pt-2">
                            <i className="fas fa-camera-retro fa-3x icon-color"></i>
                        </span>
                        <Card.Body>
                            <Card.Title className="fw-bold">16MP PHOTOGRAPHS</Card.Title>
                        </Card.Body>
                    </Card>
                    <Image src="https://www5.djicdn.com/cms/uploads/7a800dc93ffa6a45af04c2b49a75a4af.png" fluid />


                    <Card className="text-center  shadow-lg p-1 mb-5 bg-body rounded card">
                        <span className="icon-color pt-2">
                            <i className="fas fa-cogs fa-3x icon-color"></i>
                        </span>
                        <Card.Body>
                            <Card.Title className="fw-bold">Advanced Technology</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>


                <Col sm={3}>

                    <Card className="text-center  shadow-lg p-1 mb-5 bg-body rounded card">
                        <span className="icon-color pt-2">
                            <i className="fas fa-wrench fa-3x icon-color"></i>
                        </span>
                        <Card.Body>
                            <Card.Title className="fw-bold">CUSTOMIZED COMMANDS</Card.Title>
                        </Card.Body>
                    </Card>

                    <Card className="text-center  shadow-lg p-1 mb-5 bg-body rounded card">
                        <span className="icon-color pt-2">
                            <i className="fas fa-bullseye fa-3x icon-color"></i>
                        </span>
                        <Card.Body>
                            <Card.Title className="fw-bold">Remote Sensing</Card.Title>
                        </Card.Body>
                    </Card>

                </Col>

            </Row>
        </div>
    );
};

export default Features;
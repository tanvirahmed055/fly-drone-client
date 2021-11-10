import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';


const OrderReviews = () => {

    const clients = [
        {
            id: 1,
            name: "Smith",
            "occupation": "CEO & Founder",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTljymdrW1wftBJmxaP5RZ0FPS5j5X0rhNGqw&usqp=CAU",
            description: "our team of drone experts have advised, built, and supplied drones all over the US. We’re your one-stop shop for everything related to remote control aircraft.",
            price: 1500
        },
        {
            id: 2,
            name: "Andrew",
            "occupation": "CEO & Founder",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTljymdrW1wftBJmxaP5RZ0FPS5j5X0rhNGqw&usqp=CAU",
            description: "our team of drone experts have advised, built, and supplied drones all over the US. We’re your one-stop shop for everything related to remote control aircraft.",
            price: 1500
        },
        {
            id: 3,
            name: "Trev",
            "occupation": "CEO & Founder",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTljymdrW1wftBJmxaP5RZ0FPS5j5X0rhNGqw&usqp=CAU",
            description: "our team of drone experts have advised, built, and supplied drones all over the US. We’re your one-stop shop for everything related to remote control aircraft.",
            price: 1500
        }

    ]


    return (
        <div className="container mt-5 mb-5" id="clients">
            <h3 className="fw-bolder mb-3 text-primary">Clients Testimonial</h3>
            <p className="text-center mb-4">Hear what our client's has to say about us.</p>
            <Row xs={1} md={3} className="g-4">
                {
                    clients?.map(client => <Col key={client?._id}>
                        <Card>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="rounded-circle mx-auto d-block pt-3" style={{ width: '25%' }} />
                            <Card.Body>
                                <Card.Title>{client?.name}</Card.Title>
                                <Card.Text>
                                    {client?.occupation}
                                </Card.Text>
                                <Card.Text>
                                    {client?.description}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>

                    </Col>)
                }
            </Row>
        </div>
    );
};

export default OrderReviews;
import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Rating from "react-rating";
import OrderReview from '../OrderReview/OrderReview';
import './OrderReviews.css';


const OrderReviews = () => {

    const clients = [
        {
            id: 1,
            name: "Smith",
            "occupation": "CEO & Founder",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTljymdrW1wftBJmxaP5RZ0FPS5j5X0rhNGqw&usqp=CAU",
            description: "Our team of drone experts have advised, built, and supplied drones all over the US. We’re your one-stop shop for everything related to remote control aircraft.",
            rating: 3
        },
        {
            id: 2,
            name: "Andrew",
            "occupation": "CEO & Founder",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTljymdrW1wftBJmxaP5RZ0FPS5j5X0rhNGqw&usqp=CAU",
            description: "Our team of drone experts have advised, built, and supplied drones all over the US. We’re your one-stop shop for everything related to remote control aircraft.",
            rating: 5
        },
        {
            id: 3,
            name: "Trev",
            "occupation": "CEO & Founder",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTljymdrW1wftBJmxaP5RZ0FPS5j5X0rhNGqw&usqp=CAU",
            description: "Our team of drone experts have advised, built, and supplied drones all over the US. We’re your one-stop shop for everything related to remote control aircraft.",
            rating: 4
        }

    ]


    return (
        <div className="container mt-5 mb-5" id="clients">
            <h1 className="text-center mb-4 fst-italic">Words From Our Clients</h1>
            <h4 className="text-center mb-5 text-secondary pb-5 fst-italic">Hear what our client's has to say about us.</h4>
            <Row xs={1} md={3} className="g-4">
                {

                    clients?.map(client => <OrderReview key={client?.id} client={client}></OrderReview>)

                }
            </Row>
        </div>
    );
};

export default OrderReviews;
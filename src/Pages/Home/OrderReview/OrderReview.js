import React, { useState, useEffect } from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from "react-rating";
import './OrderReview.css';

const OrderReview = (props) => {
    const { name, img, occupation, description, rating } = props.client;
    return (
        <Col>
            <Card className="mt-5">
                <Card.Img variant="top" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="rounded-circle mx-auto d-block pt-3"
                    style={{ width: '30%', marginTop: '-90px' }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {occupation}
                    </Card.Text>
                    <Rating initialRating={rating} emptySymbol="far fa-star star-icon-color fa-2x" fullSymbol="fas fa-star star-icon-color fa-2x" readonly className="pb-3"> </Rating>
                    <br />
                    <Card.Text className="text-center">
                        {description}

                    </Card.Text>

                </Card.Body>
                <Card.Footer>
                    <div className="icons text-center mb-3">
                        <i className="fab fa-facebook-square fa-2x icon facebook-icon-color me-3"></i>
                        <i className="fab fa-twitter-square fa-2x icon twitter-icon-color me-3"></i>
                        <i className="fab fa-linkedin fa-2x icon linkedin-icon-color me-3"></i>

                    </div>
                </Card.Footer>
            </Card>

        </Col>
    );
};

export default OrderReview;
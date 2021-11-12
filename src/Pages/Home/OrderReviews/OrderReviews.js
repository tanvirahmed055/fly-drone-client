import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Rating from "react-rating";
import OrderReview from '../OrderReview/OrderReview';
import './OrderReviews.css';


const OrderReviews = () => {

    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const url = 'http://localhost:5000/reviews';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setLoading(false);
            })
    }, [reviews])


    return (
        <div className="container mt-5 mb-5" id="clients">
            <h1 className="text-center mb-4 fst-italic">Words From Our Clients</h1>
            <h4 className="text-center mb-5 text-secondary pb-5 fst-italic">Hear what our client's has to say about us.</h4>
            <Row xs={1} md={3} className="g-4">
                {

                    reviews?.map(review => <OrderReview key={review?._id} review={review}></OrderReview>)

                }
            </Row>
        </div>
    );
};

export default OrderReviews;
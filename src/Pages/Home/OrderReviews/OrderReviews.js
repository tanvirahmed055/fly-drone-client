import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import OrderReview from '../OrderReview/OrderReview';
import './OrderReviews.css';


const OrderReviews = () => {

    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);




    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        const url = 'http://localhost:5000/reviews';
        fetch(url, { signal: signal })
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setLoading(false);

            })
        return function cleanup() {
            abortController.abort();
        }

    }, [])


    return (
        <div className="container mt-5 mb-5" id="reviews">
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
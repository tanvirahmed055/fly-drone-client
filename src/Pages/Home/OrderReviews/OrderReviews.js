import React, { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import OrderReview from "../OrderReview/OrderReview";
import "./OrderReviews.css";
import ReviewData from "../../../assets/mock_data/reviews_data.json";

const OrderReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // isMounted variable is used to ensure that state updates are only applied when the component is still mounted.
    let isMounted = true;
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/api/server/reviews");
      if (isMounted) {
        if (response.ok) {
          const data = await response.json();
          setReviews(data);
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      }
    };

    const timeout = setTimeout(() => {
      if (isLoading) {
        if (isMounted) {
          setReviews(ReviewData);
          setIsLoading(false);
        }
      }
    }, 1000);

    fetchData();

    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
  }, [isLoading]);

  if (isLoading) return <Spinner animation="grow" />;

  return (
    <div className="container mt-5 mb-5" id="reviews">
      <h1 className="text-center mb-4 fst-italic">Words From Our Clients</h1>
      <h4 className="text-center mb-5 text-secondary pb-5 fst-italic">
        Hear what our client's has to say about us.
      </h4>
      <Row xs={1} md={3} className="g-4">
        {reviews?.map((review) => (
          <OrderReview key={review?._id} review={review}></OrderReview>
        ))}
      </Row>
    </div>
  );
};

export default OrderReviews;

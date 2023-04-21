import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Row, Spinner } from "react-bootstrap";
import OrderReview from "../OrderReview/OrderReview";
import "./OrderReviews.css";
import { reviews_data } from "../../../assets/mock_data/reviews_data";

const OrderReviews = () => {
  const { isLoading, data: reviews } = useQuery({
    queryKey: ["orderReviews"],
    queryFn: () =>
      fetch("http://localhost:5000/reviews").then((res) => res.json()),
  });

  if (isLoading) return <Spinner animation="grow" />;

  return (
    <div className="container mt-5 mb-5" id="reviews">
      <h1 className="text-center mb-4 fst-italic">Words From Our Clients</h1>
      <h4 className="text-center mb-5 text-secondary pb-5 fst-italic">
        Hear what our client's has to say about us.
      </h4>
      <Row xs={1} md={3} className="g-4">
        {(reviews || reviews_data)?.map((review) => (
          <OrderReview key={review?._id} review={review}></OrderReview>
        ))}
      </Row>
    </div>
  );
};

export default OrderReviews;

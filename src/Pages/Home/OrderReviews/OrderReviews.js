import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Row, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import OrderReview from "../OrderReview/OrderReview";
import "./OrderReviews.css";

const OrderReviews = () => {
  const {
    isLoading,
    error,
    data: reviews,
  } = useQuery({
    queryKey: ["orderReviews"],
    queryFn: () =>
      fetch("http://localhost:5000/reviews").then((res) => res.json()),
  });

  if (isLoading) return <Spinner animation="grow" />;

  if (error) return toast.error("Failed to load data");

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

import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import OrderReview from '../OrderReview/OrderReview';
import './OrderReviews.css';
import ReviewData from '../../../assets/mock_data/reviews_data.json';

const OrderReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await fetch(
          'http://localhost:5000/api/server/reviews'
        );

        if (isMounted) {
          if (response.ok) {
            const data = await response.json();
            setReviews(data);
            setIsLoading(false);
          } else {
            setIsLoading(false);
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
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

  if (isLoading) return <Spinner animation='grow' />;

  return (
    <div className='container mt-5 mb-5' id='reviews'>
      <h1 className='text-center mb-4 fst-italic'>Words From Our Clients</h1>
      <h4 className='text-center mb-5 text-secondary pb-5 fst-italic'>
        Hear what our client's has to say about us.
      </h4>
      <Row xs={1} md={3} className='g-4'>
        {ReviewData?.map((review, index) => (
          <OrderReview
            key={review?._id}
            review={review}
            position={index + 1}
          ></OrderReview>
        ))}
      </Row>
    </div>
  );
};

export default OrderReviews;

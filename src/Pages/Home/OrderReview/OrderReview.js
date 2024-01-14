import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './OrderReview.css';
import { motion } from 'framer-motion';

const OrderReview = ({ review, position }) => {
  const { reviewerName, reviewerOccupation, reviewerImg, description, rating } =
    review;
  return (
    <Col>
      <motion.div
        initial={
          position === 1 ? { x: '-30vw' } : position === 3 ? { x: '30vw' } : '0'
        }
        whileInView={position !== 2 ? { x: '0' } : {}}
        transition={{ duration: 1 }}
      >
        {' '}
        <Card className='mt-5'>
          <Card.Img
            variant='top'
            src={reviewerImg}
            className='rounded-circle mx-auto d-block pt-3'
            style={{ width: '90px', height: '150px', marginTop: '-90px' }}
          />
          <Card.Body>
            <Card.Title>{reviewerName}</Card.Title>
            <Card.Text>{reviewerOccupation}</Card.Text>
            <Rating
              initialRating={Number(rating)}
              emptySymbol='far fa-star star-icon-color fa-2x'
              fullSymbol='fas fa-star star-icon-color fa-2x'
              readonly
              className='pb-3'
            ></Rating>
            <br />
            <Card.Text className='text-center'>{description}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <div className='icons text-center mb-3'>
              <i className='fab fa-facebook-square fa-2x icon facebook-icon-color me-3'></i>
              <i className='fab fa-twitter-square fa-2x icon twitter-icon-color me-3'></i>
              <i className='fab fa-linkedin fa-2x icon linkedin-icon-color me-3'></i>
            </div>
          </Card.Footer>
        </Card>
      </motion.div>
    </Col>
  );
};

export default OrderReview;

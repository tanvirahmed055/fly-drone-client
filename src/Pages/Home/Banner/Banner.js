import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import banner1 from '../../../img/banner1.jpeg';
import banner2 from '../../../img/banner2.jpeg';
import banner3 from '../../../img/banner3.jpeg';
import { motion } from 'framer-motion';

const Banner = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Carousel fade>
      <Carousel.Item interval={1300}>
        <img
          className='d-block w-100 banner-image'
          src={banner1}
          alt='First slide'
        />
        <motion.div
          initial={{ y: '-10svh' }}
          whileInView={{ y: '0' }}
          transition={{ duration: 3 }}
        >
          {' '}
          <Carousel.Caption>
            <h2 className='fw-bold'>Providing a Wide Range of Drones</h2>
            <p>Updated With New Drone Models for {currentYear}</p>
          </Carousel.Caption>
        </motion.div>
      </Carousel.Item>
      <Carousel.Item interval={1300}>
        <img
          className='d-block w-100 banner-image'
          src={banner2}
          alt='Second slide'
        />
        <motion.div
          initial={{ y: '-10svh' }}
          whileInView={{ y: '0' }}
          transition={{ duration: 3 }}
        >
          {' '}
          <Carousel.Caption>
            <h2 className='fw-bold'>Providing Premium World Class Drones</h2>
            <p>Updated With New Drone Models for {currentYear}</p>
          </Carousel.Caption>
        </motion.div>
      </Carousel.Item>
      <Carousel.Item interval={1300}>
        <img
          className='d-block w-100 banner-image'
          src={banner3}
          alt='Third slide'
        />
        <motion.div
          initial={{ y: '-10svh' }}
          whileInView={{ y: '0' }}
          transition={{ duration: 3 }}
        >
          {' '}
          <Carousel.Caption>
            <h2 className='fw-bold'>High Rated Camera Drones</h2>
            <p>Updated With New Drone Models for {currentYear}</p>
          </Carousel.Caption>
        </motion.div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;

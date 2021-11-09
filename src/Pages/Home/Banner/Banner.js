import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import './Banner.css';
import { HashLink } from 'react-router-hash-link';
import banner1 from '../../../img/banner1.jpeg';
import banner2 from '../../../img/banner2.jpeg';
import banner3 from '../../../img/banner3.jpeg';

const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item interval={1300}>
                <img
                    className="d-block w-100 banner-image"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h2 className="fw-bold">Providing a Wide Range of Drones</h2>
                    <p>Updated With New Drone Models for 2021</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1300}>
                <img
                    className="d-block w-100 banner-image"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h2 className="fw-bold">Providing Premium World Class Drones</h2>
                    <p>Updated With New Drone Models for 2021</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1300}>
                <img
                    className="d-block w-100 banner-image"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h2 className="fw-bold">High Rated Camera Drones</h2>
                    <p>Updated With New Drone Models for 2021</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
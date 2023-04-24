import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import BrandData from "../../../assets/mock_data/brand_data.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Clients = () => {
  const settings = {
    className: "slider variable-width",
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    variableWidth: true,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1850,
    cssEase: "linear",
  };
  return (
    <div
      className="container mt-5 mb-5 "
      id="gallery"
      style={{ maxWidth: "100vw" }}
    >
      <h5 className="text-start pt-5 mt-5 mb-1 text-primary">
        Corporate Clients
      </h5>
      <h1 className="text-start mb-5 text-dark">Showcase</h1>

      {
        <Row className="gy-4">
          <Col>
            <Slider {...settings}>
              {BrandData?.map((item) => (
                <img
                  className=""
                  src={item.logoUrl}
                  alt="First slide"
                  width="100"
                  height="100"
                />
              ))}
            </Slider>
          </Col>
        </Row>
      }
    </div>
  );
};

export default Clients;

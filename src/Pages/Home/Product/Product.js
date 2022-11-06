import React from "react";
import { Card, Col, Button, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../../redux/cartSlice";

const Product = (props) => {
  const { _id, productName, productImg, shortDescription, productPrice } =
    props.product;

  let navigate = useNavigate();

  const dispatch = useDispatch();

  return (
    <Col>
      <Card className="text-center h-100">
        <Card.Img variant="top" src={productImg} style={{ height: "300px" }} />
        <Card.Body>
          <Card.Title className="fw-bolder text-start">
            {productName}
          </Card.Title>
          <Card.Text className="text-start">{shortDescription}</Card.Text>

          <Card.Footer>
            <Row className="d-flex justify-content-between align-items-center pt-2">
              {/* <Col sm={7}>
                <Card.Title className="text-start fw-bold">
                  ${productPrice}
                </Card.Title>
              </Col>
              <Col sm={5}>
                <Button
                  variant="warning"
                  size="lg"
                  className="fw-bolder"
                  onClick={() => navigate(`/purchase/${_id}`)}
                >
                  Purchase
                </Button>
              </Col> */}
              {/* start test */}
              <Col sm={3}>
                <Card.Title className="text-start fw-bold fs-3">
                  ${productPrice}
                </Card.Title>
              </Col>
              <Col sm={9}>
                <Button
                  variant="primary"
                  size="lg"
                  className="fw-bolder fs-5"
                  onClick={() => navigate(`/purchase/${_id}`)}
                >
                  Purchase
                </Button>
                <Button
                  variant="danger"
                  size="lg"
                  className="fw-bolder fs-5 ms-2"
                  onClick={() =>
                    dispatch(
                      addToCart({
                        _id,
                        productName,
                        productImg,
                        productPrice,
                      })
                    )
                  }
                >
                  Add to Cart
                </Button>
              </Col>

              {/* start end */}
            </Row>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;

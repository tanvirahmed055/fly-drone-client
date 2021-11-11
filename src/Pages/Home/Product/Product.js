import React from 'react';
import { Card, Col, Button, Container, Row } from 'react-bootstrap';

const Product = (props) => {
    const { productName, productImg, shortDescription, productPrice } = props.product;
    return (
        <Col>
            <Card className="text-center h-100">
                <Card.Img variant="top" src={productImg} style={{ height: '300px' }} />
                <Card.Body >
                    <Card.Title className="fw-bolder text-start">{productName}</Card.Title>
                    <Card.Text className="text-start">
                        {shortDescription}
                    </Card.Text>

                    <Card.Footer>
                        <Row className="d-flex justify-content-between align-items-center">
                            <Col sm={7}>
                                <Card.Title className="text-start fw-bold">
                                    ${productPrice}
                                </Card.Title>
                            </Col>
                            <Col sm={5}>
                                <Button variant="warning" size="lg" className="fw-bolder">
                                    Purchase
                                </Button>
                            </Col>
                        </Row>
                    </Card.Footer>



                </Card.Body>

            </Card>
        </Col >
    );
};

export default Product;
import React from 'react';
import { Card, Col, Button, Container, Row } from 'react-bootstrap';

const Product = (props) => {
    const { id, name, img, description, price } = props.product;
    return (
        <Col>
            <Card className="text-center h-100">
                <Card.Img variant="top" src={img} style={{ height: '300px' }} />
                <Card.Body>
                    <Card.Title className="fw-bolder text-start">{name}</Card.Title>
                    <Card.Text className="text-start">
                        {description}
                    </Card.Text>

                    <Card.Footer>
                        <Row className="d-flex justify-content-between align-items-center">
                            <Col sm={7}>
                                <Card.Title className="text-start fw-bold">
                                    ${price}
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
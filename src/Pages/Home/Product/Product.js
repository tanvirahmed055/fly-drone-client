import React from 'react';
import { Card, Col, Button, Row } from 'react-bootstrap';
import {
    useNavigate
} from "react-router-dom";

const Product = (props) => {
    const { _id, productName, productImg, shortDescription, productPrice } = props.product;

    let navigate = useNavigate();

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
                                <Button variant="warning" size="lg" className="fw-bolder" onClick={() => navigate(`/purchase/${_id}`)}>
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
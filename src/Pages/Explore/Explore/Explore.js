import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import {
    useHistory
} from "react-router-dom";

const Explore = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    let history = useHistory();

    useEffect(() => {
        setLoading(true);
        const url = 'http://localhost:5000/products';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
    }, [])
    return (
        <>
            <Header></Header>
            <Container fluid>
                <h1 className="text-center fw-bold mb-4 fst-italic mt-5">Our Products</h1>
                <h4 className="text-center mb-5 text-secondary pb-5 fst-italic">See Our Diverse and Unique Drones</h4>
                <Row xs={1} md={3} className="g-2">

                    {
                        loading ? <Spinner animation="grow" className="mx-auto" /> :
                            products?.map(product => <Col key={product?._id}>
                                <Card className="text-center h-100">
                                    <Card.Img variant="top" src={product?.productImg} style={{ height: '300px' }} />
                                    <Card.Body >
                                        <Card.Title className="fw-bolder text-start">{product?.productName}</Card.Title>
                                        <Card.Text className="text-start">
                                            {product?.shortDescription}
                                        </Card.Text>

                                        <Card.Footer>
                                            <Row className="d-flex justify-content-between align-items-center">
                                                <Col sm={7}>
                                                    <Card.Title className="text-start fw-bold">
                                                        ${product?.productPrice}
                                                    </Card.Title>
                                                </Col>
                                                <Col sm={5}>
                                                    <Button variant="warning" size="lg" className="fw-bolder" onClick={() => history.push(`/purchase/${product?._id}`)}>
                                                        Purchase
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Card.Footer>



                                    </Card.Body>

                                </Card>
                            </Col >)
                    }


                </Row>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Explore;
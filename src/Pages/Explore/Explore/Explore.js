import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

const Explore = () => {
  let navigate = useNavigate();
  const {
    isLoading,
    error,
    data: products,
  } = useQuery({
    queryKey: ["explore"],
    queryFn: () =>
      fetch("http://localhost:5000/products").then((res) => res.json()),
  });

  if (isLoading) return <Spinner animation="grow" />;

  if (error) return toast.error("Failed to load data");

  return (
    <>
      <Header></Header>
      <Container fluid>
        <h1 className="text-center fw-bold mb-4 fst-italic mt-5">
          Our Products
        </h1>
        <h4 className="text-center mb-5 text-secondary pb-5 fst-italic">
          See Our Diverse and Unique Drones
        </h4>
        <Row xs={1} md={3} className="g-2">
          {products?.map((product) => (
            <Col key={product?._id}>
              <Card className="text-center h-100">
                <Card.Img
                  variant="top"
                  src={product?.productImg}
                  style={{ height: "300px" }}
                />
                <Card.Body>
                  <Card.Title className="fw-bolder text-start">
                    {product?.productName}
                  </Card.Title>
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
                        <Button
                          variant="warning"
                          size="lg"
                          className="fw-bolder"
                          onClick={() => navigate(`/purchase/${product?._id}`)}
                        >
                          Purchase
                        </Button>
                      </Col>
                    </Row>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Explore;

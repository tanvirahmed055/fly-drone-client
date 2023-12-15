import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cartSlice';
import ProductData from '../../../assets/mock_data/products_data.json';

const Explore = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await fetch(
          'http://localhost:5000/api/server/products'
        );

        if (isMounted) {
          if (response.ok) {
            const data = await response.json();
            setProducts(data);
          }
        }
      } catch (error) {
        console.error('Error fetching product data:', error);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    const timeout = setTimeout(() => {
      if (isLoading && isMounted) {
        setProducts(ProductData);
        setIsLoading(false);
      }
    }, 1000);

    fetchData();

    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
  }, [isLoading]);

  if (isLoading) return <Spinner animation='grow' />;

  return (
    <>
      <Header></Header>
      <Container fluid className='mt-5 pt-4'>
        <h1 className='text-center fw-bold mb-4  mt-5'>Our Products</h1>
        <h4 className='text-center mb-5 text-secondary pb-5 '>
          See Our Diverse and Unique Drones
        </h4>
        <Row xs={1} md={3} className='g-2'>
          {ProductData?.map((product) => (
            <Col key={product?._id}>
              <Card className='text-center h-100'>
                <Card.Img
                  variant='top'
                  src={product?.productImg}
                  style={{ height: '300px' }}
                />
                <Card.Body>
                  <Card.Title className='fw-bolder text-start'>
                    {product?.productName}
                  </Card.Title>
                  <Card.Text className='text-start'>
                    {product?.shortDescription}
                  </Card.Text>
                  <Card.Footer>
                    <Row className='d-flex justify-content-between align-items-center pt-2'>
                      <Col sm={4}>
                        <Card.Title className='text-start fw-bold fs-3'>
                          ${product?.productPrice}
                        </Card.Title>
                      </Col>
                      <Col sm={8}>
                        <Button
                          variant='primary'
                          size='lg'
                          className='fw-bolder fs-5'
                          onClick={() => {
                            dispatch(
                              addToCart({
                                _id: product?._id,
                                productName: product?.productName,
                                productImg: product?.productImg,
                                productPrice: product?.productPrice,
                              })
                            );
                            navigate('/checkout');
                          }}
                        >
                          Purchase
                        </Button>
                        <Button
                          variant='danger'
                          size='lg'
                          className='fw-bolder fs-5 ms-2'
                          onClick={() =>
                            dispatch(
                              addToCart({
                                _id: product?._id,
                                productName: product?.productName,
                                productImg: product?.productImg,
                                productPrice: product?.productPrice,
                              })
                            )
                          }
                        >
                          Add to Cart
                        </Button>
                      </Col>
                      {/* <Col sm={6}></Col> */}
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

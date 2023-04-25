import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Product from "../Product/Product";
import Spinner from "react-bootstrap/Spinner";
import ProductData from "../../../assets/mock_data/products_data.json";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // isMounted variable is used to ensure that state updates are only applied when the component is still mounted.
    let isMounted = true;
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/api/server/products");
      if (isMounted) {
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      }
    };

    const timeout = setTimeout(() => {
      if (isLoading) {
        if (isMounted) {
          setProducts(ProductData);
          setIsLoading(false);
        }
      }
    }, 1000);

    fetchData();

    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
  }, [isLoading]);

  if (isLoading) return <Spinner animation="grow" />;

  return (
    <div className="container mt-5" id="products">
      <h1 className="text-center fw-bold mb-4">Our Products</h1>
      <h4 className="text-center mb-5 text-secondary pb-5 ">
        See Our Diverse and Unique Drones
      </h4>

      <Row xs={1} md={2} className="g-1">
        {products?.slice(0, 6)?.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </Row>
    </div>
  );
};

export default Products;

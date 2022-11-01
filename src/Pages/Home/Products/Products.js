import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import Product from "../Product/Product";
import Spinner from "react-bootstrap/Spinner";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = "https://fly-drone-server-ei1d.vercel.app/products";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.slice(0, 6));
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-5" id="products">
      <h1 className="text-center fw-bold mb-4 fst-italic">Our Products</h1>
      <h4 className="text-center mb-5 text-secondary pb-5 fst-italic">
        See Our Diverse and Unique Drones
      </h4>

      <Row xs={1} md={3} className="g-2">
        {loading ? (
          <Spinner animation="grow" className="mx-auto" />
        ) : (
          products?.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))
        )}
      </Row>
    </div>
  );
};

export default Products;

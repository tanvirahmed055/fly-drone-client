import React from "react";
import { Row } from "react-bootstrap";
import Product from "../Product/Product";
import Spinner from "react-bootstrap/Spinner";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

const Products = () => {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery({
    queryKey: ["product"],
    queryFn: () =>
      fetch("http://localhost:5000/products").then((res) => res.json()),
  });

  if (isLoading) return <Spinner animation="grow" />;

  if (error) return toast.error("Failed to load data");

  return (
    <div className="container mt-5" id="products">
      <h1 className="text-center fw-bold mb-4 fst-italic">Our Products</h1>
      <h4 className="text-center mb-5 text-secondary pb-5 fst-italic">
        See Our Diverse and Unique Drones
      </h4>

      <Row xs={1} md={3} className="g-2">
        {products?.slice(0, 6)?.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </Row>
    </div>
  );
};

export default Products;

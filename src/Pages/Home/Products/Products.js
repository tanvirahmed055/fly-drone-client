import React from "react";
import { Row } from "react-bootstrap";
import Product from "../Product/Product";
import Spinner from "react-bootstrap/Spinner";
import { useQuery } from "@tanstack/react-query";
import { products_data } from "../../../assets/mock_data/products_data";

const Products = () => {
  const { isLoading, data: products } = useQuery({
    queryKey: ["product"],
    queryFn: () =>
      fetch("https://gentle-lime-beaver.cyclic.app/api/server/products").then(
        (res) => res.json()
      ),
  });

  if (isLoading) return <Spinner animation="grow" />;

  return (
    <div className="container mt-5" id="products">
      <h1 className="text-center fw-bold mb-4">Our Products</h1>
      <h4 className="text-center mb-5 text-secondary pb-5 ">
        See Our Diverse and Unique Drones
      </h4>

      <Row xs={1} md={2} className="g-1">
        {(products || products_data)?.slice(0, 6)?.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </Row>
    </div>
  );
};

export default Products;

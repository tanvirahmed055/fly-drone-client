import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Button, Table, Row, Col, Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { toast } from "react-toastify";

const ManageProducts = () => {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery({
    queryKey: ["manageProducts"],
    queryFn: () =>
      fetch("http://localhost:5000/products").then((res) => res.json()),
  });

  const handleDelete = (id) => {
    //console.log(id);
    const confirmation = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (confirmation) {
      fetch(`http://localhost:5000/deleteProduct/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          //console.log('Success:', data);
          toast.success("Successfully deleted product.");
        })
        .catch((error) => {
          console.error("Error:", error);
          toast.error("Failed to delete product.");
        });
    }
  };

  if (isLoading) return <Spinner animation="grow" />;

  if (error) return toast.error("Failed to load data");

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1 className="text-center mb-4">My Products</h1>
          <h4 className="text-center mb-5 text-secondary">
            See all the available products here
          </h4>
          <h2 className="text-center mb-5 ">
            Number of Products: {products?.length}
          </h2>

          {
            <Table responsive="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {products?.map((product, index) => {
                  return (
                    <tr key={product?._id}>
                      <td>{index}</td>
                      <td>{product?.productName}</td>
                      <td>{product?.productPrice}</td>

                      <td>
                        {" "}
                        <Button
                          variant="danger"
                          onClick={() => handleDelete(product?._id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          }
        </Col>
      </Row>
    </Container>
  );
};

export default ManageProducts;

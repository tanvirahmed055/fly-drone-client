import React from "react";
import { Button, Table, Container, Row, Col } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

const MyOrders = () => {
  const { userInfo } = useAuth();

  const userEmail = userInfo?.email;

  const {
    isLoading,
    error,
    data: orders,
  } = useQuery({
    queryKey: ["myOrders", userEmail],
    queryFn: () =>
      fetch(`http://localhost:5000/orders?email=${userEmail}`).then((res) =>
        res.json()
      ),
  });

  if (isLoading) return <Spinner animation="grow" />;

  if (error) return toast.error("Failed to load data");

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1 className="text-center mb-4">My Orders</h1>
          <h4 className="text-center mb-5 text-secondary">
            See all of your orders here
          </h4>
          <h2 className="text-center mb-5 ">
            Number of Orders: {orders?.length}
          </h2>

          {
            <Table responsive="sm">
              <thead>
                <tr>
                  <th></th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Color</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {orders?.map((order, index) => {
                  return (
                    <tr key={order?._id}>
                      <td>{index}</td>
                      <td>{order?.order_items?.productName}</td>
                      <td>{order?.order_items?.productPrice}</td>
                      <td>{order?.productColor}</td>
                      <td>{order?.email}</td>

                      <td>{order?.order_status}</td>
                      <td>
                        <Button
                          variant="danger"
                          // onClick={() => handleDelete(order?._id)}
                        >
                          <Link
                            to={`/dashboard/invoice/${order?._id}`}
                            className="text-center text-white fw-bolder "
                          >
                            Go to Invoice{" "}
                          </Link>{" "}
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

export default MyOrders;

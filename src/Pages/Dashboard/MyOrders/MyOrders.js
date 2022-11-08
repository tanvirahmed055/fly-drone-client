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
      fetch(
        `https://gentle-lime-beaver.cyclic.app/api/server/orders?email=${userEmail}`
      ).then((res) => res.json()),
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
                  <th>Order Id</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Total Amount</th>
                  <th>Paid Amount</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders?.map((order, index) => {
                  return (
                    <tr key={order?._id}>
                      <td>{index}</td>
                      <td>{order?._id}</td>
                      <td>{order?.name}</td>
                      <td>{order?.phone}</td>
                      <td>{order?.total_amount}</td>
                      <td>{order?.total_amount}</td>
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

import React from "react";
import { Button, Table, Row, Col, Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

const ManageAllOrders = () => {
  const {
    isLoading,
    error,
    data: orders,
    refetch,
  } = useQuery({
    queryKey: ["manageAllOrders"],
    queryFn: () =>
      fetch("https://gentle-lime-beaver.cyclic.app/api/server/allOrders").then(
        (res) => res.json()
      ),
  });

  const handleDelete = (id) => {
    //console.log(id);

    const confirmation = window.confirm(
      "Are you sure you want to delete your order?"
    );

    if (confirmation) {
      fetch(
        `https://gentle-lime-beaver.cyclic.app/api/server/deleteOrder/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((response) => response.json())
        .then((data) => {
          //console.log('Success:', data);
          toast.success("Successfully deleted order.");
          refetch();
        })
        .catch((error) => {
          console.error("Error:", error);
          toast.error("Failed to delete order.");
        });
    }
  };

  const handleUpdate = (id) => {
    const url = "https://gentle-lime-beaver.cyclic.app/api/server/updateStatus";

    const orderInfo = {
      orderId: id,
    };

    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        toast.success("Order status update is successful.");
        refetch();
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Failed to update status of the order.");
      });
  };

  if (isLoading) return <Spinner animation="grow" />;

  if (error) return toast.error("Failed to load data");

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1 className="text-center mb-4">All Orders</h1>
          <h4 className="text-center mb-5 text-secondary">
            See all orders here
          </h4>
          <h2 className="text-center mb-5 ">
            Number of Orders: {orders?.length}
          </h2>

          {
            <Table responsive="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Order Id</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Total Amount</th>
                  <th>Paid Amount</th>
                  <th>Status</th>
                  <th>Actions</th>
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
                        {" "}
                        <Button
                          variant="danger"
                          onClick={() => handleDelete(order?._id)}
                          className="me-2"
                        >
                          Delete
                        </Button>
                        <Button
                          variant="success"
                          onClick={() => handleUpdate(order?._id)}
                          disabled={order?.order_status === "shipped"}
                        >
                          Update
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

export default ManageAllOrders;

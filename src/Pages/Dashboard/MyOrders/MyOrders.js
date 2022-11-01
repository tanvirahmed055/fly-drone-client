import React, { useState, useEffect } from "react";
import { Button, Table, Container, Row, Col } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const { userInfo } = useAuth();

  const [orders, setOrders] = useState([]);

  const [loading, setLoading] = useState(true);

  const userEmail = userInfo?.email;

  useEffect(() => {
    const url = `https://fly-drone-server-ei1d.vercel.app/orders?email=${userEmail}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        //console.log(orders)
        setLoading(false);
      });
  }, [userEmail]);

  // const handleDelete = (id) => {
  //   //console.log(id);

  //   const confirmation = window.confirm(
  //     "Are you sure you want to delete your order?"
  //   );

  //   if (confirmation) {
  //     fetch(`https://fly-drone-server-ei1d.vercel.app/deleteOrder/${id}`, {
  //       method: "DELETE",
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         //console.log('Success:', data);
  //       })
  //       .catch((error) => {
  //         console.error("Error:", error);
  //       });
  //   }
  // };

  return (
    <Container>
      <Row>
        {loading ? (
          <Spinner animation="grow" />
        ) : (
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
                          {" "}
                          {/* <Button
                            variant="danger"
                            onClick={() => handleDelete(order?._id)}
                          >
                            Delete
                          </Button> */}
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
        )}
      </Row>
    </Container>
  );
};

export default MyOrders;

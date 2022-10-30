import React, { useState, useEffect } from "react";
import { Button, Table, Row, Col, Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Invoice = () => {
  const [invoiceData, setInvoiceData] = useState([]);

  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const { userInfo } = useAuth();

  useEffect(() => {
    const url = `http://localhost:5000/orders/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setInvoiceData(data);
        //console.log(orders)
        setLoading(false);
      });
  }, [id]);

  //   const handleDelete = (id) => {
  //     //console.log(id);

  //     const confirmation = window.confirm(
  //       "Are you sure you want to delete your order?"
  //     );

  //     if (confirmation) {
  //       fetch(`http://localhost:5000/deleteOrder/${id}`, {
  //         method: "DELETE",
  //       })
  //         .then((response) => response.json())
  //         .then((data) => {
  //           //console.log('Success:', data);
  //         })
  //         .catch((error) => {
  //           console.error("Error:", error);
  //         });
  //     }
  //   };

  //   const handleUpdate = (id) => {
  //     const url = "http://localhost:5000/updateStatus";

  //     const orderInfo = {
  //       orderId: id,
  //     };

  //     fetch(url, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(orderInfo),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log("Success:", data);
  //       })
  //       .catch((error) => {
  //         console.error("Error:", error);
  //       });
  //   };

  console.log("invoiceData=", invoiceData);

  console.log("userInfo=", userInfo);

  return (
    <Container>
      <div>
        <div className="d-flex justify-content-between fw-normal">
          <div>
            <div>
              <div>
                <img
                  src="https://i.ibb.co/99RdtYG/fly-x-drone-logo.png"
                  alt="flyxdrone-logo"
                  style={{ width: "50%", height: "50%" }}
                />
                <h3 className="fw-light">INVOICE</h3>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <h4 className="fw-light">
                    Address:<span> 15/1, Uttara, Dhaka 1216</span>
                  </h4>
                  <h4 className="fw-light">
                    Number:<span> +8801798895620</span>
                  </h4>
                  <h4 className="fw-light">
                    Email:<span> info@flyxdrone.com</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <div className="pt-4">
                  <h3 className="fw-light">Customer Detail</h3>
                </div>
                <h4 className="fw-light" style={{ marginTop: "10px" }}>
                  Customer Name:<span> {userInfo?.displayName}</span>
                </h4>
                <h4 className="fw-light">
                  Email:<span> {userInfo?.email} </span>
                </h4>
                <h4 className="fw-light">
                  Phone Number:<span> {userInfo?.phone_number}</span>
                </h4>
                <h4 className="fw-light">
                  Order Number:<span> {invoiceData?._id}</span>
                </h4>
                <h4 className="fw-light">
                  Transaction Id {invoiceData?.transactionId}:
                  <span>hekejojo</span>
                </h4>
                <h4 className="fw-light">
                  Paid Amount:
                  <span> {invoiceData?.order_items?.productPrice} BDT</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Row>
        <Col xs={12}>
          <h4 className="text-start mt-5 mb-5">Products Details</h4>

          <Table responsive="sm">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Color</th>
                <th>Price</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{invoiceData?.order_items?.productName}</td>
                <td>{invoiceData?.order_items?.productColor}</td>
                <td>{invoiceData?.order_items?.productPrice}</td>
                <td>{invoiceData?.order_items?.productPrice}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            paddingTop: "5%",
          }}
        >
          <table cellPadding="10" width="40%">
            <colgroup>
              <col style={{ width: "50%" }} />
              <col style={{ width: "50%" }} />
            </colgroup>
            <tbody>
              <tr align="right">
                <td style={{ padding: 5 }}>Total Amount: </td>
                <td style={{ padding: 5 }}>
                  {" "}
                  {invoiceData?.order_items?.productPrice} BDT
                </td>
              </tr>
            </tbody>
          </table>
          <table cellPadding="10" width="40%">
            <colgroup>
              <col style={{ width: "50%" }} />
              <col style={{ width: "50%" }} />
            </colgroup>
            <tbody>
              <tr align="right">
                <td style={{ padding: 5 }}>Net payable: </td>
                <td style={{ padding: 5 }}>
                  {invoiceData?.order_items?.productPrice} BDT
                </td>
              </tr>
              <tr align="right">
                <td style={{ padding: 5 }}>Payment: </td>
                <td style={{ padding: 5 }}>
                  {invoiceData?.order_items?.productPrice} BDT
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Row>
    </Container>
  );
};

export default Invoice;

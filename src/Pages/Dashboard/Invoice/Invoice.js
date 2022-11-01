import React, { useRef, useCallback } from "react";
import { Button, Table, Row, Col, Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import ReactToPrint from "react-to-print";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

const Invoice = () => {
  const { id } = useParams();

  const { userInfo } = useAuth();

  const componentRef = useRef(null);

  const {
    isLoading,
    error,
    data: invoiceData,
  } = useQuery({
    queryKey: ["invoice", id],
    queryFn: () =>
      fetch(`https://fly-drone-server-ei1d.vercel.app/orders/${id}`).then(
        (res) => res.json()
      ),
  });

  const reactToPrintContent = useCallback(() => {
    return componentRef.current;
  }, []);

  if (isLoading) return <Spinner animation="grow" />;

  if (error) return toast.error("Failed to load data");

  return (
    <Container>
      <div className="mt-5 mb-5">
        <ReactToPrint
          pageStyle={{ margin: "5" }}
          content={reactToPrintContent}
          documentTitle={invoiceData?._id}
          trigger={() => (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "right",
                marginRight: 2,
              }}
            >
              <Button type="primary p-3">
                <i class="fas fa-print"></i>&nbsp; Print
              </Button>
            </div>
          )}
        />
      </div>
      <div ref={componentRef}>
        <div>
          <div className="d-flex justify-content-between fw-normal">
            <div>
              <div>
                <div>
                  <img
                    src="https://i.ibb.co/99RdtYG/fly-x-drone-logo.png"
                    alt="flyxdrone-logo"
                    // style={{ width: "50%", height: "50%" }}
                  />
                  <h3 className="">INVOICE</h3>
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
                    <h3 className="text-end">Customer Detail</h3>
                  </div>
                  <h4
                    className="fw-light text-end"
                    style={{ marginTop: "10px" }}
                  >
                    Customer Name:<span> {userInfo?.displayName}</span>
                  </h4>
                  <h4 className="fw-light text-end">
                    Email:<span> {userInfo?.email} </span>
                  </h4>
                  <h4 className="fw-light text-end">
                    Phone Number:
                    <span> {userInfo?.phone_number || "01673865763"}</span>
                  </h4>
                  <h4 className="fw-light text-end">
                    Order Number:<span> {invoiceData?._id}</span>
                  </h4>
                  <h4 className="fw-light text-end">
                    Transaction Id: {invoiceData?.transactionId}:
                    <span>hekejojo</span>
                  </h4>
                  <h4 className="fw-light text-end">
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
            <h4 className="text-start mt-5 mb-3">Products Details</h4>

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
      </div>
    </Container>
  );
};

export default Invoice;

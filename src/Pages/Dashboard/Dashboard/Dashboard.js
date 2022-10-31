import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Dashboard.css";

const Dashboard = () => {
  const { handleLogOut, role } = useAuth();

  //console.log('inside dashboard', role);

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={3} className="dashboard">
          <nav>
            <Link to="/dashboard">
              <h2 className="fs-3 fw-bolder fst-italic text-white pt-5">
                <i className="fas fa-chart-line"></i>&nbsp;Dashboard
              </h2>
            </Link>
            <ul className="text-center text-white pt-4 mt-4 pe-5">
              {role === "admin" && (
                <li className="pb-4">
                  <Link
                    to="/dashboard/manageAllOrders"
                    className="text-center text-white fw-bolder "
                  >
                    Manage All Orders
                  </Link>
                </li>
              )}

              {role === "admin" && (
                <li className="pb-4">
                  <Link
                    to="/dashboard/addAProduct"
                    className="text-center text-white fw-bolder "
                  >
                    Add A Product
                  </Link>
                </li>
              )}

              {role === "admin" && (
                <li className="pb-4">
                  <Link
                    to="/dashboard/makeAdmin"
                    className="text-center text-white fw-bolder "
                  >
                    Make Admin
                  </Link>
                </li>
              )}

              {role === "admin" && (
                <li className="pb-4">
                  <Link
                    to="/dashboard/manageProducts"
                    className="text-center text-white fw-bolder "
                  >
                    Manage Products
                  </Link>
                </li>
              )}

              {role !== "admin" && (
                <li className="pb-4">
                  <Link
                    to="/dashboard/myOrders"
                    className="text-center text-white fw-bolder "
                  >
                    My Orders
                  </Link>
                </li>
              )}

              {role !== "admin" && (
                <li className="pb-4">
                  <Link
                    to="/dashboard/review"
                    className="text-center text-white fw-bolder "
                  >
                    Review
                  </Link>
                </li>
              )}

              {/* {
                                (role !== 'admin') && <li className="pb-4">
                                    <Link to="/dashboard/pay" className="text-center text-white fw-bolder ">Pay</Link>
                                </li>
                            } */}

              <li>
                <Link to="/">
                  <Button
                    variant="danger"
                    className="me-3 mb-1 fw-bold text-white"
                    size="lg"
                    onClick={() => handleLogOut()}
                  >
                    Logout
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>
        </Col>
        <Col xs={12} md={9}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;

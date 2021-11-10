import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import AddAProduct from '../AddAProduct/AddAProduct';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import './Dashboard.css';

const Dashboard = () => {

    let { path, url } = useRouteMatch();

    return (
        <Row className="gy-4">
            <Col sm={3} >
                <div className="dashboard">

                    <Link to={`${url}`}>
                        <h2 className="fs-3 fw-bolder fst-italic text-white pt-5"><i className="fas fa-chart-line"></i>&nbsp;Dashboard</h2>
                    </Link>

                    <ul className="text-center text-white pt-4 mt-4 pe-5">
                        <li className="pb-4">
                            <Link to={`${url}/addAProduct`} className="text-center text-white fw-bolder ">Add A Product</Link>
                        </li>
                        <li className="pb-4">
                            <Link to={`${url}/makeAdmin`} className="text-center text-white fw-bolder ">Make Admin</Link>
                        </li>
                        <li className="pb-4">
                            <Link to={`${url}/manageAllOrders`} className="text-center text-white fw-bolder ">Manage All Orders</Link>
                        </li>
                        <li className="pb-4">
                            <Link to={`${url}/manageProducts`} className="text-center text-white fw-bolder ">Manage Products</Link>
                        </li>
                        <li className="pb-4">
                            <Link to={`${url}/MyOrders`} className="text-center text-white fw-bolder ">My Orders</Link>
                        </li>
                        <li className="pb-4">
                            <Link to={`${url}/pay`} className="text-center text-white fw-bolder ">Pay</Link>
                        </li>
                        <li className="pb-4">
                            <Link to={`${url}/review`} className="text-center text-white fw-bolder ">Review</Link>
                        </li>
                        <li>
                            <Link to="/">
                                <Button variant="danger" className="me-3 mb-1 fw-bold text-white" size="lg">Logout</Button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </Col>
            <Col sm={9}>
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>

                    <Route path={`${path}/addAProduct`}>
                        <AddAProduct></AddAProduct>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </Route>
                    <Route path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                </Switch>
            </Col>
        </Row>
    );
};

export default Dashboard;
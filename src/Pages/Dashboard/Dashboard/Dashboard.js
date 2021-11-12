import React from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
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
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import './Dashboard.css';

const Dashboard = () => {

    let { path, url } = useRouteMatch();

    const { handleLogOut, role } = useAuth();

    console.log('inside dashboard', role);

    return (
        <Container fluid>
            <Row>
                <Col xs={12} md={3} className="dashboard">


                    <Link to={`${url}`}>
                        <h2 className="fs-3 fw-bolder fst-italic text-white pt-5"><i className="fas fa-chart-line"></i>&nbsp;Dashboard</h2>
                    </Link>

                    <ul className="text-center text-white pt-4 mt-4 pe-5">

                        {/* {
                            (role === 'admin') ? <li className="pb-4">
                                <Link to={`${url}/manageAllOrders`} className="text-center text-white fw-bolder ">Manage All Orders</Link>
                            </li> : <li className="pb-4">
                                <Link to={`${url}/MyOrders`} className="text-center text-white fw-bolder ">My Orders</Link>
                            </li>
                        }





                        {
                            (role === 'admin') ? <li className="pb-4">
                                <Link to={`${url}/addAProduct`} className="text-center text-white fw-bolder ">Add A Product</Link>
                            </li> : <li className="pb-4">
                                <Link to={`${url}/review`} className="text-center text-white fw-bolder ">Review</Link>
                            </li>
                        }






                        {
                            (role === 'admin') ? <li className="pb-4">
                                <Link to={`${url}/makeAdmin`} className="text-center text-white fw-bolder ">Make Admin</Link>
                            </li> : <li className="pb-4">
                                <Link to={`${url}/pay`} className="text-center text-white fw-bolder ">Pay</Link>
                            </li>
                        }

                        {
                            (role === 'admin') ? <li className="pb-4">
                                <Link to={`${url}/manageProducts`} className="text-center text-white fw-bolder ">Manage Products</Link>
                            </li> : null
                        } */}


                        {
                            (role === 'admin') && <li className="pb-4">
                                <Link to={`${url}/manageAllOrders`} className="text-center text-white fw-bolder ">Manage All Orders</Link>
                            </li>
                        }

                        {
                            (role === 'user') && <li className="pb-4">
                                <Link to={`${url}/MyOrders`} className="text-center text-white fw-bolder ">My Orders</Link>
                            </li>
                        }











                        <li>
                            <Link to="/">
                                <Button variant="danger" className="me-3 mb-1 fw-bold text-white" size="lg" onClick={() => handleLogOut()}>Logout</Button>
                            </Link>
                        </li>
                    </ul>

                </Col>
                <Col xs={12} md={9} >
                    <Switch>
                        <Route exact path={path}>
                            <DashboardHome></DashboardHome>
                        </Route>

                        <AdminRoute path={`${path}/addAProduct`}>
                            <AddAProduct></AddAProduct>
                        </AdminRoute>
                        <AdminRoute path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageAllOrders`}>
                            <ManageAllOrders></ManageAllOrders>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageProducts`}>
                            <ManageProducts></ManageProducts>
                        </AdminRoute>
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
        </Container>
    );
};

export default Dashboard;
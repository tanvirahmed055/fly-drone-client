import React, { useState, useEffect } from 'react';
import { Button, Table, Container, Row, Col } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Spinner from 'react-bootstrap/Spinner';

const MyOrders = () => {

    const { userInfo } = useAuth();

    const [orders, setOrders] = useState([]);

    const [loading, setLoading] = useState(true);

    const userEmail = userInfo?.email;

    useEffect(() => {
        setLoading(true);
        const url = `http://localhost:5000/orders?email=${userEmail}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                //console.log(orders)
                setLoading(false);
            })
    }, [])




    return (
        <Container>
            <Row>
                {
                    loading ? <Spinner animation="grow" /> :
                        <Col xs={12}>
                            <h1 className="text-center mb-4">My Orders</h1>
                            <h4 className="text-center mb-5 text-secondary">See all of your orders here</h4>
                            <h2 className="text-center mb-5 ">Number of Orders: {orders?.length}</h2>

                            {
                                <Table responsive="sm">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Product Name</th>
                                            <th>Price</th>
                                            <th>Color</th>
                                            <th>Email</th>
                                            <th>Status</th>
                                            <th>Delete</th>
                                            <th>Update</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {

                                            orders?.map((order, index) => {

                                                return <tr key={order?._id}>
                                                    <td>{index}</td>
                                                    <td>{order?.productName}</td>
                                                    <td>{order?.productPrice}</td>
                                                    <td>{order?.productColor}</td>
                                                    <td>{order?.email}</td>

                                                    <td>{order?.status}</td>
                                                    <td>  <Button variant="danger" >Delete</Button>
                                                    </td>
                                                    <td>  <Button variant="success" >Update</Button>
                                                    </td>

                                                </tr>
                                            })
                                        }

                                    </tbody>
                                </Table>
                            }
                        </Col>
                }
            </Row>

        </Container>
    );
};

export default MyOrders;
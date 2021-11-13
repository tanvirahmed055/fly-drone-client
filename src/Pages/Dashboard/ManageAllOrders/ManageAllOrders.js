import React, { useState, useEffect } from 'react';
import { Button, Table, Row, Col, Container } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

const ManageAllOrders = () => {

    const [orders, setOrders] = useState([]);

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const url = `https://morning-plateau-79651.herokuapp.com/allOrders`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                //console.log(orders)
                setLoading(false);
            })
    }, [orders])

    const handleDelete = id => {
        //console.log(id);

        const confirmation = window.confirm("Are you sure you want to delete your order?");

        if (confirmation) {
            fetch(`https://morning-plateau-79651.herokuapp.com/deleteOrder/${id}`, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(data => {
                    //console.log('Success:', data);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    }

    const handleUpdate = id => {
        const url = 'https://morning-plateau-79651.herokuapp.com/updateStatus';

        const orderInfo = {
            orderId: id
        }

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderInfo),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

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
                                                    <td>  <Button variant="danger" onClick={() => handleDelete(order?._id)} >Delete</Button>
                                                    </td>

                                                    <td><Button variant="success" onClick={() => handleUpdate(order?._id)} >Update</Button>
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

        </Container >

    );
};

export default ManageAllOrders;
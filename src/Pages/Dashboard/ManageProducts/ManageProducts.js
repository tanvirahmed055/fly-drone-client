import React, { useState, useEffect } from 'react';
import { Button, Table, Row, Col, Container } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

const ManageProducts = () => {


    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const url = `https://morning-plateau-79651.herokuapp.com/products`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                //console.log(orders)
                setLoading(false);
            })
    }, [products])

    const handleDelete = id => {
        //console.log(id);
        const confirmation = window.confirm("Are you sure you want to delete this product?");

        if (confirmation) {
            fetch(`https://morning-plateau-79651.herokuapp.com/deleteProduct/${id}`, {
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




    return (
        <Container>
            <Row>
                {
                    loading ? <Spinner animation="grow" /> :
                        <Col xs={12}>
                            <h1 className="text-center mb-4">My Products</h1>
                            <h4 className="text-center mb-5 text-secondary">See all the available products here</h4>
                            <h2 className="text-center mb-5 ">Number of Products: {products?.length}</h2>

                            {
                                <Table responsive="sm">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Product Name</th>
                                            <th>Price</th>
                                            <th>Delete</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {

                                            products?.map((product, index) => {

                                                return <tr key={product?._id}>
                                                    <td>{index}</td>
                                                    <td>{product?.productName}</td>
                                                    <td>{product?.productPrice}</td>

                                                    <td>  <Button variant="danger" onClick={() => handleDelete(product?._id)} >Delete</Button>
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

export default ManageProducts;
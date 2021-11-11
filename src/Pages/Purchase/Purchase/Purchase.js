import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {
    useParams
} from "react-router-dom";
import { useForm } from "react-hook-form";
import Image from 'react-bootstrap/Image';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const Purchase = () => {

    const { id } = useParams();

    const { userInfo } = useAuth();

    const [product, setProduct] = useState({});

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        data.status = 'pending';

        const newOrder = {
            name: data.username,
            email: data.email,
            address: data.address,
            location: data.location,
            location: data.location,
            location: data.location,
        }




    }


    useEffect(() => {
        const url = `http://localhost:5000/product?id=${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])



    return (
        <>
            <Header></Header>
            <Container className="text-center mt-5">
                <Row>
                    <Col sm={7}>
                        <Image src={product?.productImg} style={{ width: '330px', height: '330px' }} className="text-center" fluid />
                        <h3 className="fw-bolder text-center mt-3">Product Name:&nbsp;{product?.productName}</h3>
                        <p className="text-center mt-3 mb-4"><span className="text-decoration-underline fw-bold">Product Description:</span>&nbsp;{product?.detailDescription}</p>
                        <h5>Product Price: &nbsp;${product?.productPrice}</h5>
                    </Col>
                    <Col sm={5}>
                        <Container className="order-form-container p-3">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <h1>Delivery Order Form</h1>
                                <label htmlFor="username">Your Name</label>
                                <input defaultValue={userInfo?.displayName} {...register("username")} />

                                <label htmlFor="email">Email</label>
                                <input
                                    defaultValue={userInfo?.email}
                                    type="text"
                                    {...register("email")}
                                />

                                <label htmlFor="address">Address</label>
                                <input placeholder="address" {...register("address")} />


                                <label htmlFor="phonenumber">Phone Number</label>
                                <input placeholder="+880" {...register("phonenumber")} />


                                <label htmlFor="city">City</label>
                                <input placeholder="city" {...register("city")} />

                                <label htmlFor="color">Product Color</label>
                                <input placeholder="preferred color" {...register("color")} />

                                <div style={{ color: "red" }}>
                                    {Object.keys(errors).length > 0 &&
                                        "There are errors, check your console."}
                                </div>
                                <input type="submit" />
                            </form>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Purchase;
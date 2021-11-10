import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './Login.css';

const Login = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = data => {
        console.log(data);


    }


    return (
        <Container fluid className="login-main-container">
            <Row>
                <Col sm={12} >
                    <Container className="order-form-container py-5  mt-5 ">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h1>Login</h1>
                            <label htmlFor="email">Email</label>
                            <input placeholder="email"  {...register("email")} />


                            <label htmlFor="password">Password</label>
                            <input placeholder="password" type="password" {...register("password")} />




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
    );
};

export default Login;
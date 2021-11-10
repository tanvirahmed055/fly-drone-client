import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";


const Register = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = data => {
        console.log(data);


    }



    return (
        <Container fluid >
            <Row>
                <Col sm={12} >
                    <Container className="order-form-container py-2  my-3 ">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h1 className="fw-bold">Sign Up</h1>

                            <label htmlFor="name">Name</label>
                            <input placeholder="name" type="text" {...register("name")} />


                            <label htmlFor="email">Email</label>
                            <input placeholder="email" type="email" {...register("email")} />


                            <label htmlFor="password">Password</label>
                            <input placeholder="password" type="password" {...register("password")} />



                            <label htmlFor="password">Retype Password</label>
                            <input placeholder="retype password" type="password" {...register("password2")} />


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

export default Register;
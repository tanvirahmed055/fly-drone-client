import React from 'react';
import { Col, Container, Image, Row, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import {
    useHistory,
    useLocation
} from "react-router-dom";

const Register = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { handleRegistration, updateProfile, auth } = useAuth();

    let history = useHistory();




    const onSubmit = (data, e) => {
        console.log(data);

        const newUser = {
            name: data?.name,
            email: data?.email,
            password: data?.password
        }

        console.log(newUser);


        handleRegistration(data.name, data.email, data.password)
            .then(result => {
                // Signed in 
                const user = result.user;
                // ...
                updateProfile(auth.currentUser, {
                    displayName: data.name,
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });

                history.replace('/login')

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
        reset();
    }



    return (
        <Container fluid >
            <Row>
                <Col sm={12} >
                    <Container className="order-form-container py-3  my-5 ">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h1 className="fw-bold">Sign Up</h1>

                            <label htmlFor="name">Name</label>
                            <input placeholder="name" type="text" {...register("name")} />


                            <label htmlFor="email">Email</label>
                            <input placeholder="email" type="email" {...register("email")} />


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

export default Register;
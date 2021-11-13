import React from 'react';
import { Col, Container, Image, Row, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import {
    useHistory
} from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';

const Register = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { handleRegistration, updateProfile, auth, setLoading, userInfo } = useAuth();

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

                savedUser(data.name, data.email)
                reset();
                history.replace('/login')

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });



    }


    const savedUser = (name, email) => {
        const user = { name, email, role: 'user' };
        console.log(user);
        const url = 'https://morning-plateau-79651.herokuapp.com/users';

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
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
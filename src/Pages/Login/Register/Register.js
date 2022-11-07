import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { handleRegistration, handleGoogleSignIn } = useAuth();

  let navigate = useNavigate();

  const onSubmit = async (data, e) => {
    const userAuthData = await handleRegistration(
      data.name,
      data.email,
      data.password
    );
    if (userAuthData) {
      try {
        const responseData = await storeUser(
          data.name,
          userAuthData.user.email
        );
        console.log("responseData", responseData);
        if (responseData) {
          reset();
          navigate("/");
          toast.success("User Sign up is successful.");
        }
      } catch (e) {
        toast.error("Failed to sign up. Please try again!");
      }
    }
  };

  const handleGoogleLoginIn = async () => {
    const userAuthData = await handleGoogleSignIn();

    console.log(userAuthData);

    if (userAuthData) {
      try {
        const responseData = await storeUser(
          userAuthData.user.displayName,
          userAuthData.user.email
        );
        if (responseData) {
          reset();
          navigate("/");
          toast.success("Google Sign in is successful.");
        }
        console.log("responseData", responseData);
      } catch (e) {
        toast.error("Failed to sign in with Google.");
      }
    }
  };

  const storeUser = async (name, email) => {
    const user = { name, email, role: "user" };
    const url = `http://localhost:5000/users/${email}`;
    return fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        if (data.acknowledged) {
          return data;
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        return error;
      });
  };

  return (
    <Container fluid>
      <Row>
        <Col sm={12}>
          <Container className="order-form-container py-3  my-5 ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className="fw-bold">Sign Up</h1>
              <label htmlFor="name">Name</label>
              <input placeholder="name" type="text" {...register("name")} />
              <label htmlFor="email">Email</label>
              <input placeholder="email" type="email" {...register("email")} />
              <label htmlFor="password">Password</label>
              <input
                placeholder="password"
                type="password"
                {...register("password")}
              />
              <div style={{ color: "red" }}>
                {Object.keys(errors).length > 0 &&
                  "There are errors, check your console."}
              </div>
              <input type="submit" />
              <input
                type="button"
                onClick={() => {
                  handleGoogleLoginIn();
                }}
                value="Sign in with Google"
                className="bg-primary text-white mt-4 p-3 fw-bold border border-0"
              />
            </form>
            <Link to="/login">
              <h6 className="pt-4 text-light fw-bolder text-decoration-underline">
                Already a user? <span>Sign in</span>
              </h6>
            </Link>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { useNavigate, useLocation } from "react-router-dom";
import "./Login.css";
import { toast } from "react-toastify";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { handleLogin, handleGoogleSignIn } = useAuth();

  let navigate = useNavigate();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const onSubmit = (data) => {
    //console.log(data);

    handleLogin(data.email, data.password)
      .then((result) => {
        // Signed in
        //const user = result.user;
        // ...
        navigate(from);
        toast.success("Login Success");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        toast.error("Failed to login");
      });

    reset();
  };

  const handleGoogleLoginIn = async () => {
    const userAuthData = await handleGoogleSignIn();

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
    //console.log(user);
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
          <Container className="order-form-container py-5  mt-5 ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className="fw-bold">Login</h1>
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
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

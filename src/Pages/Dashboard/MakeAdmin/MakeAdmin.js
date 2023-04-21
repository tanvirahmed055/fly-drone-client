import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
  //const { token } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    //console.log(data);

    const inputEmail = {
      email: data?.email,
    };

    //console.log(inputEmail);

    const url = "http://localhost:5000/makeAdmin";

    //console.log(localStorage.getItem('idToken'));
    fetch(url, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("idToken")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputEmail),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        toast.success("Successfully made admin");
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Failed to make admin.");
      });

    reset();
  };

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Container className="order-form-container p-3 mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1>Make Admin Form</h1>

              <label htmlFor="email">Enter Email</label>
              <input
                type="email"
                placeholder="enter email"
                {...register("email")}
              />

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

export default MakeAdmin;

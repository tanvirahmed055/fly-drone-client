import React, { useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Image from "react-bootstrap/Image";
import useAuth from "../../../hooks/useAuth";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import CheckoutForm from "./components/CheckoutFormModal";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Cart from "../../Cart/Cart";

const stripePromise = loadStripe(
  "pk_test_51JvvPUEz32mQlkG5L683R8ntXgn2rrBLmOf4IDFcfTCyObc1U6HcpnoPGSDMtGeki2jGs7GLEnEw5oLM8C6KL84q00JK7AGCFu"
);

const Checkout = () => {
  // const { id } = useParams();

  const { userInfo } = useAuth();

  const {
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const [showCheckoutFormModal, setShowCheckoutFormModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // const {
  //   isLoading,
  //   error,
  //   data: product,
  //   refetch,
  // } = useQuery({
  //   queryKey: ["products", id],
  //   queryFn: () =>
  //     fetch(`http://localhost:5000/product?id=${id}`).then((res) => res.json()),
  // });

  // if (isLoading) return <Spinner animation="grow" />;

  // if (error) return toast.error("Failed to load data");

  return (
    <>
      <Header></Header>
      <Container
        fluid
        className="text-center mt-5 pt-5"
        style={{ backgroundColor: "gainsboro" }}
      >
        <Row>
          <Col sm={9}>
            {/* <Image
              src={product?.productImg}
              style={{ width: "330px", height: "330px" }}
              className="text-center"
              fluid
            />
            <h3 className="fw-bolder text-center mt-3">
              Product Name:&nbsp;{product?.productName}
            </h3>
            <p className="text-center mt-3 mb-4">
              <span className="text-decoration-underline fw-bold">
                Product Description:
              </span>
              &nbsp;{product?.detailDescription}
            </p>
            <h5>Product Price: &nbsp;${product?.productPrice}</h5> */}
            <Cart />
          </Col>
          <Col sm={3}>
            <Container className="order-form-container p-3">
              <form onSubmit={handleSubmit}>
                <h1>Delivery Order Form</h1>
                <label htmlFor="username">Your Name</label>
                <input
                  defaultValue={userInfo?.displayName}
                  {...register("username")}
                />

                <label htmlFor="email">Email</label>
                <input
                  defaultValue={userInfo?.email}
                  type="text"
                  {...register("email")}
                />

                <label htmlFor="address">Delivery Address</label>
                <input placeholder="address" {...register("address")} />

                <label htmlFor="phonenumber">Phone Number</label>
                <input placeholder="0168...." {...register("phonenumber")} />

                {/* <label htmlFor="color">Product Color</label>
                <input placeholder="preferred color" {...register("color")} /> */}

                <div style={{ color: "red" }}>
                  {Object.keys(errors).length > 0 &&
                    "There are errors, check your console."}
                </div>
                <input
                  type="submit"
                  onClick={() => setShowCheckoutFormModal(true)}
                  value="Proceed to Payment"
                />
              </form>
              {showCheckoutFormModal && (
                <Elements stripe={stripePromise}>
                  <CheckoutForm
                    show={showCheckoutFormModal}
                    onHide={() => setShowCheckoutFormModal(false)}
                    userName={watch("username")}
                    email={watch("email")}
                    address={watch("address")}
                    phone={watch("phonenumber")}
                    // color={watch("color")}
                    // productName={product?.productName}
                    // productPrice={product?.productPrice}
                    reset={reset}
                    // refetch={refetch}
                  />{" "}
                </Elements>
              )}
            </Container>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Checkout;

import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CheckoutForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  let navigate = useNavigate();

  const {
    userName,
    email,
    address,
    phone,
    city,
    // color,
    productName,
    productPrice,
    show,
    onHide,
    reset,
  } = props;

  const cart = useSelector((state) => state.cart);

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.productPrice * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  useEffect(() => {
    try {
      const url = "http://localhost:5000/create-payment-intent";

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("idToken")}`,
        },
        body: JSON.stringify({ total_amount: getTotal()?.totalPrice }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.clientSecret) {
            setClientSecret(data.clientSecret);
          }
        });
    } catch (error) {
      console.log("error", error);
    }
  }, [productPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setSuccess("");
    setProcessing(true);

    const id = toast.loading("Please wait...");

    // confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: userName,
            email: email,
          },
        },
      });

    if (intentError) {
      setCardError(intentError?.message);
      setProcessing(false);
    } else {
      setCardError("");
      console.log(paymentIntent);
      setSuccess("Congrats! Your payment is completed.");

      // store payment on database

      const orderData = {
        name: userName,
        email: email,
        address: address,
        phone: phone,
        city: city,
        order_items: {
          productName,
          productPrice,
          // productColor: color,
        },
        order_status: "pending",
        transactionId: paymentIntent.id,
      };

      fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderData),
      })
        .then((res) => res.json())
        .then((data) => {
          setProcessing(false);
          console.log(data);
          reset();
          onHide();
          // toast.success("Order confirmation with payment is successful.");
          toast.update(id, {
            render: "Order confirmation with payment is successful.",
            type: "success",
            isLoading: false,
          });

          navigate("/dashboard/myOrders");
        })
        .catch((error) => {
          console.log("error", error);
          // toast.error("Failed to make an order.");
          toast.update(id, {
            render: "Failed to make an order.",
            type: "error",
            isLoading: false,
          });
        });
    }
  };

  console.log("inside checkout form modal =", cart);

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className=" text-center"
          >
            <p>Total Payable Amount: ${getTotal()?.totalPrice}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
            <div className="d-flex justify-content-center  align-items-center">
              <Button
                disabled={processing}
                onClick={handleSubmit}
                variant="success mt-5"
                // disabled={!stripe || !clientSecret}
              >
                {processing ? "Loading…" : "Confirm Order Payment"}
              </Button>
            </div>
          </form>
          {cardError && <p className="text-red-500">{cardError}</p>}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CheckoutForm;

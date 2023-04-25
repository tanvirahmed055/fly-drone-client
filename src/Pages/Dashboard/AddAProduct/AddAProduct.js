import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddAProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    //console.log(data);

    const newOrder = {
      productName: data.productName,
      productImg: data.productImg,
      shortDescription: data.shortDescription,
      detailDescription: data.detailDescription,
      productPrice: data.productPrice,
    };

    console.log(newOrder);

    const url = "http://localhost:5000/api/server/addProduct";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrder),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        toast.success("Successfully added a product.");
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Failed to add  product.");
      });

    reset();
  };

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Container className="order-form-container p-3 mt-3">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1>Add A New Product</h1>
              <label htmlFor="productname">Product Name</label>
              <input
                placeholder="name of the product"
                {...register("productName")}
              />

              <label htmlFor="imageUrl">Product Image</label>
              <input placeholder="image url" {...register("productImg")} />

              <label htmlFor="shortDescription">Short Description</label>
              <input
                placeholder="short description of product"
                type="text"
                {...register("shortDescription")}
              />

              <label htmlFor="detailDescription">Detail Description</label>
              <input
                placeholder="detail description of product"
                type="text"
                {...register("detailDescription")}
              />

              <label htmlFor="productprice">Price</label>
              <input
                type="number"
                placeholder="product price"
                {...register("productPrice")}
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

export default AddAProduct;

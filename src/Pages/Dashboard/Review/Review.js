import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";


const Review = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        //console.log(data);

        const newReview = {
            reviewerImg: data.reviewerImg,
            reviewerName: data.name,
            reviewerOccupation: data.occupation,
            description: data.description,
            rating: data.rating
        };

        console.log(newReview);

        const url = 'https://morning-plateau-79651.herokuapp.com/addReview';

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newReview),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        reset();

    }


    return (
        <Container>
            <Row>
                <Col xs={12}>
                    <Container className="order-form-container p-3 mt-3">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h1>Add A New Review</h1>


                            <label htmlFor="imageUrl">Add a Profile Image of minimum 500*750 dimensions</label>
                            <input placeholder="image url" {...register("reviewerImg")} />


                            <label htmlFor="name">Your Name</label>
                            <input placeholder="name of the reviewer" {...register("name")} />


                            <label htmlFor="designation">Your Occupation</label>
                            <input placeholder="your occupation" {...register("occupation")} />

                            <label htmlFor="description">Description</label>
                            <input
                                placeholder=" description of product"
                                type="text"
                                {...register("description")}
                            />

                            <label htmlFor="rating">Give a rating out 5</label>
                            <input type="number" placeholder="give a rating out of 5" {...register("rating")} />


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

export default Review;
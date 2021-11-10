import React from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';


const Products = () => {

    const products = [
        {
            id: 1,
            name: "Carbon Fiber 12 MP DJI Spark Drone Camera",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTljymdrW1wftBJmxaP5RZ0FPS5j5X0rhNGqw&usqp=CAU",
            description: "our team of drone experts have advised, built, and supplied drones all over the US. We’re your one-stop shop for everything related to remote control aircraft.",
            price: 1500
        },
        {
            id: 2,
            name: "Carbon Fiber 12 MP DJI Spark Drone Camera",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTljymdrW1wftBJmxaP5RZ0FPS5j5X0rhNGqw&usqp=CAU",
            description: "our team of drone experts have advised, built, and supplied drones all over the US. We’re your one-stop shop for everything related to remote control aircraft.",
            price: 1500
        },
        {
            id: 3,
            name: "Carbon Fiber 12 MP DJI Spark Drone Camera",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTljymdrW1wftBJmxaP5RZ0FPS5j5X0rhNGqw&usqp=CAU",
            description: "our team of drone experts have advised, built, and supplied drones all over the US. We’re your one-stop shop for everything related to remote control aircraft.",
            price: 1500
        },
        {
            id: 4,
            name: "Carbon Fiber 12 MP DJI Spark Drone Camera",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTljymdrW1wftBJmxaP5RZ0FPS5j5X0rhNGqw&usqp=CAU",
            description: "our team of drone experts have advised, built, and supplied drones all over the US. We’re your one-stop shop for everything related to remote control aircraft.",
            price: 1500
        },
        {
            id: 5,
            name: "Carbon Fiber 12 MP DJI Spark Drone Camera",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTljymdrW1wftBJmxaP5RZ0FPS5j5X0rhNGqw&usqp=CAU",
            description: "our team of drone experts have advised, built, and supplied drones all over the US. We’re your one-stop shop for everything related to remote control aircraft.",
            price: 1500
        },
        {
            id: 6,
            name: "Carbon Fiber 12 MP DJI Spark Drone Camera",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTljymdrW1wftBJmxaP5RZ0FPS5j5X0rhNGqw&usqp=CAU",
            description: "our team of drone experts have advised, built, and supplied drones all over the US. We’re your one-stop shop for everything related to remote control aircraft.",
            price: 1500
        }
    ]
    return (
        <div className="container mt-5" id="products">
            <h1 className="text-center fw-bold mb-5 fst-italic">Our Products</h1>

            <Row xs={1} md={3} className="g-2">
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </Row>

        </div>
    );
};

export default Products;
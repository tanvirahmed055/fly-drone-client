import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import OrderReviews from '../OrderReviews/OrderReviews';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <Features></Features>
            <OrderReviews></OrderReviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;
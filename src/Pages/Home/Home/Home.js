import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import OrderReviews from "../OrderReviews/OrderReviews";
import Products from "../Products/Products";
import VideoGallery from "../VideoGallery/VideoGallery";
import MapView from "../MapView/MapView";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Products></Products>
      <Features></Features>
      <OrderReviews></OrderReviews>
      <VideoGallery></VideoGallery>
      <MapView></MapView>
      <Footer></Footer>
    </div>
  );
};

export default Home;

import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import OrderReviews from '../OrderReviews/OrderReviews';
import Products from '../Products/Products';
import VideoGallery from '../VideoGallery/VideoGallery';
import MapView from '../MapView/MapView';
import Clients from '../Clients/Clients';
import { useApp } from '../../../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';
import Loader from '../../Shared/Loader';

const Home = () => {
  const { isInitialLoad } = useApp();
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000000);
  // }, []);
  const [showLoader, setShowLoader] = useState(true);
  return (
    <>
      <AnimatePresence mode='wait'>
        {!isInitialLoad && (
          <Loader showLoader={showLoader} setShowLoader={setShowLoader} />
        )}
        <div>
          <Header></Header>
          <Banner></Banner>
          <Products></Products>
          <Features></Features>
          <OrderReviews></OrderReviews>
          <VideoGallery></VideoGallery>
          <Clients></Clients>
          <MapView></MapView>
          <Footer></Footer>
        </div>
      </AnimatePresence>
    </>
  );
};

export default Home;

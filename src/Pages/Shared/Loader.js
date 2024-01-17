import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ showLoader, setShowLoader }) => {
  const [uploadOrDownloadCount, setUploadOrDownloadCount] = useState(10);
  //   const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    const timer = setInterval(() => {
      setUploadOrDownloadCount((beforeValue) => {
        const newValue = beforeValue + 1;
        return newValue >= 100 ? 100 : newValue;
      });
    }, 1);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const loaderVariants = {
    // hidden: {
    //   opacity: 0,
    // },
    visible: {
      opacity: 1,
      //   y: '-100vh',
      transition: {
        type: 'tween',
        delay: 1.5,
        duration: 1.5,
        // ease: 'easeInOut',
        // when: 'afterChildren',
      },
    },
    exit: {
      y: '-100vh',
      transition: { ease: 'easeInOut', duration: 1.5 },
    },
  };

  const progressVariants = {
    hidden: {
      opacity: 0,
      // x: '-100vw'
    },
    visible: {
      opacity: 1,
      //   scale: [
      //     1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0, 2.1, 2.1, 2.2, 2.3,
      //     2.4, 2.5,
      //   ],
      //   scale: [1, 1.1, 1.2, 1.3, 1.4],
      transition: {
        type: 'tween',
        delay: 1.5,
        duration: 1.5,
        ease: 'easeOut',
      },
      scale: [1, 1.1, 1.2, 1.3],
    },
  };

  const progressBarVariants = {
    hidden: { width: '0%' },
    visible: (uploadOrDownloadCount) => ({
      width: `${uploadOrDownloadCount}%`,
      transition: { type: 'tween', ease: 'easeOut', duration: 1.5 },
    }),
  };

  useEffect(() => {
    if (uploadOrDownloadCount === 100) {
      setTimeout(() => {
        setShowLoader(false);
      }, 2000);
      //   onClick();
    }
  }, [uploadOrDownloadCount]);

  return (
    <>
      <AnimatePresence mode='wait'>
        {showLoader && (
          <motion.div
            variants={loaderVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            // exit={{ y: -100 }}
            className='loader flex flex-column justify-center items-center'
            style={{ width: '100vw', height: '100svh' }}
          >
            <motion.h1
              variants={progressVariants}
              //   initial='hidden'
              animate='visible'
              className='progress-value'
            >
              {uploadOrDownloadCount}%
            </motion.h1>
            <br />
            <motion.div
              className='progress-bar'
              variants={progressBarVariants}
              initial='hidden'
              animate='visible'
              custom={uploadOrDownloadCount}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Loader;

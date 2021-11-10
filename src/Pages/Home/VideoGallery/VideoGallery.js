import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { Card, Col, Button } from 'react-bootstrap';

const VideoGallery = () => {

    const videos = [
        {
            id: 1,
            videoUrl: "https://www.youtube.com/embed/qi8qre9FO18",
        },
        {
            id: 2,
            videoUrl: "https://www.youtube.com/embed/RCXGpEmFbOw",
        },
        {
            id: 3,
            videoUrl: "https://www.youtube.com/embed/5L6FSdUmEpg",
        }
    ];


    return (
        <div className="container mt-5 mb-5" id="services" style={{ maxWidth: '100vw' }}>
            <h5 className="text-start pt-5 mt-5 mb-1 text-primary">VIDEOS SHOT BY OUR DRONES</h5>
            <h1 className="text-start mb-5 text-dark">Showcase</h1>
            {<Row xs={1} md={3} className="gy-4">
                {
                    videos?.map(video => <Col key={video?.id}>
                        <Card className="bg-dark text-white h-100 card shadow  bg-body rounded" style={{ borderRadius: '15px' }}>

                            <iframe src={video?.videoUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ height: '400px', borderRadius: '15px' }}></iframe>


                        </Card>
                    </Col >)
                }
            </Row>}

        </div >
    );
};

export default VideoGallery;
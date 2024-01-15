import React from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './MapView.css';
import { motion } from 'framer-motion';

const MapView = () => {
  return (
    <div className='container mt-5' id='map-view' style={{ maxWidth: '100vw' }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {' '}
        <Row>
          <Col>
            <MapContainer
              center={[23.86875743752158, 90.38022457916789]}
              zoom={13}
              scrollWheelZoom={false}
              whenCreated={(map) => {
                setTimeout(() => map.invalidateSize(), 100);
              }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              />
              <Marker position={[23.86875743752158, 90.38022457916789]}>
                <Popup>
                  <div>
                    <h2>Priyanka City</h2>
                    <p>Uttara Sector-12, Dhaka-1230</p>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </Col>
        </Row>
      </motion.div>
    </div>
  );
};

export default MapView;

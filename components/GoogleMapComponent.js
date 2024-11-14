import React from 'react';

const GoogleMapComponent = () => {
  return (
    <iframe
      width="80%"
      height="600"
      style={{ border: 0, borderRadius:15 }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBGM4Yg3SrswevROwh5wWlvi2isuXqeAeU&q=-6.591831887585396, 106.80680873492207"
    ></iframe>
  );
};

export default GoogleMapComponent;

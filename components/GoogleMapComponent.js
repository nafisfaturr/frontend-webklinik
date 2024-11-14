import React, { useEffect } from 'react';

const GoogleMapComponent = () => {
  useEffect(() => {
    // Make sure the script is loaded before initializing the map
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBGM4Yg3SrswevROwh5wWlvi2isuXqeAeU&callback=initMap`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (typeof window !== 'undefined') {
        // Initialize the map after the script has loaded
        window.initMap = () => {
          const map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: -6.591939198058985, lng: 106.80684396192702 },
            zoom: 8,
          });

          // Add a marker at a specific location
          const marker = new window.google.maps.Marker({
            position: { lat: -6.591939198058985, lng: 106.80684396192702 },
            map: map,
            title: 'My Marker', // Optional title for the marker
          });
        };
      }
    };
    document.head.appendChild(script);

    // Clean up the script when the component is unmounted
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div id="map" style={{ height: '500px', width: '100%',  borderRadius: '15px' }}></div>
  );
};

export default GoogleMapComponent;

import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import SensorData from './SensorData';
import ChlorineSensor from './ChlorineSensor';
import BacteriaSensor from './BacteriaSensor';
import SilverSensor from './SilverSensor';
import './App.css';

const containerStyle = {
  width: '100%',  // Full width
  height: '40vh',  // Half of the viewport height
};

function App() {
  const [activePage, setActivePage] = useState(null);
  const [location, setLocation] = useState(null);

  // Use Geolocation API to get user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location: ", error);
          setLocation({
            lat: -3.745,
            lng: -38.523,
          }); // Default location
        }
      );
    } else {
      // Fallback if geolocation is not supported
      setLocation({
        lat: -3.745,
        lng: -38.523,
      });
    }
  }, []);

  const handleToggle = (page) => {
    setActivePage(activePage === page ? null : page);
  };

  return (
    <div className="app-container flex flex-col min-h-screen">
      <header className="app-header bg-primary text-white p-4 shadow-lg">
        <h1 className="text-3xl font-bold text-center">AQUA REGIMENT</h1>
      </header>
      <main className="app-main flex-grow p-4 flex flex-col items-center">
        <SensorData />
        <div className="animated-image-container flex justify-center items-center mt-8">
          <img src="" alt="" className="animated-image w-48 h-auto mx-4 transition-transform duration-300 ease-in-out hover:scale-105" />
          <img src="" alt="" className="animated-image w-48 h-auto mx-4 transition-transform duration-300 ease-in-out hover:scale-105" />
        </div>
        <div className="button-container mt-8">
          <button onClick={() => handleToggle('chlorine')} className="btn">
            {activePage === 'chlorine' ? 'Close Chlorine Sensor' : 'Chlorine Sensor'}
          </button>
          <button onClick={() => handleToggle('bacteria')} className="btn">
            {activePage === 'bacteria' ? 'Close Bacteria Sensor' : 'Bacteria Sensor'}
          </button>
          <button onClick={() => handleToggle('silver')} className="btn">
            {activePage === 'silver' ? 'Close Silver Sensor' : 'Silver Sensor'}
          </button>
        </div>
        <div className="sensor-details mt-8">
          {activePage === 'chlorine' && <ChlorineSensor />}
          {activePage === 'bacteria' && <BacteriaSensor />}
          {activePage === 'silver' && <SilverSensor />}
        </div>

        {/* Map Integration */}
        <div className="map-container mt-8" style={{ width: '100%', marginBottom: '2rem' }}>
          {location ? (
            <LoadScript googleMapsApiKey="AIzaSyDH2fVK46AHZ3U6p7x7xcm7qNAeLtGD5UY">
              <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={12}>
                <Marker position={location} />
              </GoogleMap>
            </LoadScript>
          ) : (
            <p>Loading map...</p>
          )}
        </div>
      </main>
      <footer className="app-footer bg-primary text-white p-4 border-t border-dark">
  <p className="text-center text-sm">&copy; 2024 Aqua Regiment. All rights reserved.</p>
  <div className="social-media-icons flex justify-center space-x-4 mt-2">
    <a
      href="https://facebook.com"
      target="https://www.facebook.com/"
      rel="noopener noreferrer"
      aria-label="Facebook"
      className="text-white text-xl transition-transform duration-300 ease-in-out hover:scale-125"
    >
      <i className="fab fa-facebook-f"></i>
    </a>
    <a
      href="https://twitter.com"
      target="https://www.facebook.com/"
      rel="noopener noreferrer"
      aria-label="Twitter"
      className="text-white text-xl transition-transform duration-300 ease-in-out hover:scale-125"
    >
      <i className="fab fa-twitter"></i>
    </a>
    <a
      href="https://instagram.com"
      target="https://www.facebook.com/"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="text-white text-xl transition-transform duration-300 ease-in-out hover:scale-125"
    >
      <i className="fab fa-instagram"></i>
    </a>
    <a
      href="https://linkedin.com"
      target="https://www.facebook.com/"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="text-white text-xl transition-transform duration-300 ease-in-out hover:scale-125"
    >
      <i className="fab fa-linkedin-in"></i>
    </a>
  </div>
</footer>

    </div>
  );
}

export default App;

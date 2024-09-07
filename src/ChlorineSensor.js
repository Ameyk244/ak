import React from 'react';

function ChlorineSensor() {
  return (
    <div className="sensor-page container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Chlorine Sensor Details</h2>
      <p className="text-lg mb-4">
        The Chlorine Sensor is designed to measure the concentration of chlorine in various solutions. It operates using electrochemical principles to detect chlorine levels, providing accurate and reliable readings.
      </p>
      <h3 className="text-2xl font-semibold mb-2">Working Principle</h3>
      <p className="mb-4">
        The sensor uses a working electrode and a reference electrode to measure the amount of chlorine. When chlorine is present, it reacts at the working electrode, generating a current proportional to the chlorine concentration.
      </p>
      <h3 className="text-2xl font-semibold mb-2">Applications</h3>
      <p>
        This sensor is commonly used in water treatment facilities, swimming pools, and environmental monitoring to ensure safe chlorine levels.
      </p>
    </div>
  );
}

export default ChlorineSensor;

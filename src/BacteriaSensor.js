import React from 'react';

function BacteriaSensor() {
  return (
    <div className="sensor-page container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Bacteria Sensor Details</h2>
      <p className="text-lg mb-4">
        The Bacteria Sensor is designed to detect the presence of bacteria in various samples. It employs a biosensor mechanism to identify bacterial contamination.
      </p>
      <h3 className="text-2xl font-semibold mb-2">Working Principle</h3>
      <p className="mb-4">
        This sensor uses biological elements to interact with bacterial cells, producing a measurable signal in response to bacterial presence. The signal is analyzed to determine the concentration of bacteria.
      </p>
      <h3 className="text-2xl font-semibold mb-2">Applications</h3>
      <p>
        Used in water quality testing, food safety, and healthcare to monitor and prevent bacterial contamination.
      </p>
    </div>
  );
}

export default BacteriaSensor;

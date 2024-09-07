import React from 'react';

function SilverSensor() {
  return (
    <div className="sensor-page container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Silver Sensor Details</h2>
      <p className="text-lg mb-4">
        The Silver Sensor measures silver ion concentration in solutions. It uses electrochemical techniques to deliver precise and accurate measurements.
      </p>
      <h3 className="text-2xl font-semibold mb-2">Working Principle</h3>
      <p className="mb-4">
        The sensor operates with a working electrode that interacts with silver ions in the sample. The resulting current is proportional to the concentration of silver ions.
      </p>
      <h3 className="text-2xl font-semibold mb-2">Applications</h3>
      <p>
        Ideal for applications in water treatment, industrial processes, and environmental monitoring where silver levels need to be controlled.
      </p>
    </div>
  );
}

export default SilverSensor;

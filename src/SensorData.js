import React, { useState, useEffect } from 'react';
import './SensorData.css';

const SensorData = () => {
  const [data, setData] = useState({
    chlorine: 0,
    silver: 0,
    bacteria: 0,
  });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        const newData = {
          chlorine: (Math.random() * 5).toFixed(2),
          silver: (Math.random() * 5).toFixed(2),
          bacteria: (Math.random() * 100).toFixed(2),
        };
        setData(newData);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setData({
      chlorine: 0,
      silver: 0,
      bacteria: 0,
    });
  };

  return (
    <div className="sensor-data-container">
      <h2>Real-time Sensor Data</h2>
      <div className="data-cards">
        <div className="data-card">
          <h3>Chlorine</h3>
          <p>{data.chlorine} ppm</p>
        </div>
        <div className="data-card">
          <h3>Silver</h3>
          <p>{data.silver} ppm</p>
        </div>
        <div className="data-card">
          <h3>Bacteria</h3>
          <p>{data.bacteria} CFU/mL</p>
        </div>
      </div>
      <div className="control-buttons">
        <button onClick={handleStart} disabled={isRunning}>Start</button>
        <button onClick={handleStop} disabled={!isRunning}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
     
<div className="animated-image-container">
<img src="" alt="" className="animated-image" />
<img src="" alt="" className="animated-image" />
<img src="" alt="" className="animated-image" />
</div>
    </div>
  );
};

export default SensorData;




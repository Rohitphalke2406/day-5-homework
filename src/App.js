import React, { useState, useEffect } from 'react';
import './App.css';

const Progress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(prevProgress => prevProgress + 1);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="container">
      <div className="bar">
        <div className="progress" style={{ width: `${progress}%` }} />
      </div>
      <div className="status">{progress < 100 ? "Loading..." : "Completed!!!"}</div>
      <div className="text">{progress}%</div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <h1>Progress Bar</h1>
      <Progress />
    </div>
  );
};

export default App;

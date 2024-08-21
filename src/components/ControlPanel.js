import React from 'react';

// ControlPanel component to render the control buttons
const ControlPanel = ({ moveForward, rotateLeft, rotateRight }) => {
  return (
    <div className="controls">
      <button onClick={moveForward}>Move Forward</button>
      <button onClick={rotateLeft}>Rotate Left</button>
      <button onClick={rotateRight}>Rotate Right</button>
    </div>
  );
};

export default ControlPanel;
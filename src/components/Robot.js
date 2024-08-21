import React from 'react';

// Robot component to render the robot on the grid
const Robot = ({ x, y, direction, sizeOfGrid, getRotation }) => {
  return (
    <div className="grid">
      {[...Array(sizeOfGrid)].map((_, row) => (
        <div key={row} className="row">
          {[...Array(sizeOfGrid)].map((_, col) => (
            <div key={col} className={`cell ${x === col && y === row ? 'robot' : ''}`}>
              {x === col && y === row ? (
                <img
                  src={process.env.PUBLIC_URL + '/assets/bellroy-logo.png'}
                  alt="Robot"
                  className="robot-logo"
                  style={{ transform: getRotation(direction) }}
                />
              ) : ''}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Robot;
import React, { useState } from 'react';
import './App.css';

const directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

// Size of the grid
let sizeOfGrid = 5;

// Initial facing state of the robot (x, y, direction)
const initialRobotState = {
  x: Math.floor(sizeOfGrid / 2),
  y: Math.floor(sizeOfGrid / 2),
  direction: 'SOUTH'
};

// Main component
function App() {
  const [robot, setRobot] = useState(initialRobotState);

  // Function to move the robot forward
  const moveForward = () => {
    setRobot(prevState => {
      let { x, y, direction } = prevState;
      switch (direction) {
        case 'SOUTH':
          y = y < sizeOfGrid - 1 ? y + 1 : y; // Increment y if it's within the grid bounds
          break;
        case 'EAST':
          x = x < sizeOfGrid - 1 ? x + 1 : x; // Increment x if it's within the grid bounds
          break;
        case 'NORTH':
          y = y > 0 ? y - 1 : y; // Decrement y if it's within the grid bounds
          break;
        case 'WEST':
          x = x > 0 ? x - 1 : x; // Decrement x if it's within the grid bounds
          break;
        default:
          break;
      }
      return { ...prevState, x, y };
    });
  };

  // Function to rotate the robot to the left (from the user's perspective)
  const rotateLeft = () => {
    setRobot(prevState => {
      const newDirectionIndex = (directions.indexOf(prevState.direction) + 1) % 4; // Calculate the new direction index by incrementing the current direction index
      return { ...prevState, direction: directions[newDirectionIndex] }; // Update the direction of the robot
    });
  };

  // Function to rotate the robot to the right (from the user's perspective)
  const rotateRight = () => {
    setRobot(prevState => {
      const newDirectionIndex = (directions.indexOf(prevState.direction) + 3) % 4; // Calculate the new direction index by decrementing the current direction index
      return { ...prevState, direction: directions[newDirectionIndex] }; // Update the direction of the robot
    });
  };

  // Function to get the rotation style based on the robot's direction
  const getRotation = (direction) => {
    switch (direction) {
      case 'SOUTH':
        return 'rotate(0deg)'; // No rotation for SOUTH direction
      case 'WEST':
        return 'rotate(90deg)'; // Rotate 90 degrees for WEST direction
      case 'NORTH':
        return 'rotate(180deg)'; // Rotate 180 degrees for NORTH direction
      case 'EAST':
        return 'rotate(-90deg)'; // Rotate -90 degrees for EAST direction
      default:
        return 'rotate(0deg)'; // Default rotation is 0 degrees
    }
  };

  return (
    <div className="App">
      <div className='heading'>
        <h1 className="title">bellroy-bot</h1>
        <span className="span">bellroy-bot moves forward in the direction it's facing.</span>
      </div>
      <div className="grid">
        {[...Array(sizeOfGrid)].map((_, row) => (
          <div key={row} className="row">
            {[...Array(sizeOfGrid)].map((_, col) => (
              <div key={col} className={`cell ${robot.x === col && robot.y === row ? 'robot' : ''}`}>
                {robot.x === col && robot.y === row ? (
                  <img
                    src={process.env.PUBLIC_URL + '/assets/bellroy-logo.png'}
                    alt="Robot"
                    className="robot-logo"
                    style={{ transform: getRotation(robot.direction) }}
                  />
                ) : ''}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={moveForward}>Move Forward</button>
        <button onClick={rotateLeft}>Rotate Left</button>
        <button onClick={rotateRight}>Rotate Right</button>
      </div>
    </div>
  );
}

export default App;

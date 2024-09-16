import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Robot from './components/Robot';
import ControlPanel from './components/ControlPanel';
import { directions, sizeOfGrid, initialRobotState, getRotation } from './utils/robotUtils';

// Main App component
function App() {
  const [robot, setRobot] = useState(initialRobotState);

  // Function to move the robot forward
  const moveForward = () => {
    setRobot(prevState => {
      let { x, y, direction } = prevState;
      switch (direction) {
        case 'SOUTH':
          y = y < sizeOfGrid - 1 ? y + 1 : y;
          break;
        case 'EAST':
          x = x < sizeOfGrid - 1 ? x + 1 : x;
          break;
        case 'NORTH':
          y = y > 0 ? y - 1 : y;
          break;
        case 'WEST':
          x = x > 0 ? x - 1 : x;
          break;
        default:
          break;
      }
      return { ...prevState, x, y };
    });
  };

  // Function to rotate the robot to the left
  const rotateLeft = () => {
    setRobot(prevState => {
      const newDirectionIndex = (directions.indexOf(prevState.direction) + 1) % 4;
      return { ...prevState, direction: directions[newDirectionIndex] };
    });
  };

  // Function to rotate the robot to the right
  const rotateRight = () => {
    setRobot(prevState => {
      const newDirectionIndex = (directions.indexOf(prevState.direction) + 3) % 4;
      return { ...prevState, direction: directions[newDirectionIndex] };
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className='heading'>
        <h1 className="title">owl-bot</h1>
        <span className="span">owl-bot moves forward in the direction it's facing.</span>
      </div>
      <Robot x={robot.x} y={robot.y} direction={robot.direction} sizeOfGrid={sizeOfGrid} getRotation={getRotation} />
      <ControlPanel moveForward={moveForward} rotateLeft={rotateLeft} rotateRight={rotateRight} />
    </div>
  );
}

export default App;
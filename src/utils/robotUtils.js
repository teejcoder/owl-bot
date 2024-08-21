// Array of possible directions
export const directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

// Size of the grid
export const sizeOfGrid = 5;

// Initial state of the robot
export const initialRobotState = {
  x: Math.floor(sizeOfGrid / 2),
  y: Math.floor(sizeOfGrid / 2),
  direction: 'SOUTH'
};

// Function to get the rotation style based on the robot's direction
export const getRotation = (direction) => {
  switch (direction) {
    case 'SOUTH':
      return 'rotate(0deg)';
    case 'WEST':
      return 'rotate(90deg)';
    case 'NORTH':
      return 'rotate(180deg)';
    case 'EAST':
      return 'rotate(-90deg)';
    default:
      return 'rotate(0deg)';
  }
};
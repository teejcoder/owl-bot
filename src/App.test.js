import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import App from './App';

describe('Robot Simulator', () => {
  test('renders the initial state correctly', () => {
    render(<App />);
    const robotElement = screen.getByAltText('Robot');
    expect(robotElement).toBeInTheDocument();
    expect(robotElement).toHaveStyle('transform: rotate(0deg)'); // Check if the robot is initially rotated at 0 degrees
  });

  test('moves the robot forward', () => {
    render(<App />);
    const moveButton = screen.getByText('Move Forward');
    act(() => {
      fireEvent.click(moveButton);
    });
    const robotElement = screen.getByAltText('Robot');
    // After moving forward, the robot should be at (2, 3)
    expect(robotElement.parentElement).toHaveClass('cell'); // Check if the robot is inside a cell element
    expect(robotElement).toHaveStyle('transform: rotate(0deg)'); // Check if the robot is still rotated at 0 degrees
  });

  test('rotates the robot to the left', () => {
    render(<App />);
    const rotateLeftButton = screen.getByText('Rotate Left');
    act(() => {
      fireEvent.click(rotateLeftButton);
    });
    const robotElement = screen.getByAltText('Robot');
    // After rotating left, the robot should face EAST (90 degrees)
    expect(robotElement).toHaveStyle('transform: rotate(90deg)'); // Check if the robot is rotated at 90 degrees
  });

  test('rotates the robot to the right', () => {
    render(<App />);
    const rotateRightButton = screen.getByText('Rotate Right');
    act(() => {
      fireEvent.click(rotateRightButton);
    });
    const robotElement = screen.getByAltText('Robot');
    // After rotating right, the robot should face WEST (-90 degrees)
    expect(robotElement).toHaveStyle('transform: rotate(-90deg)'); // Check if the robot is rotated at -90 degrees
  });
});

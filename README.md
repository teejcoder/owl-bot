# Bellroy Bot

bellroy-bot is a coding challenge project that simulates a robot moving on a grid. The robot can move forward and rotate left or right based on user inputs.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Styling](#styling)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with bellroy-bot, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/teejcoder/tristanxbellroy.git
    cd bellroy-bot
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Start the development server**:
    ```sh
    npm start
    ```

The application will be available at `http://localhost:3000`.

## Usage

Once the application is running, you can control the robot using the buttons provided:

- **Move Forward**: Moves the robot one step in the direction it is currently facing.
- **Rotate Left**: Rotates the robot 90 degrees to the left.
- **Rotate Right**: Rotates the robot 90 degrees to the right.

## Project Structure

The project structure is as follows:


- **public/**: Contains static assets such as fonts and the main HTML file.
- **src/**: Contains the source code for the application.
  - **App.js**: The main React component.
  - **App.css**: The main stylesheet for the application.


## Styling

The application uses custom fonts and styles defined in the `App.css` file. The custom font is loaded from the `/public/fonts` directory.

## Tests

To run tests for the Bellroy Bot project, follow these steps:

1. **Run the tests**:
    ```sh
    npm test
    ```

This will execute the test suite and provide feedback on the functionality of the application.

## License
MIT License
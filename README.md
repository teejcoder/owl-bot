# Bellroy Bot

bellroy-bot simulates moving a robot on a grid. The robot moves forwards in the direction it is facing, and rotates in place to face any direction. 

- [Click this link to visit bellroy-bot](https://bellroybot.netlify.app/)

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

The application will be available at `https://bellroybot.netlify.app/`.

## Usage

Once the application is running/website has loaded, you can control the robot using the buttons provided:

- **Move Forward**: Moves the robot one step in the direction it is currently facing.
- **Rotate Left**: Rotates the robot 90 degrees to the left.
- **Rotate Right**: Rotates the robot 90 degrees to the right.

## Project Structure

The project structure is as follows:

├── README.md
├── build
├── node_modules
├── package-lock.json
├── package.json
├── public
│   ├── assets
│   │   └── bellroy-logo.png
│   ├── favicons-1.png
│   ├── favicons-2.png
│   ├── favicons-3.png
│   ├── favicons-4.png
│   ├── favicons-5.png
│   ├── favicons.png
│   ├── fonts
│   │   ├── GT-Ultra-Standard-Bold-CCwFnZiM.woff2
│   │   ├── GT-Ultra-Standard-Light-C2GXzpoN.woff2
│   │   ├── GT-Ultra-Standard-Regular-C_MQ3v_2.woff2
│   │   └── GT-Ultra-Standard-Ultra-DK9CrWz0.woff2
│   └── index.html
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── components
    │   ├── ControlPanel.js
    │   ├── Navbar.js
    │   └── Robot.js
    ├── index.css
    ├── index.js
    └── utils
        └── robotUtils.js

## Styling

The application uses custom fonts and styles defined in the `App.css` file. The custom font is loaded from the `/public/fonts` directory.

## Testing

To run tests for the Bellroy Bot project, follow these steps:

1. **Run the tests**:
    ```sh
    npm test
    ```

This will execute the test suite and provide feedback on the functionality of the application.

## License
MIT License

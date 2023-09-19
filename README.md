

# Calculator App

This project consists of a simple calculator app implemented in two different versions: one that mimics the behavior of the iOS calculator and another that follows a more standard calculator behavior. Below, you'll find information about each version of the app.

## Demo

https://github.com/joaquim25/Calculator-app/assets/115705731/25ab3c9e-3ed0-472e-b24b-d140f7ce024b

# iOS Version

The iOS-inspired calculator version of the app provides a simple calculator experience with the following features:

### Arithmetic Operations

- Addition (+)
- Subtraction (-)
- Multiplication (*)
- Division (/)

### Additional Operations

- Clear (C): Resets the calculator.
- Change Sign (+/-): Toggles the sign of the displayed value.
- Percentage (%): Converts the displayed value to a percentage.
- Decimal Point (.): Adds a decimal point to the displayed value if not already present.

### Usage

- Enter numbers and perform calculations using the provided buttons.
- Use the "=" button to calculate the result of the expression.

### Components

- `App.jsx`: The main component that manages the calculator's logic and state.
- `Output.jsx`: Displays the calculator's output.
- `Buttons.jsx`: Provides the buttons for input and operation selection.

# Standard Version

The standard calculator version of the app follows a more traditional calculator behavior, supporting:

### Arithmetic Operations

- Addition (+)
- Subtraction (-)
- Multiplication (*)
- Division (/)

### Additional Operations

- Clear (C): Resets the calculator.
- Parentheses ( and ): Allows the use of parentheses for complex expressions.
- Decimal Point (.): Adds a decimal point to the expression.

### Usage

- Enter an expression using the provided buttons, including parentheses for grouping.
- Use the "=" button to calculate the result of the expression.
- The calculator supports order of operations (PEMDAS) and handles complex expressions.

### Components

- `App.jsx`: The main component responsible for managing the calculator's logic and state.
- `Output.jsx`: Displays the calculator's output.
- `Buttons.jsx`: Provides the buttons for input and operation selection.

## Getting Started

To run either version of the calculator locally:

1. Clone the repository to your local machine:

   ```
   https://github.com/joaquim25/Calculator-app.git
   ```

2. Navigate to the project directory:

   ```
   cd Calculator-app/Calculator-simple --or-- cd Calculator-app/Calculator-iOS
   ```

3. Install the required dependencies:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm start
   ```

The app should now be accessible in your web browser.

## Usage

- Launch the calculator in your web browser.
- Use the provided buttons to enter numbers and perform calculations.
- For the iOS version, follow the instructions outlined in the iOS-inspired section.
- For the standard version, input complex expressions and use parentheses as needed for grouping.

## Author
Joaquim Luzia

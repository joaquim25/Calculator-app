import { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Output from "./components/Output";

// Function to perform arithmetic operations
const resolveExpression = (operand1, operand2, operator) => {
  switch (operator) {
    case "+":
      return operand1 + operand2;
    case "-":
      return operand1 - operand2;
    case "*":
      return operand1 * operand2;
    case "/":
      return operand1 / operand2;
    default:
      return operand2;
  }
};

function App() {
  const [displayValue, setDisplayValue] = useState("0"); //state for value being displayed
  const [prevValue, setPrevValue] = useState(null); //state for previous value (value not being displayed)
  const [operator, setOperator] = useState(null); //state that tracks current operator
  const [expectingOperand, setExpectingOperand] = useState(true); //flag that checks if an operand is yet expected

  // Function to clear the calculator
  const clearCalculator = () => {
    setDisplayValue("0");
    setPrevValue(null);
    setOperator(null);
    setExpectingOperand(true);
  };

  // Function to calculate and display the result
  const calculateResult = () => {
    const result = resolveExpression(
      prevValue,
      parseFloat(displayValue),
      operator
    );
    setDisplayValue(result.toString());
    setPrevValue(null);
    setOperator(null);
    setExpectingOperand(false);
  };

  // Handle the buttons input
  const handleInput = (inputValue) => {
    switch (inputValue) {
      case "C":
        clearCalculator();
        break;
      case "=":
        // Calculate and display the result if app has both operands and operator
        if (prevValue && operator && !expectingOperand) {
          calculateResult();
        }
        break;
      case "+/-":
        setDisplayValue(displayValue * -1);
        break;
      case "%":
        setDisplayValue(displayValue / 100);
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        if (prevValue !== null) {
          //If has prevValue
          const result = resolveExpression(
            prevValue,
            parseFloat(displayValue),
            operator
          );
          setDisplayValue(parseFloat(result)); //display that result
          setPrevValue(result); //store that result in the prevValue
        } else {
          //If no prevValue
          setPrevValue(parseFloat(displayValue)); //store current value in prevValue
        }
        setOperator(inputValue); //store the operator
        setExpectingOperand(true); //toggle the expecting operand flag
        break;
      case ".":
        if (!displayValue.includes(".")) {
          //only adds decimal point if none exists in the current number
          setDisplayValue(displayValue + ".");
        }
        break;
      default:
        //Deals with the number buttons
        if (expectingOperand) {
          //start of number input
          setDisplayValue(inputValue);
          setExpectingOperand(false);
        } else {
          //middle of number input
          if (displayValue === "0" || displayValue === "-0") {
            //replace the 0's
            setDisplayValue(inputValue);
          } else {
            setDisplayValue(displayValue + inputValue);
          }
        }
        break;
    }
  };

  return (
    <div className="container">
      <Output displayValue={displayValue} />
      <Buttons handleInput={handleInput} activeOperator={operator} />
    </div>
  );
}

export default App;

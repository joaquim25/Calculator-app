import { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Output from "./components/Output";

// Calculate the result of the given expression
const calculateResult = (expr) => {
  // Stacks
  const operators = [];
  const operands = [];

  const precedence = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
  };

  // Helper function to check for negative numbers
  const isNegativeNumber = (char, i) => {
    if (char === "-" && (i === 0 || (i > 0 && "+-*/(".includes(expr[i - 1])))) {
      return true;
    }
    return false;
  };

  // Function that applys an operator on the operands.
  const applyOperator = () => {
    const operator = operators.pop();
    const rightOperand = operands.pop();
    const leftOperand = operands.pop();

    switch (operator) {
      case "+":
        operands.push(leftOperand + rightOperand);
        break;
      case "-":
        operands.push(leftOperand - rightOperand);
        break;
      case "*":
        operands.push(leftOperand * rightOperand);
        break;
      case "/":
        if (rightOperand === 0) {
          return "Sorry, you cannot divide by zero";
        }
        operands.push(leftOperand / rightOperand);
        break;
    }
  };

  // Loop through each character in the expression ---------
  for (let i = 0; i < expr.length; i++) {
    const char = expr[i];

    // Checks if the character is a simple digit or part of a negative number.
    if ((char >= "0" && char <= "9") || isNegativeNumber(char, i)) {
      let numStr = char;
      // If there are more digits or a decimal point, continue building the number string.
      while (
        i + 1 < expr.length &&
        ((expr[i + 1] >= "0" && expr[i + 1] <= "9") || expr[i + 1] === ".")
      ) {
        numStr += expr[i + 1];
        i++;
      }
      // Push the number to the operands stack.
      operands.push(parseFloat(numStr));

      // Handle opening parentheses
    } else if (char === "(") {
      // If dealing with an implicit multiplication, insert a multiplication operator.
      if (i > 0 && expr[i - 1] >= "0" && expr[i - 1] <= "9") {
        operators.push("*");
      }
      // Push the "(" to the operators stack.
      operators.push(char);

      // Handle closing parentheses
    } else if (char === ")") {
      // Applies operators until an opening parenthesis is encountered.
      while (operators.length && operators[operators.length - 1] !== "(") {
        applyOperator();
      }

      // Remove the "(" from the operators stack when found
      if (operators.length && operators[operators.length - 1] === "(") {
        operators.pop();
      }

      // Handle operators
    } else if (char === "+" || "-" || "*" || "/") {
      // Apply operators with higher precedence
      while (
        operators.length &&
        precedence[char] <= precedence[operators[operators.length - 1]]
      ) {
        applyOperator();
      }

      // Push the current operator.
      operators.push(char);
    }
  }

  // Apply any remaining operators.
  while (operators.length) {
    applyOperator();
  }

  //Return final result or error message
  if (operands.length === 1 && !isNaN(operands[0])) {
    return operands[0];
  } else {
    return " Sorry, invalid expression";
  }
};

function App() {
  const [expression, setExpression] = useState("");
  const [lastExpression, setLastExpression] = useState("");

  // Handle the buttons input
  const handleInput = (inputValue) => {
    switch (inputValue) {
      case "C":
        setExpression("");
        setLastExpression("");
        break;
      case "=":
        const result = calculateResult(expression);
        setExpression(result.toString());
        setLastExpression(expression);
        break;
      default:
        setExpression((prevExpression) => prevExpression + inputValue);
        break;
    }
  };

  return (
    <div className="container">
      <Output lastExpression={lastExpression} displayValue={expression} />
      <Buttons handleInput={handleInput} />
    </div>
  );
}

export default App;

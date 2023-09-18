import { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Output from "./components/Output";

// Calculate the result of the given expression
const calculateResult = (expr) => {
  const operators = [];
  const operands = [];

  //Determine the order of operations
  const precedence = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
  };

  // Apply operators to operands according to their precedence
  const applyOperator = () => {
    // get hold of the the last operator in the stack
    // and the last 2 operands in their respective stacks
    const operator = operators.pop();
    const rightOperand = operands.pop();
    const leftOperand = operands.pop();

    //Perform the corresponding operation and push that result back to the operands
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
          alert("You cannot divide by zero");
        }
        operands.push(leftOperand / rightOperand);
        break;
    }
  };

  //Iterate through each character of the expression
  for (let i = 0; i < expr.length; i++) {
    const char = expr[i]; //current char

    // ------- If char is a digit -------
    if (char >= "0" && char <= "9") {
      let numStr = char; //start numStr with the current digit
      //Check for consecutive digits or decimal point and concatenates it to numStr
      while (
        i + 1 < expr.length &&
        ((expr[i + 1] >= "0" && expr[i + 1] <= "9") || expr[i + 1] === ".")
      ) {
        numStr += expr[i + 1];
        i++;
      }
      //when it is done, convert the numStr to a floating number and add it to operands array
      operands.push(parseFloat(numStr));

      // ------- If char is an opening bracket -------
    } else if (char === "(") {
      // If the char before the "(" is a number, add an "*" into the operands
      if (i > 0 && expr[i - 1] >= "0" && expr[i - 1] <= "9") {
        operators.push("*");
      }
      operators.push(char); //add the char to operators array

      // ------- If char is a closing bracket -------
    } else if (char === ")") {
      //if the previous operator is not an openning bracket, apply those operators that sit in between
      while (operators.length && operators[operators.length - 1] !== "(") {
        applyOperator();
      }
      //when there's nothing between the opening bracket and the closing bracket,
      //remove the opening bracket from the operators array
      if (operators.length && operators[operators.length - 1] === "(") {
        operators.pop(); // Pop the '('
      }

      // ------- If char is ( + || - || * || / ) -------
    } else if (["+", "-", "*", "/"].includes(char)) {
      //compare the operators (precedence) inside operators array and apply them to the operands
      while (
        operators.length &&
        precedence[char] <= precedence[operators[operators.length - 1]]
      ) {
        applyOperator();
      }

      operators.push(char);
    }
  }

  // recursively calls the functions if operators array has value
  while (operators.length) {
    applyOperator();
  }

  //When there's only 1 operand left, return the result
  if (operands.length === 1) {
    return operands[0];
  } else {
    alert("Invalid expression");
  }
};

function App() {
  const [expression, setExpression] = useState("");

  // Handle the buttons input
  const handleInput = (inputValue) => {
    switch (inputValue) {
      case "C":
        setExpression("");
        break;
      case "=":
        const result = calculateResult(expression);
        setExpression(result.toString());
        break;
      default:
        setExpression((prevExpression) => prevExpression + inputValue);
        break;
    }
  };

  return (
    <div className="container">
      <Output displayValue={expression} />
      <Buttons handleInput={handleInput} />
    </div>
  );
}

export default App;

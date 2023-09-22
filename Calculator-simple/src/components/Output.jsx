import { useEffect } from "react";
import "./Output.css";
import fitty from "fitty";

const Output = ({ displayValue, lastExpression }) => {
  useEffect(() => {
    let responsive = fitty("#output__text", {minSize: 12, maxSize: 70});
    responsive[0].fit();
  });

  return (
    <div className="output">
      <p id="output__text">{displayValue ? displayValue : "0"}</p>
      <p className="output__lastExpression">{lastExpression && lastExpression}</p>
    </div>
  );
};

export default Output;

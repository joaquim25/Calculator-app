import "./Output.css";

const Output = ({ displayValue }) => {
  return (
    <div className="output">
      <p className="output__text">{displayValue ? displayValue : "0"}</p>
    </div>
  );
};

export default Output;

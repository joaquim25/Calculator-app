import Button from "./Button";
import "./Buttons.css";

const keyboard = [
  { value: "C", type: "sec-op" },
  { value: "(", type: "sec-op" },
  { value: ")", type: "sec-op" },
  { value: "/", appearance: "÷", type: "prim-op" },
  { value: "7", type: "number" },
  { value: "8", type: "number" },
  { value: "9", type: "number" },
  { value: "*", appearance: "x", type: "prim-op" },
  { value: "4", type: "number" },
  { value: "5", type: "number" },
  { value: "6", type: "number" },
  { value: "-", type: "prim-op" },
  { value: "1", type: "number" },
  { value: "2", type: "number" },
  { value: "3", type: "number" },
  { value: "+", type: "prim-op" },
  { value: "0", type: "null" },
  { value: ".", type: "number" },
  { value: "=", type: "prim-op" },
];

const Buttons = ({ handleInput }) => {
  return (
    <div className="keyboard">
      {keyboard.map((button) => {
        return (
          <Button
            key={button.value}
            value={button.value}
            type={button.type}
            appearance={button.appearance}
            handleInput={handleInput}
          />
        );
      })}
    </div>
  );
};

export default Buttons;

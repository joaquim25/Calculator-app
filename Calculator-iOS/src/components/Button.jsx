const Button = ({ handleInput, value, appearance, type, isActive }) => {
  const handleClick = () => {
    handleInput(value);
  };
  return (
    <>
      <button onClick={handleClick} className={isActive ? "active" : type}>
        {appearance ? appearance : value}
      </button>
    </>
  );
};

export default Button;

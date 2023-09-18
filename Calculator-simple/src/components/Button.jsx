const Button = ({ value, type, appearance, handleInput }) => {
  const handleClick = () => {
    handleInput(value);
  };

  return (
    <>
      <button onClick={handleClick} className={type}>
        {appearance ? appearance : value}
      </button>
    </>
  );
};

export default Button;

const Button = ({ handleClick, value = "Click Me", className = "" }) => {
  return (
    <button onClick={handleClick} className={className}>
      {value}
    </button>
  );
};

export default Button;

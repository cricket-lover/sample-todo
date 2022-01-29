import "./inputBox.css";

const InputBox = ({
  value = "",
  placeholder = "",
  handleKeyDown = () => {},
  handleChange = () => {},
  handleBlur = () => {},
  className = "",
}) => {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onKeyDown={handleKeyDown}
      onChange={handleChange}
      onBlur={handleBlur}
      className={className}
    />
  );
};

export default InputBox;

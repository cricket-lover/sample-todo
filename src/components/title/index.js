import { useState } from "react";
import "./title.css";

const Title = ({ title, updateTitle }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [value, setValue] = useState(title);

  const handleOnBlur = () => {
    setIsEditable(false);
    updateTitle(value);
  };

  return (
    <div>
      {isEditable ? (
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="title"
          onBlur={handleOnBlur}
        />
      ) : (
        <p onClick={() => setIsEditable(true)} className="title">
          {value}
        </p>
      )}
    </div>
  );
};

export default Title;

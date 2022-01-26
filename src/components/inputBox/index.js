import { useState } from "react";
import "./inputBox.css";

const InputBox = ({ onEnterPress, value = "" }) => {
  const [content, setContent] = useState("");

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      onEnterPress(content);
      setContent("");
    }
  };

  return (
    <input
      type="text"
      value={content}
      placeholder="Buy Vegetables"
      onKeyDown={(e) => handleKeyDown(e) && setContent("")}
      onChange={(e) => setContent(e.target.value)}
      className="task-input"
    />
  );
};

export default InputBox;

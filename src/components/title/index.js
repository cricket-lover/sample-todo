import { useState } from "react";
import editText from "../../icons/edit-text.png";
import save from "../../icons/diskette.png";
import "./title.css";

const Title = ({ title, updateTitle }) => {
  const [showIcons, setShowIcons] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [value, setValue] = useState(title);

  const handleBlur = () => {
    setIsEditable(false);
    updateTitle(value);
  };

  return (
    <div
      onMouseOver={() => setShowIcons(true)}
      onMouseLeave={() => setShowIcons(false)}
    >
      {isEditable ? (
        <div className="title-container">
          <p
            contentEditable={true}
            className="title"
            onChange={(e) => setValue(e.target.value)}
            suppressContentEditableWarning={true}
            onBlur={handleBlur}
          >
            {value}
          </p>
          <img
            onClick={() => setIsEditable(false)}
            src={save}
            alt="save-title"
            className={`edit-title-button ${showIcons ? "show" : "hidden"}`}
          />
        </div>
      ) : (
        <div className="title-container">
          <p onClick={() => setIsEditable(true)} className="title">
            {value}
          </p>
          <img
            onClick={() => setIsEditable(true)}
            src={editText}
            alt="edit-title"
            className={`edit-title-button ${showIcons ? "show" : "hidden"}`}
          />
        </div>
      )}
    </div>
  );
};

export default Title;

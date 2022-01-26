import { useState } from "react";
import "./task.css";

const Task = ({ task, handleClick, deleteTask, editTask }) => {
  const [showIcons, setShowIcons] = useState(false);
  const [value, setValue] = useState(task.content);
  const [isContentEditable, setIsContentEditable] = useState(false);

  return (
    <div
      className={`task ${task.status}`}
      key={task.id}
      onMouseOver={() => setShowIcons(true)}
      onMouseLeave={() => setShowIcons(false)}
    >
      <div className="checkbox"></div>
      {isContentEditable ? (
        <p
          className="content-editable"
          onChange={(e) => setValue(e.target.value)}
          suppressContentEditableWarning={true}
          contentEditable={isContentEditable}
          onBlur={() => {
            setIsContentEditable(false);
            editTask(task.id, value);
          }}
        >
          {task.content}
        </p>
      ) : (
        <p
          className="content"
          onClick={() => {
            handleClick(task.id, task.status);
          }}
        >
          {task.content}
        </p>
      )}
      <div
        className={`edit ${showIcons ? "show" : "hidden"}`}
        onClick={() => setIsContentEditable(true)}
      >
        E
      </div>
      <div
        className={`delete ${showIcons ? "show" : "hidden"}`}
        onClick={() => deleteTask(task.id)}
      >
        X
      </div>
    </div>
  );
};

export default Task;

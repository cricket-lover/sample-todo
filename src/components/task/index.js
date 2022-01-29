import { useState } from "react";
import bin from "../../icons/bin.png";
import editText from "../../icons/edit-text.png";
import save from "../../icons/diskette.png";
import "./task.css";

const Task = ({ task, handleClick, deleteTask, editTask }) => {
  const [showIcons, setShowIcons] = useState(false);
  const [value, setValue] = useState(task.content);
  const [isContentEditable, setIsContentEditable] = useState(false);

  const saveTask = () => {
    setIsContentEditable(false);
    editTask(task.id, value);
  };

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
          className="content"
          onChange={(e) => setValue(e.target.value)}
          suppressContentEditableWarning={true}
          contentEditable={isContentEditable}
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
      {isContentEditable ? (
        <img
          src={save}
          className={`edit ${showIcons ? "show" : "hidden"}`}
          onClick={saveTask}
          alt="save"
        />
      ) : (
        <img
          src={editText}
          className={`edit ${showIcons ? "show" : "hidden"}`}
          onClick={() => setIsContentEditable(true)}
          alt="edit"
        />
      )}
      <img
        src={bin}
        className={`delete ${showIcons ? "show" : "hidden"}`}
        onClick={() => deleteTask(task.id)}
        alt="delete"
      />
    </div>
  );
};

export default Task;

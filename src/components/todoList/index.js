import { useState } from "react";
import { InputBox, Todo } from "..";

import "./todoList.css";

const TodoList = () => {
  const [showErrorMsg, setShowErrorMsg] = useState(null);
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const addNewTodo = () => {
    if (value.trim() === "") {
      setShowErrorMsg(true);
      return;
    }
    const updatedTodos = todos.slice();
    const id = updatedTodos.length;
    updatedTodos.push({ title: value, tasks: [], id });
    setShowErrorMsg("");
    setTodos(updatedTodos);
    setValue("");
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      addNewTodo();
    }
  };

  const errorMsgDisplay = showErrorMsg ? "show" : "hidden";

  const todoList = todos.map((todo) => {
    return <Todo todo={todo} key={todo.id} />;
  });

  return (
    <div className="todoList-wrapper">
      <div className="todoList-inputBox-container">
        <div className="todoList-inputBox">
          <input
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setShowErrorMsg(false);
            }}
            onBlur={() => setShowErrorMsg(false)}
            placeholder="23rd Jan - Shopping"
            onKeyDown={handleKeyDown}
          />
          <button onClick={addNewTodo}>Add Todo</button>
        </div>
        <div className={errorMsgDisplay}>
          "Please provide a title to add your todo"
        </div>
      </div>
      <div className="todo-list">{todoList}</div>
    </div>
  );
};

export default TodoList;

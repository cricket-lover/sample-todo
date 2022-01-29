import { useState } from "react";
import { InputBox, Todo } from "..";
import addTodo from "../../icons/add.png";
import Button from "../utils/button";

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

  const handleChange = (e) => {
    setValue(e.target.value);
    setShowErrorMsg(false);
  };

  return (
    <div className="todoList-wrapper">
      <div className="todoList-inputBox-container">
        <InputBox
          value={value}
          handleChange={handleChange}
          handleBlur={() => setShowErrorMsg(false)}
          placeholder="23rd Jan - Shopping"
          handleKeyDown={handleKeyDown}
          className="todoList-inputBox"
        />
        <img
          src={addTodo}
          className="addTodo-button"
          onClick={addNewTodo}
          alt="Add Todo"
        />
        <div className={`error-msg ${errorMsgDisplay}`}>
          "Please provide a title to add your todo"
        </div>
      </div>
      <div className="todo-list">{todoList}</div>
    </div>
  );
};

export default TodoList;

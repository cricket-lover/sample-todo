import { useState } from "react";
import { TaskContainer, InputBox, Title } from "..";
import "./todo.css";

import statuses from "../../constants";

const Todo = function ({ todo }) {
  const [tasks, setTasks] = useState(todo.tasks);
  const [title, setTitle] = useState(todo.title);
  const [value, setValue] = useState("");

  const updateTaskStatus = (taskId, taskStatus) => {
    const updatedTasks = tasks.slice();
    const statusIndex =
      (statuses.findIndex((status) => status === taskStatus) + 1) % 3;
    const taskIndex = updatedTasks.findIndex((task) => task.id === taskId);
    updatedTasks[taskIndex].status = statuses[statusIndex];
    setTasks(updatedTasks);
  };

  const addNewTask = (content) => {
    const updatedTasks = tasks.slice();
    const id = updatedTasks.length;
    updatedTasks.push({ content, status: "todo", id });
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.slice();
    const index = updatedTasks.findIndex((task) => task.id === taskId);
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const editTask = (taskId, newTask) => {
    const updatedTasks = tasks.slice();
    const index = updatedTasks.findIndex((task) => task.id === taskId);
    updatedTasks[index].content = newTask;
    setTasks(updatedTasks);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      addNewTask(value);
      setValue("");
    }
  };

  return (
    <div className="container">
      <Title title={title.trim()} updateTitle={setTitle} />
      <InputBox
        value={value}
        placeholder="Buy Vegetables"
        handleKeyDown={handleKeyDown}
        handleChange={(e) => setValue(e.target.value)}
        className="todo-input"
      />
      {tasks.length === 0 ? (
        <p>
          <em>No tasks to show</em>
        </p>
      ) : (
        <TaskContainer
          tasks={tasks}
          updateTaskStatus={updateTaskStatus}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      )}
    </div>
  );
};

export default Todo;

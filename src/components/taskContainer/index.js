import { Task } from "..";

const TaskContainer = ({ tasks, updateTaskStatus, deleteTask, editTask }) => {
  const taskList = tasks.map((task) => {
    return (
      <Task
        key={task.id}
        task={task}
        handleClick={updateTaskStatus}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    );
  });
  return <div className="task-container">{taskList}</div>;
};

export default TaskContainer;

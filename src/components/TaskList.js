import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.text} // Using task.text as a unique key if no id is available
          text={task.text}
          category={task.category}
          onDelete={() => onDeleteTask(task.text)} // Pass text for deletion
        />
      ))}
    </div>
  );
}

export default TaskList;

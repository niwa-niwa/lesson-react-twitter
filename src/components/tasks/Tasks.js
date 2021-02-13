import React from "react";

import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";
import useTasks from "./useTasks";

import "./TaskCard.scss";

const Tasks = () => {
  const [tasks] = useTasks([]);

  // TODO: show a dialog to input a task

  // TODO: re-rendering after added a new task

  // TODO: draggable task-card

  // rendering tasks in a list
  const renderingList = () => {
    return tasks.map((task) => {
      return <TaskCard initialTask={task} key={task.id} />;
    });
  };

  return (
    <div className="task-main">
      <div className="task-list">{renderingList()}</div>
      <TaskForm />
    </div>
  );
};

export default Tasks;

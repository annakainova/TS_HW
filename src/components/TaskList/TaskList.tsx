import React, { FC } from "react";
import { ITask } from "../../types/types";
import TaskItem from "../TaskItem/TaskItem";

interface ListProps {
  tasks: ITask[];
  handleDelete: (id: number) => void;
  handleComplete: (task: ITask) => void;
}

const TaskList: FC<ListProps> = ({ tasks, handleDelete, handleComplete }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
        />
      ))}
    </div>
  );
};

export default TaskList;

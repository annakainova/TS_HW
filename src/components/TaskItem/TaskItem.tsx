import { ITask } from "../../types/types";
import { FC } from "react";
import classes from "./TaskItem.module.css";
import MyButton from "../MyButton/MyButton";

interface TaskItemProps {
  task: ITask;
  handleDelete: (id: number) => void;
  handleComplete: (task: ITask) => void;
}

const TaskItem: FC<TaskItemProps> = ({
  task,
  handleDelete,
  handleComplete,
}) => {
  return (
    <div className={classes.ListItem}>
      <input type="checkbox" checked={task.completed} />
      <p> {task.title} </p>
      <div className={classes.BtnGroup}>
        <MyButton onClick={() => handleComplete(task)}>Done</MyButton>
        <MyButton onClick={() => handleDelete(task.id)}>Delete</MyButton>
      </div>
    </div>
  );
};

export default TaskItem;

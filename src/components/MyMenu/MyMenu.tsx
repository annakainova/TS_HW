import { FC, useState } from "react";
import { ITask } from "../../types/types";
import classes from "./MyMenu.module.css";
import MyButton from "../MyButton/MyButton";
import MySelect from "../MySelect/MySelect";

interface MyMenuProps {
  handleAdd: (newTask: ITask) => void;
  setFilter: (filter: string) => void;
  handleSort: (sort: string) => void;
  sortValue: string;
  defaultValue: string;
  options: [
    {
      value: string;
      name: string;
    },
    {
      value: string;
      name: string;
    }
  ];
}

const MyMenu: FC<MyMenuProps> = ({
  handleAdd,
  setFilter,
  handleSort,
  sortValue,
  defaultValue,
  options
}) => {
  const [title, setTitle] = useState<string>("");

  const addNewTask = () => {
    if (title === "") {
      alert("Please enter a task");
      return;
    }

    const newTask = {
      id: Math.random(),
      title,
      completed: false,
    };

    handleAdd(newTask);
    setTitle("");
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <div>
      <div>
        <input
          className={classes.MyInput}
          value={title}
          onChange={changeHandler}
          type="text"
        />
        <MyButton onClick={() => addNewTask()}>Add task</MyButton>
      </div>
      <div className={classes.BtnGroup_className}>
        <MyButton onClick={() => setFilter("all")}>All</MyButton>
        <MyButton onClick={() => setFilter("active")}>Active</MyButton>
        <MyButton onClick={() => setFilter("completed")}>Completed</MyButton>
      </div>
      <div>
        <MySelect
          value={sortValue}
          handleSort={handleSort}
          defaultValue={defaultValue}
          options={options}
        />
      </div>
    </div>
  );
};

export default MyMenu;

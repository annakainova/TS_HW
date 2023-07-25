import React, { FC } from "react";
import classes from "./MyButton.module.css";

interface MyButtonProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const MyButton: FC<MyButtonProps> = ({ children, ...props }) => {
  return (
    <div>
      <button onClick={props.onClick} className={classes.myBtn}>
        {children}
      </button>
    </div>
  );
};

export default MyButton;

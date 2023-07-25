import React, {FC} from "react";
import classes from "./MyInput.module.css";

interface MyInputProps {
  children: React.ReactNode;
}

const MyInput: FC<MyInputProps> = ({ ...children }) => {
  return (
    <div>
      return <input className={classes.MyInput} {...children}></input>;
    </div>
  );
};

export default MyInput;

import React from "react";
import cl from "./MyInput.module.css";

function MyInput(props) {
  return <input className={cl.myInput} {...props} />;
}

export default MyInput;

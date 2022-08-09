import React from "react";
import cl from "./MyButton.module.css";

function MyButton({ children, ...props }) {
    return (
        <button {...props} className={cl.myBtn}>
            {children}
        </button>
    );
}

// {...props} нужен для включения всех свойств в виде props при обращении к компноненту
// {children} нужен для указания места, куда будет вставляться контент между тэгами

export default MyButton;

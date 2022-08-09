import React from "react";
import cl from "./MyModal.module.css";

function MyModal({ children, visiable, setVisiable }) {
    const rootClasses = [cl.myModal];
    if (visiable) {
        rootClasses.push(cl.active);
    }

    return (
        <div className={rootClasses.join(" ")} onClick={() => setVisiable(false)}>
            <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

// .join(" ") используется здесь для добавления класса к тегу

// {children} нужен для указания места, куда будет вставляться контент между тэгами
// здесь например <MyModal> <другой модуль>/или текст </MyModal>

// .stopPropagation() нужен для отключения применения свойства
//onClick глобального div на текущем div

export default MyModal;

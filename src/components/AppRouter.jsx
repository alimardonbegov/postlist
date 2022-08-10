import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "../context/Context";
import { privateRouters, publicRouters } from "../router/routers";
import "../styles/App.css";
import Loader from "./UI/loader/Loader";

function AppRouter() {
    // (п.3) вытаскиваем из контекста AuthContext переменные и их значения
    const { isAuth, isLoading } = useContext(AuthContext);

    //проверяем значение прогрузки, которое зависит от изменения статуса авторизации
    // см. детальнее в App.js
    if (isLoading) {
        <Loader />;
    }

    return (
        <Routes>
            {isAuth
                ? privateRouters.map((r) => (
                      <Route
                          key={r.element}
                          path={r.path}
                          element={r.element}
                          exact={r.exact}
                      ></Route>
                  ))
                : publicRouters.map((r) => (
                      <Route
                          key={r.element}
                          path={r.path}
                          element={r.element}
                          exact={r.exact}
                      ></Route>
                  ))}
        </Routes>
    );
}

export default AppRouter;

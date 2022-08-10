import React from "react";
import { Routes, Route } from "react-router-dom";
import { routers } from "../router/routers";
import "../styles/App.css";

function AppRouter() {
    return (
        <Routes>
            {routers.map((r) => (
                <Route key={r.element} path={r.path} element={r.element} exact={r.exact}></Route>
            ))}
        </Routes>
    );
}

export default AppRouter;

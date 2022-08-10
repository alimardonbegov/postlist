import React, { useContext } from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import { AuthContext } from "../context/Context";

function Login() {
    // (п.3) вытаскиваем из контекста AuthContext переменные и их значения
    const { isAuth, setIsAuth } = useContext(AuthContext);

    // после авторизации меняем значение isAuth на true
    // затем добавляем в локальное хранилище слова"auth",
    // это дальше передается в App.js (см. там п.4)
    function login(event) {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem("auth", "true");
    }
    return (
        <form className="form" onSubmit={login}>
            <MyInput type="text" placeholder="Username" />
            <MyInput type="password" placeholder="Password" />
            <MyButton type="submit">Login</MyButton>
        </form>
    );
}

export default Login;

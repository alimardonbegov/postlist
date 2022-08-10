import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/navbar/Navbar";
import { AuthContext } from "./context/Context";
import "./styles/App.css";

function App() {
    // (п.1) создаем перем и зад значения для передачи в контексте (п.2. смотри здесь ниже)
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    //  (п.4) проверяем в локальном хранилище наличие auth (добавляется туда в компоненте Login)
    // это нужно для (сначала) получения подтверж об авторизации, затем обновления стр в любом роутере
    // то есть запускаем Router (в AppRouter) после подтвр данных об авторизации
    useEffect(() => {
        if (localStorage.getItem("auth")) {
            setIsAuth(true);
        }

        setIsLoading(false);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isAuth: isAuth,
                setIsAuth: setIsAuth,
                isLoading: isLoading,
            }} // (п.2) передаем в AuthContext переменные (создаем объект, потом из него будет доставать перем)
            // п.3. см в компонентах AppRouter и Login
        >
            <BrowserRouter>
                <Navbar />
                <AppRouter />
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;

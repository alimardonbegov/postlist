import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/Context";
import MyButton from "../button/MyButton";

function Navbar() {
    // (п.3) вытаскиваем из контекста AuthContext переменные и их значения
    const { isAuth, setIsAuth } = useContext(AuthContext);

    // при logout меняем переменную авторизации на false
    // и удаляем из локального хранилища auth, в итоге перекинет на страницу логина (см. App.js)
    function logout(event) {
        event.preventDefault();
        setIsAuth(false);
        localStorage.removeItem("auth");
    }

    return (
        <div className="navbar">
            <Link className="navLink" to="/about">
                About
            </Link>
            <Link className="navLink" to="/posts">
                Posts
            </Link>
            <MyButton
                style={{ margin: "0 100px 0", color: "white", border: " 1px solid white" }}
                onClick={logout}
            >
                Log out
            </MyButton>
            <div className="dot"></div>
        </div>
    );
}

export default Navbar;

// в ссылке : означает название параметра

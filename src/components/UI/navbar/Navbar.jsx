import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <Link className="navLink" to="/about">
                About
            </Link>
            <Link className="navLink" to="/posts">
                Posts
            </Link>
            <div className="dot"></div>
        </div>
    );
}

export default Navbar;

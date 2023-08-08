import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to='/'>
                <p>Homepage</p>
            </Link>
            <Link to='/discovery'>
                <p>Discovery</p>
            </Link>
            <Link to='/login'>
                <p>Login</p>
            </Link>
            <Link to='/register'>
                <p>Register</p>
            </Link>
        </div>
    );
};

export default Navbar;
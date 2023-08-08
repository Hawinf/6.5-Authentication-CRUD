import axios from "axios";
import React, { useState } from "react";
import { API } from "../const/endpoint";
import Navbar from "./Navbar";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => {
        // console.log(e.target.value);
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        // console.log(e.target.value);
        setPassword(e.target.value)
    }

    const handleRegister = () => {
        const payload = {
            email: email,
            password: password,
            role: "Admin"
        };

        axios
            .post(API.REGISTER, payload)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => console.log(err.message))
    }

    return (
        <div>
            <Navbar />
            <h1>Register Admin Page</h1>
            <p>Enter Your E-mail</p>
            <input onChange={handleEmail} placeholder="eg@gmail.com" />
            <p>Input your password</p>
            <input onChange={handlePassword} placeholder="min 6 character" />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
};

export default Register;
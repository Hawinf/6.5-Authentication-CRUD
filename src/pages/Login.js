import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../const/endpoint";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [em, setEm] = useState('');
    const [pass, setPass] = useState('');
    const [login, setLogin] = useState(false);
    const navigate = useNavigate();

    const handleEm = (e) => {
        // console.log(e.target.value)
        setEm(e.target.value)
    }

    const handlePass = (e) => {
        // console.log(e.target.value)
        setPass(e.target.value)
    }

    const handleLogin = () => {
        const payload = {
            email: em,
            password: pass,
          };

        axios
          .post(API.LOGIN, payload)
          .then((res) => {
            console.log(res)
            localStorage.setItem('token', res.data.access_token)
            navigate('/discovery')
          })
          .catch((err) => console.log(err.message))
    };

    const handleLogOut = () => {
        localStorage.removeItem('token');
        navigate('/')
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token) {
            setLogin(false)
        } else {
            setLogin(true);
        }
    })

    return (
        <div>
            <Navbar />
            
            
            {
                login ? (
                    <button onClick={handleLogOut}>Log Out</button>
                ) : (
                    <>
                        <h1>Login Admin Page</h1>
                        <p>Enter Your E-mail</p>
                        <input onChange={handleEm} placeholder="eg@gmail.com" />
                        <p>Input your password</p>
                        <input onChange={handlePass} placeholder="min 6 character" />
                        <button onClick={handleLogin}>Login</button>
                    </>
                )
            }
        </div>
    );
};

export default Login;
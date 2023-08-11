import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRouteV1 = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [loading, setLoading] = useState(true);

    // Part 1
    useEffect(() => {
        console.log('useEffect')
        setLoading(true)
        const token = localStorage.getItem('token')
        // If There is nothing token
        if(!token) {
            setIsLogin(false)
            setLoading(false)
        } else {
            setIsLogin(true)
            setLoading(false)
        }
    });

    // Part 2
    console.log('loading')
    if(loading) {
        return 'Loadinggg'
        
    }

    // Part 3
    console.log('return')
    return isLogin ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRouteV1
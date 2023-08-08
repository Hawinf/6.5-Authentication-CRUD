import React, { useLayoutEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutesV2 = (props) => {
    const [login, setLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useLayoutEffect(() => {
        setIsLoading(true);
        const token = localStorage.getItem('token')
        if(!token) {
            setLogin(false);
            setIsLoading(false)
        } else {
            setLogin(true);
            setIsLoading(false)
        }
    }, [login]);

    if(isLoading) {
        return '...Checking Auth';
    }
    if(!login) return <Navigate to='/login' />;
    return props.children
}

export default ProtectedRoutesV2;
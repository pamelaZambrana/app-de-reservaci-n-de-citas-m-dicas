import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../components/pure/context/auth';

const PublicRoute = () => {
    const isLogin = useAuthContext();
    console.log("is logn?", isLogin);
    if(isLogin===true){
        return <Navigate to={"/private/home"}/>
    }
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
}

export default PublicRoute;

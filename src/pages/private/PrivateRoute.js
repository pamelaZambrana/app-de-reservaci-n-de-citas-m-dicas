import React from 'react';
import { useAuthContext } from '../../components/pure/auth';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const {isLogin} = useAuthContext();

    if(isLogin===false){
        return <Navigate to={"/"}/>
    }
    return (
        <div >
            <Outlet></Outlet>
        </div>
    );
}

export default PrivateRoute;


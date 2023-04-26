import React, {useContext, createContext, useState, useMemo, useCallback} from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

function AuthProvider({children}){

    const [isLogin, setIsLogin] = useState(sessionStorage.getItem("token")==="" ? false : true);
    console.log(isLogin);
    const login=useCallback(()=>{
        setIsLogin(true);
    },[]);
    const logOut=useCallback(()=>{
        setIsLogin(false);
    },[]);
        
    const value = useMemo(
        ()=>({
            login,
            logOut,
            isLogin
        }), [login, logOut, isLogin]
    );

    return <AuthContext.Provider value={value}>{ children }</AuthContext.Provider>
};

export function useAuthContext(){
    return useContext(AuthContext);
}

export {
    AuthProvider,
}
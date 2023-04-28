import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
const EditContext=createContext();

const EditProvider = ({children}) => {
    const [editApp, setEditApp] = useState(null);
    const setIndex = useCallback(()=>{
        const id=JSON.parse(localStorage.getItem("id"));
        setEditApp(id);
    }, []);
    
    const value = useMemo(
        ()=>({
            setIndex,
            editApp,
        }), [setIndex,editApp]
    );
    return (
        <EditContext.Provider value={value}>{ children }</EditContext.Provider>
    );
};

export function useEditContext(){
    return useContext(EditContext);
};

export { EditProvider }


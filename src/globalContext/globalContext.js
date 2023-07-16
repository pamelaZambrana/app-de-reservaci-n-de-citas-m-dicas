import React, { createContext, useReducer } from 'react';
import { initialState } from './initialState';
import { globalReducer } from './reducer';

export const GlobalContext = createContext();

const GlobalProvider = ({children}) => {
    const [globalState, dispatch] = useReducer(globalReducer, initialState);
    return (
        <GlobalContext.Provider value={[globalState, dispatch]}>
            { children }
        </GlobalContext.Provider>
    );
}

export default GlobalProvider;

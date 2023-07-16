export const TYPES = {
    INIT_SESSION : "INIT SESSION",
    CLOSE_SESSION : " CLOSE SESSION",
    CLOSE_OPEN_PRINCIPAL_MENU : " CLOSE OPEN PRINCIPAL MENU",

};

export function globalReducer(state, action){
    switch (action.type){
        case TYPES.INIT_SESSION:
        return{
            ...state,  
            user : action.payload,
            loginState : true,
        }
        case TYPES.CLOSE_SESSION:
        return{
            ...state,  
            loginState : false,
        }
        case TYPES.CLOSE_OPEN_PRINCIPAL_MENU:
            return{
                ...state,
                openPrincipalMenu : !state.openPrincipalMenu,
            }
        default:
            return state
    }
}
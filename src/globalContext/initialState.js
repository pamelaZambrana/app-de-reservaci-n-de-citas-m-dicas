let user = {};
let loginState = false;
if(localStorage.length > 0){
    user = JSON.parse(localStorage.getItem("user"));
    loginState = true;
}
export let initialState = {
    user: {
        ...user
    },
    loginState : loginState,
    openPrincipalMenu : false,
}
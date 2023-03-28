import axios from "axios";

export function saveNewUser(newUser){
    return(
        axios.post(
            "https://suyana-api.vercel.app/api/doctor",
            newUser,
        )
    )
};

export function loginUser(values){
    return axios.post("https://suyana-api.vercel.app/api/auth/login",values);
    
};

export function getUsers(){
    return axios.get(
        "https://suyana-api.vercel.app/api/doctor"
    );
}
/* export function loginUser(values){
    console.log("valores",values);
    return axios({
        method:"post",
        url:"https://suyana-api.vercel.app/api/auth/login",
        data: values
    })
    
} */


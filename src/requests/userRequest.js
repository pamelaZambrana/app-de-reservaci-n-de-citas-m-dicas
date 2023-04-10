import axios from "axios";
const token=sessionStorage.getItem("token");

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
        "https://suyana-api.vercel.app/api/doctor",
        {headers: {"x-token":token}}
    );
}

export function removeUser(id){
    console.log(`https://suyana-api.vercel.app/api/doctor/${id}`,"ññññññ");
    return axios.delete(
        `https://suyana-api.vercel.app/api/doctor/${id}`,
        {headers: {"x-token":token}}
    )
}

/* export function loginUser(values){
    console.log("valores",values);
    return axios({
        method:"post",
        url:"https://suyana-api.vercel.app/api/auth/login",
        data: values
    })
    
} */


import axios from "axios";


export function saveNewUser(newUser){
    let token=sessionStorage.getItem("token");
    return(
        axios
            .post(
            "https://suyana-api.vercel.app/api/doctor",
            newUser,
            {headers: {"x-token":token}}
            )

    )
};

export function loginUser(values){
    return axios
        .post("https://suyana-api.vercel.app/api/auth/login",values)
        ;
    
};

export function getUsers(){
    let token=sessionStorage.getItem("token");

    return axios.get(
        "https://suyana-api.vercel.app/api/doctor",
       {headers: {"x-token":token}}
    )
    .catch((error) => {
        console.log("Error en getUsers(): ", error);
        throw error;
      })
}

export function removeUser(id){
    let token=sessionStorage.getItem("token");
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


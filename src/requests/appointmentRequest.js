import axios from "axios";


export function saveNewAppointment(appointment){
    const token=sessionStorage.getItem("token");
    return(
        axios.post(
            "https://suyana-api.vercel.app/api/appointment",
            appointment,
            {headers:{"x-token":token}}
        )
    )
};

export function getAppointments(){
    const token=sessionStorage.getItem("token");
    return(
        axios.get(
            "https://suyana-api.vercel.app/api/appointment",
            {headers:{"x-token":token}}
        )
    )
};

export function removeAppointments(index){
    const token=sessionStorage.getItem("token");
    console.log(`https://suyana-api.vercel.app/api/appointment/${index}`)
    return(
        axios.delete(
            `https://suyana-api.vercel.app/api/appointment/${index}`,
            {headers:{"x-token":token}}
            )
    )
};

/* return axios.delete(__ruta____,{headers:{'x-token': ______token_____}}) */

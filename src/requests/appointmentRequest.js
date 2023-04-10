import axios from "axios";
const token=sessionStorage.getItem("token");

export function saveNewAppointment(appointment){
    return(
        axios.post(
            "https://suyana-api.vercel.app/api/appointment",
            appointment,
            {headers:{"x-token":token}}
        )
    )
};

export function getAppointments(){
    return(
        axios.get(
            "https://suyana-api.vercel.app/api/appointment",
            {headers:{"x-token":token}}
        )
    )
};

export function removeAppointments(index){
    console.log(`https://suyana-api.vercel.app/api/appointment/${index}`)
    return(
        axios.delete(
            `https://suyana-api.vercel.app/api/appointment/${index}`,
            {headers:{"x-token":token}}
            )
    )
};

/* return axios.delete(__ruta____,{headers:{'x-token': ______token_____}}) */

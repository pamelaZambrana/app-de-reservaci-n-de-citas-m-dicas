import axios from "axios";
const token=sessionStorage.getItem("t");

export function saveNewAppointment(appointment){
    return(
        axios.post(
            "https://suyana-api.vercel.app/api/appointment",
            appointment
        )
    )
};

export function getAppointments(){
    return(
        axios.get(
            "https://suyana-api.vercel.app/api/appointment",
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

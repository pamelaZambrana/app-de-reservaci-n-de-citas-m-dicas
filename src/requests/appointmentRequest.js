import axios from "axios";

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
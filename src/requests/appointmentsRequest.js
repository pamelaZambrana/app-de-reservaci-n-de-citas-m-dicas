import axios from "axios";
const url = 'https://suyana-api.vercel.app/api/appointment';

export function newAppointmentRequestToBackend(values){
    const token = JSON.parse(localStorage.getItem('user')).token;
    return axios.post(url,values,{headers:{'xtoken': token}});
};
import axios from "axios";

export function newWorkerRequestToBackend(values){
    const url = 'https://suyana-api.vercel.app/api'
    const token = JSON.parse(localStorage.getItem('user')).token;
    return axios.post(`${url}/staff`,values)
}
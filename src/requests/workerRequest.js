import axios from "axios";

const url = 'https://suyana-api.vercel.app/api'
const token = JSON.parse(localStorage.getItem('user')).token;

export function newWorkerRequestToBackend(values){
    return axios.post(`${url}/staff`,values)
}
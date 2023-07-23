import axios from "axios";
const url = 'https://suyana-api.vercel.app/api/staff'

export function newWorkerRequestToBackend(values){
    const token = JSON.parse(localStorage.getItem('user')).token;
    return axios.post(url,values);
}

export function getAllDoctorsRequestBackend(){
    const token = JSON.parse(localStorage.getItem('user')).token;
    return axios.get(url,{headers:{'xtoken': token}})
}
import axios from "axios";

const url = 'https://suyana-api.vercel.app/api/patient'

export function newPatientRequestToBackend(values){
    const token = JSON.parse(localStorage.getItem('user')).token;
    return axios.post(url,values,{headers:{'xtoken': token}})
}

export function getAllPatientsBackend(){
    const token = JSON.parse(localStorage.getItem('user')).token;
    return axios.get(url,{headers:{'xtoken': token}})
}
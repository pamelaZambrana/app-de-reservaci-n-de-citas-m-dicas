import axios from "axios";

const url = 'https://suyana-api.vercel.app/api'

export function loginRequest(values){
    return axios.post(`${url}/auth/login`,values)
}
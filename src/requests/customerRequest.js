import axios from "axios";
const token=sessionStorage.getItem("token");

export function saveNewCustomer(newCustomer){
    return(
        axios.post(
            "https://suyana-api.vercel.app/api/patient",
            newCustomer,
            {headers:{"x-token":token}}
        )
    )
};

export function getCustomers(){
    return(
        axios.get(
            "https://suyana-api.vercel.app/api/patient",
            {headers:{"x-token":token}}
        )
    )
};
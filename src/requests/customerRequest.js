import axios from "axios";

export function saveNewCustomer(newCustomer){
    return(
        axios.post(
            "https://suyana-api.vercel.app/api/patient",
            newCustomer,
        )
    )
};

export function getCustomers(){
    return(
        axios.get(
            "https://suyana-api.vercel.app/api/patient"
        )
    )
};
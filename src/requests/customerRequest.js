import axios from "axios";


export function saveNewCustomer(newCustomer){
    const token=sessionStorage.getItem("token");
    return(
        axios.post(
            "https://suyana-api.vercel.app/api/patient",
            newCustomer,
            {headers:{"x-token":token}}
        )
    )
};

export function getCustomers(){
    const token=sessionStorage.getItem("token");
    return(
        axios.get(
            "https://suyana-api.vercel.app/api/patient",
            {headers:{"x-token":token}}
        )
    )
};
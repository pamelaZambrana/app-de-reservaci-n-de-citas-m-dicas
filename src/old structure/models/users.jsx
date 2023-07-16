import { AVAILABILITY, BRANCHES, ESPECIALIDAD } from "./options";

export class User{
    name="";
    specialty=ESPECIALIDAD.General;
    branch=BRANCHES.EA;
    availability=AVAILABILITY.morning;
    phone="";
    address="";
    email="";
    password="";
    constructor(
        name,
        specialty,
        branch,
        availability,
        phone,
        address,
        email,
        password,
        ){

        this.name=name;
        this.specialty=specialty;
        this.branch=branch;
        this.availability=availability;
        this.phone=phone;
        this.address=address;
        this.email=email;
        this.password=password;
    }
}
import { AVAILABILITY, BRANCHES, ESPECIALIDAD } from "./options";

export class Customer{
        name="";
        age="";
        birthday="";
        phone="";
        branch=BRANCHES.EA;
        specialty=ESPECIALIDAD.General;
        diagnosis="";
    constructor(
        name,
        age,
        birthday,
        phone,
        branch,
        specialty,
        diagnosis,
        ){

        this.name=name;
        this.age=age;
        this.birthday=birthday;
        this.phone=phone;
        this.branch=branch;
        this.specialty=specialty;
        this.diagnosis=diagnosis;
    }
}
import { BRANCHES, DOCTOR, ESPECIALIDAD } from "./options";

export class Appointment{
    name="";
    cellphone="";
    doctor=DOCTOR.Juanita;
    specialty=ESPECIALIDAD.General;
    dateTime="";
    branch=BRANCHES.EA;
    complete=false;
    constructor(
        name,
        cellphone,
        doctor,
        specialty,
        dateTime,
        branch,
        complete){

        this.name=name;
        this.cellphone=cellphone;
        this.doctor=doctor;
        this.specialty=specialty;
        this.dateTime=dateTime;
        this.branch=branch;
        this.complete=complete;
    }
}
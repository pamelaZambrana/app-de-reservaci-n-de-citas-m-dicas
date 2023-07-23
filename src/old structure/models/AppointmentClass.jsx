import { BRANCHES, DOCTOR, ESPECIALIDAD } from "./options";

export class Appointment{
    name="";
    cellphone="";
    doctor=DOCTOR.Juanita;
    specialty=ESPECIALIDAD.General;
    date ="";
    time="";
    branch=BRANCHES.EA;
    complete=false;
    constructor(
        name,
        cellphone,
        doctor,
        specialty,
        date,
        time,
        branch,
        complete){

        this.name=name;
        this.cellphone=cellphone;
        this.doctor=doctor;
        this.specialty=specialty;
        this.date=date
        this.time=time;
        this.branch=branch;
        this.complete=complete;
    }
}
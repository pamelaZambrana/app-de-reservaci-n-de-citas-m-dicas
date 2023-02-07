import { ESPECIALIDAD } from "./especialidad";

export class Appointment{
    name="";
    lastName="";
    cellphone="";
    email="";
    specialty=ESPECIALIDAD.General;
    specialist="";
    date="";
    initialHour="";
    finalHour="";
    location="";
    complete=false;
    constructor(
        name,
        lastName,
        cellphone,
        email,
        specialty,
        specialist,
        date,
        initialHour,
        finalHour,
        location,
        complete){

        this.name=name;
        this.lastName=lastName;
        this.cellphone=cellphone;
        this.email=email;
        this.specialty=specialty;
        this.specialist=specialist;
        this.date=date;
        this.initialHour=initialHour;
        this.finalHour=finalHour;
        this.location=location;
        this.complete=complete;
    }
}
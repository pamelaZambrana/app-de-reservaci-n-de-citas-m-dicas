import { ESPECIALIDAD } from "./especialidad";

export class Appointment{
    name="";
    lastName="";
    cellphone="";
    email="";
    specialty=ESPECIALIDAD.General;
    specialist="";
    dateTime="";
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
        dateTime,
        finalHour,
        location,
        complete){

        this.name=name;
        this.lastName=lastName;
        this.cellphone=cellphone;
        this.email=email;
        this.specialty=specialty;
        this.specialist=specialist;
        this.dateTime=dateTime;
        this.finalHour=finalHour;
        this.location=location;
        this.complete=complete;
    }
}
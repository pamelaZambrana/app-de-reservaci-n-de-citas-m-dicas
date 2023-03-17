import React, {useState} from 'react';
import Navbar from '../../components/pure/navbar';
import Agenda from '../../components/containers/agenda';
import Aside from '../../components/containers/aside';
import { Appointment } from '../../models/AppointmentClass';
import { ESPECIALIDAD } from '../../models/especialidad';
import AppointmentFormik from '../../components/forms/appointmentFormik';


/* Clientes de prueba */
const client1=new Appointment("juanita", 4512266, "Osso de Bernoulli",ESPECIALIDAD.General,'2018-03-17T19:30',"el alto",false);
    const client2=new Appointment("juanito", 25262621, "Osso de Bernoulli",ESPECIALIDAD.Fisioterapia,'2023-03-17T15:00',"el alto",true);
    const client3=new Appointment("belloti", 6980555, "Osso de Bernoulli",ESPECIALIDAD.General,'2023-03-18T08:30',"el alto",true);
    const client4=new Appointment("paola", 77788555, "Osso de Bernoulli",ESPECIALIDAD.EducacionEspecial,'2023-03-17T10:30',"el alto",false);
    const client5=new Appointment("stampy", 77788555, "Osso de Bernoulli",ESPECIALIDAD.Psicopedagogia,'2023-03-17T12:30',"el alto",false);
    const client6=new Appointment("jack", 77788555, "Osso de Bernoulli",ESPECIALIDAD.General,'2023-03-17T15:00',"el alto",false);
    const client7=new Appointment("ronald", 77788555,"Osso de Bernoulli", ESPECIALIDAD.Psicologia,'2023-03-18T11:30',"el alto",false);
    const client8=new Appointment("ana", 77788555,"Osso de Bernoulli", ESPECIALIDAD.Psicopedagogia,'2023-03-18T08:30',"el alto",false);
    const client9=new Appointment("andy", 77788555,"Osso de Bernoulli", ESPECIALIDAD.Psicopedagogia,'2023-03-18T10:30',"el alto",false);
    const client10=new Appointment("eli", 77788555,"Osso de Bernoulli", ESPECIALIDAD.Fisioterapia,'2023-03-17T08:30',"el alto",false);

    const Dashboard = () => {

    /* Estado de la lista de clientes */
     const [clients, setClients] = useState([client1,client2,client3,client4,client5,client6, client7, client8, client9, client10]);
    const [navBarMenu, setNavBarMenu] = useState(false);
    function openNavBarMenu(){
      console.log(navBarMenu);
       console.log("navBarMenu is Open");
        setNavBarMenu(prevState=>!prevState);  
        console.log(navBarMenu);
    }
    return (
        <div className="App ">
            <header >
            <Navbar
                navBarMenu={navBarMenu}
                openNavBarMenu={openNavBarMenu}
            ></Navbar>
            </header>
            <section className='principal-section'>
            <Agenda 
                clients = { clients }
                setClients = { setClients }
            ></Agenda>
            <Aside></Aside>
            </section>
            {/* <LoginFormik></LoginFormik> */}
            {/* <AppointmentFormik></AppointmentFormik> */}
      </div>
    );
}

export default Dashboard;

import React, {useState} from 'react';
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import"./styles/principal-section.css";

import LoginFormik from './components/forms/loginForm';
import AppointmentFormik from './components/forms/appointmentForm';
import Dashboard from './pages/dashboard/Dashboard';
import AppointmentForm from './components/forms/appointmentForm';
import LoginForm from './components/forms/loginForm';
import { ESPECIALIDAD } from './models/especialidad';
import { Appointment } from './models/AppointmentClass';


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

function App() {

  /* Estado de la lista de clientes */
  const [clients, setClients] = useState([client1,client2,client3,client4,client5,client6, client7, client8, client9, client10]);
  /* Add new appointment */
  function addNewAppointment(appo){
    const clientList = [...clients];
    clientList.push(appo);
    setClients(clientList);
    console.log(appo);
  }
  console.log(clients)
  return (
    <Routes>
      
      <Route 
        path='/'
        element = { <Dashboard 
                      setClients = { setClients }
                      clients = { clients }
                      /> }
      />
      <Route 
        path='/newAppointment'
        element = { <AppointmentForm addNewAppointment = { addNewAppointment }/> }
      />
      <Route 
        path='/login'
        element = { <LoginForm/> }
      />
      
    </Routes> 
    
    
  );
}

export default App;

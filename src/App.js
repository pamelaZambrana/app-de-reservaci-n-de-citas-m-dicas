import React, {useState, useEffect} from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import"./styles/principal-section.css";

import LoginFormik from './components/forms/loginForm';
import AppointmentFormik from './components/forms/appointmentForm';
import Dashboard from './pages/dashboard/Dashboard';
import AppointmentForm from './components/forms/appointmentForm';
import LoginForm from './components/forms/loginForm';
import { AVAILABILITY, ESPECIALIDAD } from './models/options';
import { Appointment } from './models/AppointmentClass';
import ColoredTablePage from "./pages/appointments/coloredTablePage"
import LoginPage from './pages/auth/loginPage';
import { User } from './models/users';
import UserFormPage from './pages/formPages/userFormPage';
import UsersDashboard from './pages/dashboard/usersDashboard';
import CustomerForm from './components/forms/custormerForm';
import { Customer } from './models/customer';
import CustomerDashboard from './pages/dashboard/customerDashboard';

/* Citas de prueba */
const client1=new Appointment("juanita", 4512266, "Osso de Bernoulli",ESPECIALIDAD.General,'2018-03-22T19:00',"el alto",false);
const client2=new Appointment("juanito", 25262621, "Osso de Bernoulli",ESPECIALIDAD.Fisioterapia,'2023-03-22T15:00',"el alto",true);
const client3=new Appointment("belloti", 6980555, "Osso de Bernoulli",ESPECIALIDAD.General,'2023-03-23T08:30',"el alto",true);
const client4=new Appointment("paola", 77788555, "Osso de Bernoulli",ESPECIALIDAD.EducacionEspecial,'2023-03-22T10:30',"el alto",false);
const client5=new Appointment("stampy", 77788555, "Osso de Bernoulli",ESPECIALIDAD.Psicopedagogia,'2023-03-22T12:30',"el alto",false);
const client6=new Appointment("jack", 77788555, "Osso de Bernoulli",ESPECIALIDAD.General,'2023-03-22T09:00',"el alto",false);
const client7=new Appointment("ronald", 77788555,"Osso de Bernoulli", ESPECIALIDAD.Psicologia,'2023-03-23T11:30',"el alto",false);
const client8=new Appointment("ana", 77788555,"Osso de Bernoulli", ESPECIALIDAD.Psicopedagogia,'2023-03-23T08:30',"el alto",false);
const client9=new Appointment("andy", 77788555,"Osso de Bernoulli", ESPECIALIDAD.Psicopedagogia,'2023-03-23T10:30',"el alto",false);
const client10=new Appointment("eli", 77788555,"Osso de Bernoulli", ESPECIALIDAD.Fisioterapia,'2023-03-22T08:30',"el alto",false);



/* Pacientes de prueba */
const customer1 = new Customer("Juanito de los Palotes",18,"10-08-1994","69802366","el alto",ESPECIALIDAD.General,"-");
const customer2 = new Customer("Brosso",30,"09-01-1992","74512369","el alto",ESPECIALIDAD.General,"-");
const customer3 = new Customer("Gabriela",18,"20-12-1991","71296854","el alto",ESPECIALIDAD.General,"-");

function App() {

  /* Estados generales */
  const [clients, setClients] = useState([client1,client2,client3,client4,client5,client6, client7, client8, client9, client10]);
  const [customers, setCustomers] = useState([customer1,customer2,customer3]);
  const [arrows, setArrows] = useState(1);
  const [navBarMenu, setNavBarMenu] = useState(false);

  /* Abrir navBarMenu */
  function openNavBarMenu(){
    console.log(navBarMenu);
      console.log("navBarMenu is Open");
      setNavBarMenu(prevState=>!prevState);  
      console.log(navBarMenu);
  }
 
  /* Add new customer */
  function addNewCustomer(newCustomer){
    const CustomerList = [...customers];
    CustomerList.push(newCustomer);
    setCustomers(CustomerList);
    console.log("nuevo paciente",newCustomer);
  };
  /* Add new appointment */
  function addNewAppointment(appo){
    const clientList = [...clients];
    clientList.push(appo);
    setClients(clientList);
    console.log(appo);
  };
  
;
  console.log("pacientes",customers);
  return (
    <Routes>
      <Route 
        path='registroUsuario'
        element = { <UserFormPage 
                      /> }
      />
      <Route 
        path='tablaUsuarios'
        element = { <UsersDashboard 
                      navBarMenu = { navBarMenu }
                      openNavBarMenu = { openNavBarMenu }
                      /> }
      />
      <Route 
        path='registroPaciente'
        element = { <CustomerForm
                      addNewCustomer = { addNewCustomer }
                      /> }
      />
      <Route 
        path='tablaPacientes'
        element = { <CustomerDashboard
                      navBarMenu = { navBarMenu }
                      openNavBarMenu = { openNavBarMenu }
                      customers = { customers }
                      setCustomers = { setCustomers }
                      /> }
      />
      <Route 
        path='/'
        element = { <Dashboard 
                      clients = { clients }
                      setClients = { setClients }
                      arrows = { arrows }
                      setArrows = { setArrows }
                      navBarMenu = { navBarMenu }
                      openNavBarMenu = { openNavBarMenu }
                      /> }
      />
      <Route 
        path='/newAppointment'
        element = { <AppointmentForm 
                      clients = { clients }
                      addNewAppointment = { addNewAppointment }
                      arrows = { arrows }
                      setArrows = { setArrows }
                   /> }
      />
      <Route 
        path='/login'
        element = { <LoginPage/> }
      />
      <Route
        path='/watch'
        element = { <ColoredTablePage 
                          clients = { clients }
                          arrows = { arrows }
                          setArrows = { setArrows }
                     /> }
      />
      
    </Routes> 
    
    
  );
}

export default App;

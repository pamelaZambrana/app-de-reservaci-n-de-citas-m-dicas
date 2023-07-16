import React from 'react';
import { Route,
    RouterProvider,
    createBrowserRouter, 
    createRoutesFromElements,} from 'react-router-dom';

import LayoutPage from './pages/PrincipalLayout/LayoutPage';
import AppointmentTablePage from "./pages/Private/Tables/AppointmentTablePage";
import WorkersTablePage from "./pages/Private/Tables/WorkersTablePage";
import PatientsTablePage from './pages/Private/Tables/PatientsTablePage';
import NewWorkerFormPage from './pages/Private/Forms/NewWorkerFormPage';
import NewPatientFormPage from './pages/Private/Forms/NewPatientFormPage';
import NewAppointmentFormPage from './pages/Private/Forms/NewAppointmentFormPage';
import GlobalProvider from './globalContext/globalContext';
import PrincipalSectionPage from './pages/Private/PrincipalSectionPage';
import LoginPage from './pages/PrincipalLayout/LoginPage';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element = <LayoutPage/>>
    <Route index element=<LoginPage/>/>
    <Route path="private" element={<PrincipalSectionPage/>}>
      <Route index element=<AppointmentTablePage/>></Route>
      <Route path ='trabajadores' element=<WorkersTablePage/>></Route>
      <Route path ="pacientes" element=<PatientsTablePage/>></Route>
      <Route path='nuevo-trabajador' element=<NewWorkerFormPage/>></Route>
      <Route path='nuevo-paciente' element=<NewPatientFormPage/>></Route>
      <Route path='nueva-cita' element=<NewAppointmentFormPage/>></Route>
    </Route>
  </Route>
))

function App() {

  return (
    <>
      <GlobalProvider>
        <RouterProvider router = { router }></RouterProvider>
      </GlobalProvider>
    </>
    );
  }
  
  export default App;
  
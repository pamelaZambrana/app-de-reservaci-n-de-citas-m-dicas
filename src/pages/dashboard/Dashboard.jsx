import React, {useState} from 'react';
import Navbar from '../../components/pure/navbar';
import Agenda from '../../components/containers/agenda';
import Aside from '../../components/containers/aside';

const Dashboard = ({ clients, setClients, addNewAppointment, arrows, setArrows }) => {

    
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
                arrows = { arrows }
                setArrows = { setArrows }
            ></Agenda>
            <Aside
                addNewAppointment = { addNewAppointment }
                arrows = { arrows }
                setArrows = { setArrows }
            ></Aside>
            </section>
            {/* <LoginFormik></LoginFormik> */}
            {/* <AppointmentFormik></AppointmentFormik> */}
      </div>
    );
}

export default Dashboard;

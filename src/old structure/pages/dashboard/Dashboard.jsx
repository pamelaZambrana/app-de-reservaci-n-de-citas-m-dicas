import React, {useState} from 'react';
import Agenda from '../../components/containers/agenda';

const Dashboard = ({ clients, setClients, arrows, setArrows }) => {

    return (
        <div>
            <Agenda 
                clients = { clients }
                setClients = { setClients }
                arrows = { arrows }
                setArrows = { setArrows }
            >
            </Agenda>
      </div>
    );
}

export default Dashboard;

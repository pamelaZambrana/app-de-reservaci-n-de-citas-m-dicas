import React from 'react';
import Aside from '../../components/containers/aside';
import CustomerRegister from '../../components/containers/customerRegister';
import Navbar from '../../components/pure/navbar';

const CustomerDashboard = ({ customers, setCustomers}) => {
    return (
        <div>
            <CustomerRegister
                customers={ customers }
                setCustomers = { setCustomers }
            ></CustomerRegister>
        </div>
    );
}

export default CustomerDashboard;

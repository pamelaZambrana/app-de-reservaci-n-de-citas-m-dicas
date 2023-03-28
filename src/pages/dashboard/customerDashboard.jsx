import React from 'react';
import Aside from '../../components/containers/aside';
import CustomerRegister from '../../components/containers/customerRegister';
import Navbar from '../../components/pure/navbar';

const CustomerDashboard = ({navBarMenu, openNavBarMenu, customers, setCustomers}) => {
    return (
        <div>
            <Navbar
                navBarMenu={navBarMenu}
                openNavBarMenu={openNavBarMenu}
            ></Navbar>
            <section className='principal-section'>
                <CustomerRegister
                    customers={ customers }
                    setCustomers = { setCustomers }
                ></CustomerRegister>
                <Aside></Aside>
                
            </section>
        </div>
    );
}

export default CustomerDashboard;

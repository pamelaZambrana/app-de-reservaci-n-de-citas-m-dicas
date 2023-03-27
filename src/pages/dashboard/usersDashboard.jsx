import React from 'react';
import Aside from '../../components/containers/aside';
import UserRegister from '../../components/containers/userRegister';
import Navbar from "../../components/pure/navbar"
const UsersDashboard = ({navBarMenu, openNavBarMenu, users, setUsers}) => {
    return (
        <div>
            <Navbar
                navBarMenu={navBarMenu}
                openNavBarMenu={openNavBarMenu}
            ></Navbar>
            <section className='principal-section'>
                <UserRegister
                    users={ users }
                    setUsers = { setUsers }
                ></UserRegister>
                <Aside></Aside>
                
            </section>
        </div>
    );
}

export default UsersDashboard;


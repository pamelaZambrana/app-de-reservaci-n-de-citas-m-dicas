import React from 'react';
import Aside from '../../components/containers/aside';
import UserRegister from '../../components/containers/userRegister';
import Navbar from "../../components/pure/navbar"
const UsersDashboard = ({ users, setUsers}) => {
    return (
        <div>
            <UserRegister
                users={ users }
                setUsers = { setUsers }
            ></UserRegister>
        </div>
    );
}

export default UsersDashboard;


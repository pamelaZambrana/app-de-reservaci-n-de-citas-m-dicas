import React from 'react';
import UserForm from '../../components/forms/userForm';

const UserFormPage = ({addNewUser}) => {
    return (
        <div>
            <UserForm
                addNewUser={ addNewUser }
            ></UserForm>
        </div>
    );
}

export default UserFormPage;

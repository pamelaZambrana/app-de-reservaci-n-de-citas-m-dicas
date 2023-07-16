import React from 'react';
import CustomerForm from '../../components/forms/custormerForm';
import { useAuth } from '../../components/pure/auth';

const CustomerFormPage = () => {
    const auth=useAuth();
    console.log("userInfo4",auth.user);
    return (
        <div>
            <CustomerForm
            ></CustomerForm>
        </div>
    );
}

export default CustomerFormPage;

import React from 'react';
import CustomerForm from '../../components/forms/custormerForm';

const CustomerFormPage = ({addNewCustomer}) => {
    return (
        <div>
            <CustomerForm
                addNewCustomer={ addNewCustomer }
            ></CustomerForm>
        </div>
    );
}

export default CustomerFormPage;

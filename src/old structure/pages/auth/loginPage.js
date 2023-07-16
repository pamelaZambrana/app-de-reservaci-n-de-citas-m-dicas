import React from 'react';
import LoginForm from '../../components/forms/loginForm';

const LoginPage = ({logged}) => {
    return (
        <div className="App">
            <LoginForm 
                logged={logged}
            ></LoginForm>
        </div>
    );
}

export default LoginPage;

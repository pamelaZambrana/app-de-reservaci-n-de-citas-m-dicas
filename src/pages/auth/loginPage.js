import React from 'react';
import LoginForm from '../../components/forms/loginForm';

const LoginPage = ({login, setLogin}) => {
    console.log(login)
    return (
        <div className='h-100'>
            <LoginForm 
                login={login}
                setLogin={setLogin}
            ></LoginForm>
        </div>
    );
}

export default LoginPage;

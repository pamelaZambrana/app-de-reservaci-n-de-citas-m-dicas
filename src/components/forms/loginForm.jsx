import React, {  useRef, useState } from 'react';
import { useNavigate } from 'react-router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { loginRequest } from '../../requests/userRequest';

const LoginForm = () => {
    /* ---- using ref to save the changes ---- */
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();
    /* ---- using globalState ---- */

    /*---- using localstate ----- */
    const [error, setError] = useState(null);
    async function login(values){
        /* await loginRequest(values)
        .then(response => {
            const user = {
                id : response.data.body.id,
                name : response.data.body.name,
                rol : response.data.body.rol,
                token : response.data.body.token,
            }
            localStorage.setItem("user", `${JSON.stringify(user)}`);
            console.log(response);
           dispatch({
                type : TYPES.INIT_SESSION,
            }); 
          dispatch({
                type : TYPES.SET_USER,
                payload: user,
            }) 
            setError(null);
        })
        .catch(err => {
            console.log("error",err.response.data.message);
            setError(err.response.data.message);
            console.log(error)
        }); */
        navigate("private");  
    };
    function userlogin(e){
        e.preventDefault();
        const values = {
            email : emailRef.current.value,
            password : passwordRef.current.value,            
        };
        login(values);

    };
    return (
        <div className='principal-section'>
            <form onSubmit={ userlogin } className='login-form'>
                <h1>Iniciar sesión</h1>
                {
                    error !== null 
                    ?
                    <p className='error-message'>{ `${error}` }</p>
                    :
                    null
                }
                <div className='form-input'>
                    <label htmlFor="email" className='input-label'>Email</label>
                    <input 
                        type='email'    
                        id='email' 
                        name='email' 
                        required 
                        className='input'
                        ref={ emailRef }
                        autoFocus
                    />
                </div>
                <div className='form-input'>
                    <label htmlFor="password" className='input-label'>Contraseña</label>
                    <input 
                        type='password' 
                        id='password' 
                        name='password' 
                        required 
                        className='input'
                        ref={ passwordRef }
                    />

                </div>
                <div className='buttons-container'>
                    <button type='submit' className='submit-button'> Ingresar </button>
                </div>
            </form>
            
        </div>
    );
}

export default LoginForm;



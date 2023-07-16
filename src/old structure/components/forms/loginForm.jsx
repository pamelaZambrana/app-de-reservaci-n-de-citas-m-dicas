import React from 'react';
import "../../styles/loginStyles.css";
import { useNavigate } from 'react-router-dom';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { login, loginUser } from '../../requests/userRequest';
import { useAuthContext } from '../pure/context/auth';

const loginSchema=Yup.object().shape(
    {
        email: Yup
                .string()
                .required("User is required"),

        password: Yup
                    .string()
                    .required("Password is required")
    }
);

const LoginForm = () => {
    const {login}=useAuthContext();
    let navigate=useNavigate();
    const initialCredentials={
        email:"",
        password:""
    };
    //const navigate=useNavigate();
    async function loginToApi(values){
        await loginUser(values)
                            .then(ans=>{
                                console.log(ans.data);
                                sessionStorage.setItem("name", ans.data.body.name);   
                                sessionStorage.setItem("rol",  ans.data.body.rol); 
                                sessionStorage.setItem("token",ans.data.body.token);
                                login();
                                navigate("/private/home/");
                                
                            })
                            .catch(error=>{
                                console.log(error)
                            })
        console.log(values);
    }
    return (
        <div className='login-container '>
            <Formik
                
                initialValues={
                    initialCredentials
                    }
                validationSchema={ loginSchema }
                onSubmit={
                    
                    async (values) => {
                    alert(JSON.stringify(values, null, 2));
                    loginToApi(values);
                    
                    }
                }
                >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <Form className="card login-form">
                        <h2>Inciar sesión: </h2>
                        <hr className='w-100'/>
                        <div className="w-100 mt-3 d-flex gap-3 align-items-center">
                            <label className="form-label">Email:</label>
                            <input
                                type="text"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                className="w-100 form-control"
                            />
                        
                        </div>
                        {
                            errors.email && touched.email && 
                            (
                                <ErrorMessage className="form-text d-flex" name="email" component="div"></ErrorMessage>
                            )
                        }
                        <div className="w-100 mt-3 d-flex gap-3 align-items-center">
                            <label className="form-label">Contraseña:</label>
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                className="form-control"
                            />
                            
                        </div>
                        {
                            errors.password && touched.email && 
                            (
                                <ErrorMessage className="form-text" name="password" component="div"></ErrorMessage>
                            )
                        }
                        
                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="btn btn-primary login-button"
                        >
                            Siguiente
                        </button>
                        
                    </Form>
                )}
            </Formik>
        </div>
    )};



export default LoginForm;

/* await login(values)
                            .then(ans=>{
                                console.log(ans)
                            })
                            .catch(error=>{
                                console.log(error)
                            }) */
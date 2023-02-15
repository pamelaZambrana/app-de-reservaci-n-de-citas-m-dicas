import React from 'react';
import "../../styles/loginStyles.css";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";

const loginSchema=Yup.object().shape(
    {
        userName: Yup
                .string()
                .required("User is required"),

        password: Yup
                    .string()
                    .required("Password is required")
    }
);

const LoginFormik = () => {
    const initialCredentials={
        userName:"",
        password:""
    };
    return (
        <div className='h-100 container d-flex justify-content-center align-items-center '>
            <Formik
                
                initialValues={
                    initialCredentials
                    }
                validationSchema={ loginSchema }
                onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 1000));
                alert(JSON.stringify(values, null, 2));
                }}
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
                    <Form className="p-3 border border-3 rounded">
                        <h2>Inciar sesión: </h2>
                        <div className="mt-3 d-flex gap-3 align-items-center">
                            <label className="form-label">Usuario:</label>
                            <input
                                type="text"
                                name="userName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.userName}
                                className="form-control"
                            />
                        
                        </div>
                        {
                            errors.userName && touched.userName && 
                            (
                                <ErrorMessage className="form-text d-flex" name="userName" component="div"></ErrorMessage>
                            )
                        }
                        <div className="mt-3 d-flex gap-3 align-items-center">
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
                            errors.password && touched.userName && 
                            (
                                <ErrorMessage className="form-text" name="password" component="div"></ErrorMessage>
                            )
                        }
                        <div className="mt-3">
                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="btn btn-primary"
                            >
                                Siguiente
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )};



export default LoginFormik;
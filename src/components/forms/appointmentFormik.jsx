
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PropTypes from 'prop-types';

import { ESPECIALIDAD } from "../../models/especialidad";
import { Appointment } from "../../models/AppointmentClass";

const AppointmentFormik = ({ add, lengthList  }) => {
    const initialValues=new Appointment("","",false,ESPECIALIDAD.General) ;

    /* const levelRef=useRef(LEVELS.NORMAL); */

    const newTaskSchema=Yup.object().shape(
        {
            name: Yup
                        .string()   
                        .required("Nombre del paciente requerido"),
            description: Yup
                        .string(),
            specialty: Yup
                        .string()      
        }
    )
/* 
    function addTask(values){
        add(values);
    } */

    
    return (
        <div>
             <h1>Create a task with Formik</h1>
            <Formik
                initialValues={
                    initialValues
                }
                validationSchema={ newTaskSchema }//Yup validation schema
                //onSubmit={ addTask }            
            >
            {/* //we get props from Formik */}
            {({   values,
                touched, 
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                })=>(
                    <Form>
                        <label htmlFor="name">Nueva cita médica</label>
                        <Field
                            id="name"
                            className="form-control form-control-lg"
                            name="name"
                            placeholder="Nombre del paciente"
                        />
                        {/* Email errors */}
                        {
                            errors.name && touched.name && 
                            (
                                <ErrorMessage name="name" component="div"></ErrorMessage>
                            )
                        }
                        
                        <label htmlFor="description">Task description</label>
                        <Field
                            id="description"
                            className="form-control form-control-lg"
                            name="description"
                            placeholder="Task description"
                        />
                        {/* Password errors */}
                        {
                            errors.description && touched.description && 
                            (
                                <ErrorMessage name="description" component="div"></ErrorMessage>
                            )
                        }
                        <label >Importance</label>
                        <Field
                            id="specialty"
                            as="select"
                            className="form-control form-control-lg"
                            name="level"
                            selection="true"
                        >
                            <option 
                                value ={ ESPECIALIDAD.General }
                            >General</option>
                            <option 
                                value ={ ESPECIALIDAD.Fisioterapira }
                            >Fisioterapira</option>
                            <option 
                                value ={ ESPECIALIDAD.Odontología }
                            >Odontología</option>
                        </Field>

                        <button 
                            type="submit"
                            className='btn btn-success btn-lg ms-2'
                        >Siguiente</button>

                        {(lengthList > 0) ? "Add new task" : "Create your first task"}
                    </Form>
                )}
                
            </Formik>
        </div>
    );
}

AppointmentFormik.propTypes={
    add: PropTypes.func.isRequired,
    lengthList: PropTypes.number.isRequired
}
export default AppointmentFormik;


import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PropTypes from 'prop-types';
import { DOCTOR, ESPECIALIDAD } from "../../models/especialidad";
import { Appointment } from "../../models/AppointmentClass";
import "../../styles/newAppointment.css";

const AppointmentFormik = ({ add, lengthList  }) => {
    const initialValues=new Appointment("","","","",ESPECIALIDAD.General,"","", false) ;
    /* const levelRef=useRef(LEVELS.NORMAL); */

    const newTaskSchema=Yup.object().shape(
        {
            name: Yup
                        .string()   
                        .required("Nombre del paciente requerido"),
            cellphone: Yup
                        .string()
                        .required("Número de contacto requerido"),
            doctor: Yup.string(),
            specialty: Yup
                            .string()
                            .required("Nombre del especialista requerido"),
            date: Yup
                            .string()
                            .required("Fecha de consulta requerida"),
            hour: Yup
                            .string()
                            .required("Hora de consulta requerida"),  
            
        }
    )

    function addTask(){
        console.log("holi");
    }

    
    return (
        <div className="appointment-container" >
             <h3>NUEVA CITA MÉDICA</h3>
            <Formik
                initialValues={
                    initialValues
                }
                validationSchema={ newTaskSchema }//Yup validation schema
                onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 1000));
                alert(JSON.stringify(values, null, 2));
                addTask()
                }}

            >
            {/* //we get props from Formik */}
            {({   values,
                touched, 
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                })=>(
                    <Form className="appointment-form">
                        <fieldset className="appointment-section">
                            <h5 className="appointment-section-label">Datos del paciente</h5>
                            <hr></hr>
                            <label className="appointment-label" htmlFor="name">Nombre completo: </label>
                            <Field
                                id="name"
                                className="form-control"
                                name="name"
                            />
                            {/* Email errors */}
                            {
                                errors.name && touched.name && 
                                (
                                    <ErrorMessage name="name" component="div"></ErrorMessage>
                                )
                            }
                            <label className="appointment-label" htmlFor="name">Celular: </label>
                            <Field
                                id="cellphone"
                                className="form-control"
                                name="cellphone"
                            />
                            {/* Email errors */}
                            {
                                errors.cellphone && touched.cellphone && 
                                (
                                    <ErrorMessage name="cellphone" component="div"></ErrorMessage>
                                )
                            }                            

                        </fieldset>
                        <fieldset className="appointment-section">
                            <h5 className="appointment-section-label">Datos de la cita médica</h5>
                            <hr></hr>
                            <label className="appointment-label" htmlFor="datetime">Fecha: </label>
                            <Field
                                id="date"
                                className="form-control"
                                type="date"
                                name="datetime"
                            />
                            {/* Email errors */}
                            {
                                errors.date && touched.date && 
                                (
                                    <ErrorMessage name="date" component="div"></ErrorMessage>
                                )
                            }

                            <label className="appointment-label" htmlFor="name">Hora: </label>
                            <Field
                                id="hour"
                                type="time"
                                list="hour1"
                                className="form-control"
                                name="hour"
                            />
                            <datalist id="hour1">
                                <option>08:30</option>
                                <option>09:00</option>
                                <option>09:30</option>
                                <option>10:00</option>
                                <option>10:30</option>
                                <option>11:00</option>
                                <option>11:30</option>
                                <option>12:00</option>
                                <option>12:30</option>
                                <option>13:00</option>
                                <option>13:30</option>
                                <option>14:00</option>
                                <option>14:30</option>
                                <option>15:00</option>
                                <option>15:30</option>
                                <option>16:00</option>
                                <option>16:30</option>
                                <option>17:00</option>
                                <option>17:30</option>
                                <option>18:00</option>
                                <option>18:30</option>
                                <option>19:00</option>
                                <option>19:30</option>
                                <option>20:00</option>
                                <option>20:30</option>
                                <option>21:00</option>
                            </datalist>
                            {/* Hour errors */}
                            {
                                errors.hour && touched.hour && 
                                (
                                    <ErrorMessage name="hour" component="div"></ErrorMessage>
                                )
                            }
                            <label className="appointment-label" >Especialista</label>
                            <Field
                                id="doctor"
                                as="select"
                                className="form-control "
                                name="doctor"
                                selection="true"
                            >
                                <option 
                                    value ={ DOCTOR.Juanito }
                                >Juanito</option>
                                <option 
                                    value ={ DOCTOR.Juanita }
                                >Juanita</option>
                                <option 
                                    value ={DOCTOR.OssoDeBernoulli }
                                >Osso de Bernoulli</option>
                            </Field>
                            {/* Specialist errors */}
                            {
                                errors.doctor && touched.doctor && 
                                (
                                    <ErrorMessage name="doctor" component="div"></ErrorMessage>
                                )
                            }
                            <label className="appointment-label" >Especialidad</label>
                            <Field
                                id="specialty"
                                as="select"
                                className="form-control"
                                name="specialty"
                                selection="true"
                            >
                                <option 
                                    value ={ ESPECIALIDAD.General }
                                >General</option>
                                <option 
                                    value ={ ESPECIALIDAD.Fisioterapia }
                                >Fisioterapira</option>
                                <option 
                                    value ={ ESPECIALIDAD.Odontología }
                                >Odontología</option>
                                <option 
                                    value ={ ESPECIALIDAD.Fonoaudiologia }
                                >Fonoaudiología</option>
                                <option 
                                    value ={ ESPECIALIDAD.Psicologia }
                                >Psicología</option>
                                <option 
                                    value ={ ESPECIALIDAD.Psicopedagogia}
                                >Psicopedagogía</option>
                                <option 
                                    value ={ ESPECIALIDAD.TerapiaOcupacional }
                                >Terapia Ocupacional</option>
                            </Field>
                            {/* Specialty errors */}
                            {
                                errors.specialty && touched.specialty && 
                                (
                                    <ErrorMessage name="specialty" component="div"></ErrorMessage>
                                )
                            }
                        </fieldset>

                        <button 
                            type="submit"
                            className='btn btn-success appointment-submit-button '
                        >Aceptar</button>

                        {/* {(lengthList > 0) ? "Add new task" : "Create your first task"} */}
                        { isSubmitting ? (<p>Sending your credentials!...</p>) : null}
                    </Form>
                )}
                
            </Formik>
        </div>
    );
}

/* AppointmentFormik.propTypes={
    add: PropTypes.func.isRequired,
    lengthList: PropTypes.number.isRequired
} */
export default AppointmentFormik;

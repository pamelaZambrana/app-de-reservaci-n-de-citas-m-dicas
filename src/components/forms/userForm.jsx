import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AVAILABILITY, BRANCHES, ESPECIALIDAD } from '../../models/options';
import { User } from '../../models/users';
import { saveNewUser } from '../../requests/userRequest';
import "../../styles/newUser.css";

const UserForm = () => {
    /* Referencias para los inputs */
    const nameRef = useRef("");
    const specialtyRef = useRef(ESPECIALIDAD.General);
    const phoneRef = useRef("");
    const branchRef = useRef("");
    const avaRef = useRef(AVAILABILITY.morning);
    const addressRef = useRef("");
    const emailRef = useRef("");
    const passwordRef = useRef("");

    const navigate=useNavigate();
    /* submit button */
    async function  addUser(e){
        e.preventDefault();
        const values=new User(
            `${nameRef.current.value}`,
            specialtyRef.current.value,
            branchRef.current.value,
            avaRef.current.value,
            phoneRef.current.value,
            addressRef.current.value,
            emailRef.current.value,
            passwordRef.current.value,
        )
        alert(JSON.stringify(values));
        
        await saveNewUser(values)
                        .then( ans => {
                            console.log(ans)
                        })
                        .catch( error => {
                            console.log(error)
                        })
        navigate("/tablaUsuarios");
        /* TODO: redireccionar a tabla de usuarios */
        /* navigate("/"); */
        console.log("sending values", values)
    }
    return (
        <div className='user-container'>
            <h1>Registro de nuevo usuario</h1>
            <form 
                    className="user-form"
                    onSubmit={ addUser }
                >
                    <fieldset className="card user-section">
                        <h5 className="user-section-label">Datos del trabajador</h5>
                        <hr></hr>
                        <label className="user-label" htmlFor="name">Nombre completo: </label>
                        <input
                            id="name"
                            ref={ nameRef }
                            type="text"
                            required
                            className="form-control"
                            name="name"
                            placeholder="Ej. Andrés Cristian Gómez Pérez"
                            autoFocus  
                        />
                        <label className="user-label" >Especialidad</label>
                        <select
                            id="specialty"
                            ref={ specialtyRef }
                            type="text"
                            required
                            className="form-select"
                            name="specialty"
                        >
                            <option value="" disabled selected hidden>Elija una especialidad</option>
                            <option 
                                value ={ ESPECIALIDAD.General }
                            >General</option>
                            <option 
                                value ={ ESPECIALIDAD.Fisioterapia }
                            >Fisioterapia</option>
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
                        </select>
                        <label className="user-label" htmlFor="branch">Sucursal: </label>
                        <select
                            id="branch"
                            className="form-select"
                            ref={ branchRef }
                            type="text"
                            name="branch"
                            required 
                        >
                            <option value="" disabled selected hidden>Elija una sucursal</option>
                            <option value={ BRANCHES.EA }>El Alto</option>
                            <option value={ BRANCHES.LP }>La Paz</option>
                        </select>
                        <label className="user-label" htmlFor="availability">Disponibilidad: </label>
                        <select
                            id="availability"
                            ref={ avaRef }
                            type="text"
                            required
                            className="form-select"
                            name="availability" 
                        >
                            <option value="" disabled selected hidden>Elija los turnos de atención </option>
                            <option value={ AVAILABILITY.morning }>Turno mañana</option>
                            <option value={ AVAILABILITY.evening }>Turno tarde</option>
                            <option value={ AVAILABILITY.ambos }>Mañana y tarde</option>
                        </select>
                        <label className="user-label" htmlFor="phone">Tel/Cel.: </label>
                        <input
                            id="phone"
                            type="text"
                            required
                            ref={ phoneRef }
                            className="form-control"
                            name="phone"
                            placeholder="Ej. 71298655"
                            minLength="7"
                            maxLength="8" 
                        />
                        <label className="user-label" htmlFor="addres">Dirección: </label>
                        <input
                            id="address"
                            ref={ addressRef }
                            type="text"
                            required
                            className="form-control"
                            name="address"
                        />
                        <label className="user-label" htmlFor="email">E-mail: </label>
                        <input
                            id="email"
                            ref={ emailRef }
                            type="email"
                            required
                            className="form-control"
                            name="email"
                        />
                        <label className="user-label" htmlFor="password">Contraseña: </label>
                        <input
                            id="password"
                            ref={ passwordRef }
                            type="password"
                            required
                            className="form-control"
                            name="password"
                            minLength="6"
                            maxLength="12" 
                        />
                    </fieldset>
                    <div className="buttons-container" >
                        <button 
                            type="submit"
                            className='btn btn-primary user-submit-button'
                        >Guardar</button>
                    </div>

                </form>
        </div>
    );
}

export default UserForm;

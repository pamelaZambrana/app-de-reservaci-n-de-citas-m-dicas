import React, {useState, useEffect} from 'react';
import { getUsers } from '../../requests/userRequest';
import "../../styles/agendaStyles.css";
import UserTable from '../tabs/UserTable';


const UserRegister = () => {
    /* Estados de UserRegister */
    const [users, setUsers] = useState([]);
    const [searchUser, setSearchUser] = useState("");
    const [loading, setLoading] = useState(false);

    /* Petición */
    async function usersRequest(){
        await getUsers()
        .then(ans=>{
            console.log(ans);
            setLoading(true);
            setUsers(ans.data.body);
            
        })
        .catch(error=>{
            console.log(error)
        })
    };   
    
    
    /* borrando citas */
    function removeUser(user){
        const index=users.indexOf(user);
        console.log("index",index);
        const tempUsers=[...users];
        console.log("prevusers:",tempUsers);
        tempUsers.splice(index,1);
        setUsers(tempUsers);
    }
    
    /* Desplegando la tabla */
    let usersTable;
    if(users.length>0){
        usersTable=
            <UserTable 
                usersList={ users }
                remove={ removeUser }
            ></UserTable>
     }else if (users.length===0 && !loading){
       usersTable = (
       <div>
            <h4>No hay trabajadore registrados.</h4>
            <h5>Crea un nuevo perfil de trabajador.</h5>
       </div>
       ) 
    };

    

    useEffect(() => {
        usersRequest();
    }, []);
    return (    
            <div className='card agenda'>
            <div className='card-header d-flex'>
                <h1>Registro de Trabajadores</h1>
                <button
                    onClick={usersRequest}
                >Actualizar</button>
            </div>
                <div 
                    className='card-body' 
                    style={ {position:"relative", height:"458px"}} 
                    data-mdb-perfect-scrollbar="true"
                >
                    { !loading 
                    ? 
                    <div className="d-flex justify-content-center">
                        <p>Cargando registro de trabajadores</p>
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div> 
                    : usersTable }
                        
                </div>
                
            </div>
    )
}

export default UserRegister;

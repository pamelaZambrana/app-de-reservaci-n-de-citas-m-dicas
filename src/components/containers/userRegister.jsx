import React, {useState, useEffect} from 'react';
import { getUsers } from '../../requests/userRequest';
import "../../styles/agendaStyles.css";
import UserTable from '../tabs/UserTable';


const UserRegister = () => {
    /* Estados de UserRegister */
    const [users, setUsers] = useState([]);
    const [searchUser, setSearchUser] = useState("");
    const [loading, setLoading] = useState(true);

    /* Petición */
        async function usersRequest(){
            await getUsers()
                        .then(ans=>{
                            console.log(ans);
                            setUsers(ans.data.body)

                        })
                        .catch(error=>{
                            console.log(error)
                        })
        };
    
    /* Buscando por usuario */
    
    
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
    if(users.length>0 && !loading){
        usersTable=
            <UserTable 
                usersList={ users }
                remove={ removeUser }
            ></UserTable>
     }else{
       usersTable = (
       <div>
            <h4>No hay trabajadore registrados.</h4>
            <h5>Crea un nuevo perfil de trabajador.</h5>
       </div>
       ) 
    };

    

    useEffect(() => {
        
        setLoading(false);
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
                    { loading ? <p>Cargando lista de trabajadores</p> : usersTable }
                </div>
                
            </div>
    )
}

export default UserRegister;

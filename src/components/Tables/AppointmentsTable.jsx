import React, {useState, useEffect, useContext} from 'react';
import TableHeader from './common/TableHeader';
import { tablesList } from './utilities/characteristicsList';
import TableContent from './common/TableContent';

const worker1 = {
    _id: 12336,
    branch : "la paz",
    sch : "8:30",
    name : "pamela",     
    cellphone : "69802366",       
    doctor : "Bellota", 
    specialty: "Psicomotricidad", 
};
const worker2 = {
    _id: 12337,
    branch : "la paz",
    sch : "8:30",
    name : "pamela",     
    cellphone : "69802366",       
    doctor : "Bellota", 
    specialty: "Psicomotricidad",
}
const AppointmentsTable = () => {
    /* ----using local state ----- */
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setAppointments([worker1, worker2]); // debe ir dentro de la función request .then()
        //customerRequest();
        
    }, []);
    return (    
        <div className='table-container'>
        {
        !loading ?
        <>
            <TableHeader
                header = { tablesList[2] } 
            ></TableHeader>
            {
                appointments.length > 0 ?
                <TableContent
                    contentList = { appointments }
                    properties = { tablesList[2].properties }
                ></TableContent>
                :
                <p>No hay registros en esta fecha...</p>
            }
        </>
        :
        <p>Cargando...</p>
    }
        </div>
        )
    }
    
    export default AppointmentsTable;

    // {
    //     "message": 19,
    //     "body": [
    //         {
    //             "_id": "6425f570ed7bca92b3591052",
    //             "name": "Pamela Clara Zambrana Foronda",
    //             "cellphone": 69802366,
    //             "doctor": "Ana Foronda",
    //             "specialty": "Psicopedagogía",
    //             "dateTime": "2023-03-31T13:30",
    //             "branch": "el alto",
    //             "complete": false,
    //             "characteristic": "reservado",
    //             "__v": 0
    //         },
    //         {
    //             "_id": "64263d6f10f1a08a309b9a67",
    //             "name": "Gabriela Raquel Rodríguez",
    //             "cellphone": 78532144,
    //             "doctor": "Ana Foronda",
    //             "specialty": "Psicopedagogía",
    //             "dateTime": "2023-03-31T08:30",
    //             "branch": "el alto",
    //             "complete": false,
    //             "characteristic": "reservado",
    //             "__v": 0
    //         },
    //         {
    //             "_id": "6426ff8e9b7d9852b3e9e39c",
    //             "name": "Bellota Saltarina Delgado",
    //             "cellphone": 2915952,
    //             "doctor": "Pepito Calvo",
    //             "specialty": "Fisioterapia y Psicomotricidad",
    //             "dateTime": "2023-03-31T16:30",
    //             "branch": "el alto",
    //             "complete": false,
    //             "characteristic": "reservado",
    //             "__v": 0
    //         },
    //         {
    //             "_id": "642700249b7d9852b3e9e3a9",
    //             "name": "Bellota Saltarina Delgado",
    //             "cellphone": 2915952,
    //             "doctor": "Ana Foronda",
    //             "specialty": "Psicopedagogía",
    //             "dateTime": "2023-03-31T17:00",
    //             "branch": "el alto",
    //             "complete": false,
    //             "characteristic": "reservado",
    //             "__v": 0
    //         },
    //         {
    //             "_id": "642739c45188316bd1494ed1",
    //             "name": "Gabriela Raquel Rodríguez",
    //             "cellphone": 65203147,
    //             "doctor": "Brosso Bross",
    //             "specialty": "Psicología",
    //             "dateTime": "2023-03-31T19:00",
    //             "branch": "el alto",
    //             "complete": false,
    //             "characteristic": "reservado",
    //             "__v": 0
    //         },
    //         {
    //             "_id": "642739ed6446c077b6434d28",
    //             "name": "Pamela Clara Zambrana Foronda",
    //             "cellphone": 44561239,
    //             "doctor": "Brosso Bross",
    //             "specialty": "Psicología",
    //             "dateTime": "2023-03-31T12:00",
    //             "branch": "El Alto",
    //             "complete": false,
    //             "characteristic": "reservado",
    //             "__v": 0
    //         },
    //         {
    //             "_id": "64273a285188316bd1494edb",
    //             "name": "Pamela Clara Zambrana Foronda",
    //             "cellphone": 44561239,
    //             "doctor": "Brosso Bross",
    //             "specialty": "Psicología",
    //             "dateTime": "2023-03-31T14:00",
    //             "branch": "El Alto",
    //             "complete": false,
    //             "characteristic": "reservado",
    //             "__v": 0
    //         },
    //         {
    //             "_id": "642aefddfc18300b4720d006",
    //             "name": "Pamela Clara Zambrana Foronda",
    //             "cellphone": 44561239,
    //             "doctor": "Ana Foronda",
    //             "specialty": "Psicopedagogía",
    //             "dateTime": "2023-04-04T10:00",
    //             "branch": "El Alto",
    //             "complete": false,
    //             "characteristic": "reservado",
    //             "__v": 0
    //         },
    //         {
    //             "_id": "642b34b47889721c9c96c501",
    //             "name": "Gabriela Raquel Rodríguez",
    //             "cellphone": 65203147,
    //             "doctor": "Brosso Bross",
    //             "specialty": "Psicología",
    //             "dateTime": "2023-04-04T11:00",
    //             "branch": "El Alto",
    //             "complete": false,
    //             "characteristic": "reservado",
    //             "__v": 0
    //         },
    //         {
    //             "_id": "64322deeaf7067ab5835225b",
    //             "name": "Pamela Clara Zambrana Foronda",
    //             "cellphone": 72592124,
    //             "doctor": "Tatiana Mayra Blanco Balboa",
    //             "specialty": "fisioterapia",
    //             "dateTime": "2023-02-12",
    //             "branch": "El alto",
    //             "complete": false,
    //             "characteristic": "reservado",
    //             "__v": 0
    //         },
    //         {
    //             "_id": "643245e47ed439bfcdd57de4",
    //             "name": "Bellota Saltarina Delgado",
    //             "cellphone": 2915952,
    //             "doctor": "Brosso Bross",
    //             "specialty": "Psicología",
    //             "dateTime": "2023-04-15T15:30",
    //             "branch": "El Alto",
    //             "complete": false,
    //             "characteristic": "reservado",
    //             "__v": 0
    //         },
    //         {
    //             "_id": "643246197ed439bfcdd57dee",
    //             "name": "Bellota Saltarina Delgado",
    //             "cellphone": 44561239,
    //             "doctor": "Brosso Bross",
    //             "specialty": "Psicología",
    //             "dateTime": "2023-04-10T10:30",
    //             "branch": "El Alto",
    //             "complete": false,
    //             "characteristic": "reservado",
    //             "__v": 0
    //         },
    //         {
    //             "_id": "64324721bc3df1795970fc3a",
    //             "name": "Bellota Saltarina Delgado",
    //             "cellphone": 2915952,
    //             "doctor": "Brosso Bross",
    //             "specialty": "Psicología",
    //             "dateTime": "2023-04-12T14:00",
    //             "branch": "El Alto",
    //             "complete": false,
    //             "characteristic": "reservado",
    //             "__v": 0
    //         },
    //         {
    //             "_id": "644bf56b53c58f75fdc98cc6",
    //             "name": "Bellota Saltarina Delgado",
    //             "cellphone": 2915952,
    //             "doctor": "Tatiana Mayra Blanco Balboa",
    //             "specialty": "fisioterapia",
    //             "dateTime": "2023-02-12",
    //             "branch": "El Alto",
    //             "complete": false,
    //             "characteristic": "modificado",
    //             "__v": 0
    //         },
    //         {
    //             "_id": "644c35075516662c742e3ab3",
    //             "name": "Bellota Saltarina Delgado",
    //             "cellphone": 2915952,
    //             "doctor": "Ronal Blanco",
    //             "specialty": "Fonoaudiología",
    //             "dateTime": "2023-04-29T20:00",
    //             "branch": "El Alto",
    //             "complete": false,
    //             "characteristic": "reservado",
    //             "__v": 0
    //         },
    //         {
    //             "_id": "64b36edf0aac6f7dfa486452",
    //             "name": "Bellota Saltarina Delgado",
    //             "cellphone": 2915952,
    //             "doctor": "Cristian Alvarez Aguilar",
    //             "specialty": "Fonoaudiología",
    //             "dateTime": "2023-04-28T20:30",
    //             "branch": "La Paz",
    //             "complete": false,
    //             "characteristic": "reservado",
    //             "__v": 0
    //         },
    //         {
    //             "_id": "64b81a52a3d334988d882211",
    //             "name": "Bellota Saltarina Delgado",
    //             "cellphone": 2915952,
    //             "doctor": "Stampy Bebé",
    //             "specialty": "Psicopedagogía",
    //             "dateTime": "2023-07-24T15:00",
    //             "branch": "El Alto",
    //             "complete": false,
    //             "characteristic": "reservado",
    //             "__v": 0
    //         },
    //         {
    //             "_id": "64bc8772798c5d4f6cf62b8b",
    //             "name": "Blanca Vaquita",
    //             "cellphone": 71539647,
    //             "doctor": "Ana Foronda",
    //             "specialty": "Psicopedagogía",
    //             "dateTime": "2023-12-25T15:00",
    //             "branch": "El Alto",
    //             "complete": false,
    //             "characteristic": "reservado",
    //             "__v": 0
    //         },
    //         {
    //             "_id": "64bc87ca5758ca9761a86ae0",
    //             "name": "Cristian Alvarez Jara",
    //             "cellphone": 72514859,
    //             "doctor": "Ana Foronda",
    //             "specialty": "Psicopedagogía",
    //             "dateTime": "2023-08-06T9:00",
    //             "branch": "El Alto",
    //             "complete": false,
    //             "characteristic": "reservado",
    //             "__v": 0
    //         }
    //     ]
    // }
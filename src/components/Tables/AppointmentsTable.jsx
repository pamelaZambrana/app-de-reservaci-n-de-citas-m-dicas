import React, {useState, useEffect, useContext} from 'react';
import TableHeader from './common/TableHeader';
import { tablesList } from './utilities/characteristicsList';


const AppointmentsTable = () => {

    return (    
        <div className='table-container'>
            <TableHeader
                header={tablesList[2]}
            ></TableHeader>
        </div>
        )
    }
    
    export default AppointmentsTable;

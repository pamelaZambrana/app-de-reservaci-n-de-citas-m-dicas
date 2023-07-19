import React from 'react';
import RegisterInfo from './RegisterInfo';

const TableContent = ({ entries, workersList, properties }) => {
return (
    <div className='table-content'>
    <table >
        <thead className='table-content-header'>
                <tr>
                {
                    entries.map((entry, index) => (
                        <th key={index} scope="col">{ entry }</th>
                    ))
                }
                </tr>
            </thead>
            <tbody>
                {workersList?.map((worker)=> {
                return (
                    <RegisterInfo
                        key= {worker._id}
                        worker={worker}
                        properties = { properties }
                        //remove={remove}
                    >
                    </RegisterInfo>
                )
            })}                            
            </tbody>
        </table>
    </div>
    );
}

export default TableContent;

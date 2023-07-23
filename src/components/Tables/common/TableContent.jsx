import React from 'react';
import RegisterInfo from './RegisterInfo';

const TableContent = ({ contentList, properties }) => {
return (
    <div className='table-content'>
    <table >
        <thead className='table-content-header'>
                <tr>
                {
                    Object.values(properties).map((entry, index) => (
                        <th key={ index } scope="col">{ entry }</th>
                    ))
                }
                <th>Modificar</th>
                </tr>
            </thead>
            <tbody>
                {contentList?.map((item)=> {
                return (
                    <RegisterInfo
                        key= { item._id }
                        item={ item }
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

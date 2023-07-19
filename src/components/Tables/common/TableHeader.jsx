import React from 'react';

const TableHeader = ({ 
    header,
}) => {
    return (
        <header className='table-header'>
            <div className='table-title-container'>
                <h1>{ header.title.toUpperCase() }</h1>
                <i className="bi bi-arrow-clockwise"></i>
            </div>
            <div className='searcher'>
                <label htmlFor={header.input}>{ header.label }</label>
                <input
                    type = { header.inputType }
                    className={ header.inputClass }
                    id = { header.input }
                    name = { header.input }
                />
            </div>
            
        </header>
    );
}

export default TableHeader;


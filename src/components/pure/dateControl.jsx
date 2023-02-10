import React from 'react';

const DateControl = ({searchDate, setSearchDate,searchByDate}) => {
    const today=new Date().toJSON().slice(0, 10);
    function eventListener(event){
        console.log(event.target.value);
        setSearchDate(event.target.value);
    }
    return (
        <div>
            <h4>Control de citas agendadas</h4>
            <input 
                type='date' 
                onChange={eventListener} 
                value={searchDate}>
            </input>
        </div>
    );
}

export default DateControl;

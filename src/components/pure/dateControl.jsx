import React from 'react';
const DateControl = ({searchDate, setSearchDate,searchByDate}) => {

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
                value={searchDate}
                list="schedule"
            >  
            </input>

        </div>
    );
}

export default DateControl;

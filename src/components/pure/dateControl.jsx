import React from 'react';
const DateControl = ({searchDate, setSearchDate,searchByDate, arrows, setArrows}) => {

    function eventListener(event){
        console.log(event.target.value);
        setSearchDate(event.target.value);
    }

    function gotoTable(){
        if (arrows === 1){
            setArrows(arrows+1);
                        
        }else{
            setArrows(arrows-1);
           
        };
    };

    return (
        
        <div className='w-100 d-flex justify-content-between align-items-center'>
            <div className='d-flex gap-3'>
                <h5>Control de citas agendadas</h5>
                <input 
                    type='date' 
                    onChange={eventListener} 
                    value={searchDate}
                    list="schedule"
                >  
                </input>
            </div>
            <div>

                <button 
                    className='navbar-arrows' 
                    type='button'
                    onClick={ gotoTable }
                >
                    <i className="bi bi-chevron-left arrows"></i>
                </button>
                <button 
                    className='navbar-arrows' 
                    type='button'
                    onClick={ gotoTable }
                >
                    <i className="bi bi-chevron-right arrows"></i>
                </button>

            </div>
            
        </div>
    );
}

export default DateControl;

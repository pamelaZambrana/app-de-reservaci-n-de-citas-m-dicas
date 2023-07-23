
export function schedule(initHour, finalHour){
    let hourArr = [];
    for (let i=initHour; i < finalHour ; i++){
        hourArr.push(`${i}:00`);
        hourArr.push(`${i}:30`)
    };
    hourArr.push(`${finalHour}:00`);
    //console.log(hourArr);
    return hourArr;
};
schedule(8,21);



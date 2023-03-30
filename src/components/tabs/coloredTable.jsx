import React from 'react';
import "../../styles/colorTable.css"

const ColoredTable = ({appointments}) => {
    /* Array de especialidades */
    let specialtyArr=[
    {specialty:"Fisioterapia y Psicomotricidad", color:'#F50C14'},
    {specialty:"Terapia ocupacional",color:'#19A890'}, 
    {specialty:"Psicología",color:'#7DF573'},
    {specialty:"Educación especial",color:'#9CF520'},
    { specialty:"Psicopedagogía",color:'#F587E4'},
    {specialty:"Fonoaudiología",color:'#9A80F5'},
    {specialty:"General",color:'#F5EA22'}]
    /* Creando rangos de horarios */
    let arrFinal=[];
    let arrInitialhour=[];
    let initialTime=480;
    let finalHour;
    let finalMinutes;
    let hour;
    let minutes;
    
    if ((appointments.length>0)&&(appointments[0].branch==="el alto")){
        
        for (let i=0;i<24;i++){
            initialTime=initialTime+30;
            hour=Math.floor(initialTime/60).toString();
            finalHour=Math.floor((initialTime+30)/60).toString();
            minutes=(((initialTime/60)-hour)*60).toString();
            finalMinutes=((((initialTime+30)/60)-finalHour)*60).toString();
            if((minutes==="0")){
                minutes="00";
            };
            if((finalMinutes==="0")){
                finalMinutes="00";
            };

            arrInitialhour.push(`${hour}:${minutes}`);
            /* llenando la tabla */
            const regex=arrInitialhour.map(item=>(new RegExp(item)));
            /* índices de filas */
            let rowIndex=[];
            let colIndex=[];
            for (let j=0;j<appointments.length;j++){
                const client=appointments[j];
                const hour=new Date(client.dateTime).getHours();
                let minutes=new Date(client.dateTime).getMinutes();
                if((minutes===0)){
                    minutes="00";
                };
                const date=`${hour}:${minutes}`;
                console.log("dates:",date)
                if((arrInitialhour[i]===date)){
                    rowIndex.push(j);
                }else if((arrInitialhour[i]!==date)&&(rowIndex.length<1)){
                    rowIndex.push(-1);
                ;
            };
            /* const rowIndex=appointments.findIndex(client=>{
                const date=`${new Date(client.dateTime).getHours()}:${new Date(client.dateTime).getMinutes()}`;
                return(arrInitialhour[i]===date)
            });  */                   
        };
        /* Ordenando las columnas */
             
        for(let k=0; k<rowIndex.length;k++){
            const index=rowIndex[k];
            if(index>-1){
                colIndex.push(specialtyArr.findIndex(spe=>(spe.specialty===appointments[index].specialty)));
            }else{
                colIndex.push(-1);
                if(rowIndex.length>1){
                    rowIndex.splice(k,1);
                    k=k-1;
                };
            };
            
        };
        for(let k=0; k<colIndex.length;k++){
            /* colIndex.sort(function(a,b){
                return(a-b);
            }) */
            if((colIndex.length>1)&&(colIndex[k]===-1)){
                colIndex.splice(k,1);
                k=k-1;
            };
        }
        
        
        arrFinal.push([`${hour}:${minutes}-${finalHour}:${finalMinutes}`,rowIndex,colIndex]);
    };  
        console.log(arrFinal);
        let objectCon={};
        let contents=[];
        for(let i=0; i<arrFinal.length;i++){
            for(let k=0;k<specialtyArr.length;k++){
                const spe=specialtyArr[k].specialty;
                for(let j=0;j<arrFinal[i][1].length;j++){
                    const indexRow=arrFinal[i][1][j];
                    const indexCol=arrFinal[i][2][j];
                    if((indexCol>-1)){
                        if((appointments[indexRow].specialty===spe)){
                            objectCon={content:appointments[indexRow].name,schedule:arrFinal[i][0],style:specialtyArr[indexCol].color};
                            break;
                        }else{
                            objectCon={content:"-",schedule:arrFinal[i][0],style:"#ffffff"};                           
                        } 
                    } else{
                        objectCon={content:"-",schedule:arrFinal[i][0],style:"#ffffff"};;                       
                    };
                }
                contents.push(objectCon); 
            };
        };
        let contentRow=[];
        let rowArr=[];
        let z=7;
        for(let i=0; i<contents.length;i++){
            if(i<z){
                rowArr.push(contents[i]);
            }else if( i===z){
                contentRow.push(rowArr);
                rowArr=[];
                z=z+7;
                rowArr.push(contents[i]);
            }
            
        }
        console.log("secciones" ,contentRow);
        console.log(contentRow[0][0].schedule);
       
            
    return (
        <table className='Table colorTable'>
            <thead>
                <tr>
                    <th scope="col">Horario</th>
                    <th scope="col">Fisioterapia</th>
                    <th scope='col'>Terapia Ocupacional</th>
                    <th scope='col'>Psicología</th>     
                    <th scope='col'>Educación Especial</th>       
                    <th scope='col'>Psicopedagogía</th> 
                    <th scope='col'>Fonoaudiología</th>
                    <th scope='col'>General</th>         
                </tr>
            </thead>
            <tbody>
                {contentRow.map((item, index)=>{
                    return(  
                        <tr key={index} >
                            <th className="colorTable-cell">
                                {item[0].schedule}
                            </th>
                            {item.map((item1,index1)=>{
                                return(
                                    <td 
                                        key={index1} 
                                        style={item1!=="-"?{backgroundColor:`${item1.style}`}:null}
                                        className="colorTable-cell"
                                    >
                                        {item1.content}
                                    </td>
                                )
                            })}
                        </tr>
                    ) 
                })}
                
                                        
            </tbody>
        </table>
    );
    }
}

export default ColoredTable;


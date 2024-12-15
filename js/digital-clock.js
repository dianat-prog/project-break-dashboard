const divClockDigital=document.querySelector('.clock-digital');


function paintClock(){
    const h1Element=document.createElement('h1');
    h1Element.textContent='Son las ...'


    changeTime()
    
    setInterval(changeTime,1000);
   
     

}
function changeTime(){
//Eliminamos los DIvs
    const divRemoveTime =document.getElementById('time'); 
    if (divRemoveTime){ divRemoveTime.remove();    }
   
    const divRemoveDate =document.getElementById('date'); 
    if (divRemoveDate){ divRemoveDate.remove();    }

    const divRemoveMessage =document.getElementById('message'); 
     if (divRemoveMessage){ divRemoveMessage.remove();    }
    
    const divTime=document.createElement('div');
    divTime.id='time';
    divTime.classList.add('time');

    const divDate=document.createElement('div');
    divDate.id='date';
    divDate.classList.add('date');

    const divmessage=document.createElement('div');
    divmessage.id='message';
    divmessage.classList.add('message');
    

    //Empezamos con las horas
    const currentTime= new Date();
    //La fecha tendrá formato DD/MM/AAAA 
    let hour=currentTime.getHours().toString();
    let minutes=currentTime.getMinutes().toString();
    let seconds=currentTime.getSeconds().toString();

    if (hour.length===1){hour='0'+ hour}
    if (minutes.length===1){minutes='0'+ minutes}
    if (seconds.length===1){seconds='0'+ seconds}
    divTime.innerHTML=`${hour}:${minutes}:${seconds}`
    divClockDigital.appendChild(divTime)


      //continuamos con la fecha
      let day=currentTime.getDate().toString().padStart(2,0);
      let month=(currentTime.getMonth()+1).toString().padStart(2,0);
      let year=currentTime.getFullYear().toString();

  
      divDate.innerHTML=`${day}/${month}/${year}`

      divClockDigital.appendChild(divDate)


      //Añadimos los mensajes
      let hoursMinutes = new Date();
   

      let message='';
    let minutos = hoursMinutes.getHours() * 60 + hoursMinutes.getMinutes();

     //  - Desde las 00:01 hasta las 07:00 Es hora de descansar. Apaga y sigue mañana
     if(minutos>  1 && minutos <(7*60 ) ){message='Es hora de descansar. Apaga y sigue mañana'};

      //  - Desde las 07:01 hasta las 12:00 Buenos días, desayuna fuerte y a darle al código
      if(minutos>  (7*60 + 1) && minutos <(12*60 ) ){message='Buenos días, desayuna fuerte y a darle al código'};
     
      //   - Desde las 12:01 hasta las 14:00 Echa un rato más pero no olvides comer
      if(minutos>  (12*60 +1) && minutos <(14*60 ) ){message='Echa un rato más pero no olvides comer'};

    //  - Desde las 14:01 hasta las 16:00 Espero que hayas comido
    if(minutos>  (14*60 +1) && minutos <(16*60 ) ){message='Espero que hayas comido'};

   //   - Desde las 16:01 hasta las 18:00 Buenas tardes, el último empujón
   if(minutos>  (16*60 +1) && minutos <(18*60 ) ){message='Buenas tardes, el último empujón'};

   //   - Desde las 18:01 hasta las 22:00 Esto ya son horas extras, ... piensa en parar pronto
   if(minutos>  (18*60 +1) && minutos <(22*60 ) ){message='Esto ya son horas extras, ... piensa en parar pronto'};

    //  - Desde las 22:01 hasta las 00:00 Buenas noches, es hora de pensar en parar y descansar  
    if(minutos>  (22*60 +1) ){message='Buenas noches, es hora de pensar en parar y descansar '};
    //if(minutos>  (22*60 +1) && minutos <(0) ){message='Buenas noches, es hora de pensar en parar y descansar '};

    divmessage.innerText=message;
      
    let h1Element=divClockDigital.firstElementChild;
 
    if (h1Element.textContent=='Son las...') divClockDigital.appendChild(divmessage);
}

paintClock();
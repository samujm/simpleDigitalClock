var diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
function setTime(){ 
    var date = new Date;
    var day = diasSemana[date.getDay()];
    var hora = addZero(convertHour(date.getHours()));
    var minutos = addZero(date.getMinutes());
    var segundos = addZero(date.getSeconds());
    
    var meridiano = date.getHours() < 12 ? "AM" : "PM";
    document.getElementById("day").innerHTML = day;
    document.getElementById("meridiano").innerHTML = meridiano;
    document.getElementById("clock").innerHTML = hora + " : "+ minutos + " : " + segundos;  
    
    setTimeout(setTime, 1000);
}

function addZero(num){
    if(num < 10){
        return "0"+num;
    }else{
        return num;
    }
}

function convertHour(hour){
    if(hour > 12){
        return hour%=12;
    }else{
        return hour;
    }
}



setTime();
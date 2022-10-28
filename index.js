let peso = parseFloat(prompt("Ingresa tu peso en Kg"))
    let altura = parseFloat (prompt("Ingresa tu altura en Mt con . en lugar de ,"))
    let resultado =(peso/(altura*altura))
    console.log(resultado)
    
    let IMC= resultado
    if (IMC < 18.5) { 
       console.log("Tu peso está por debajo del promedio saludable");
     } else if ((IMC  > 18.5) && (IMC < 24.9)) {
        console.log("Tu peso es saludable"); 
    } else if ((IMC  > 25)  && (IMC  < 29.9)) { 
        console.log("Tienes sobrepeso");
    } else if ((IMC  > 30)  && (IMC  < 39.9)) {
        console.log("Tu peso se considera obesidad. recomendamos consultar con un profesional de la salud");
    } else if(IMC  > 40) { 
        console.log("Recomendamos consultar con un profesional de la salud");
    }
    
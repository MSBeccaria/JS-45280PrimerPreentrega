    let peso = parseFloat(prompt("Ingresa tu peso en Kg"))
    let altura = parseFloat (prompt("Ingresa tu altura en Mt con . en lugar de ,"))
    let resultado =(peso/(altura*altura))
    console.log(resultado)
    
    let imc= resultado
    do{
    if (imc < 18.5) { 
       console.log("Tu peso está por debajo del promedio saludable");
     } else if ((imc  > 18.5) && (imc < 24.9)) {
        console.log("Tu peso es saludable"); 
    } else if ((imc  > 25)  && (imc  < 29.9)) { 
        console.log("Tienes sobrepeso");
    } else if ((imc  > 30)  && (imc  < 39.9)) {
        console.log("Tu peso se considera obesidad. recomendamos consultar con un profesional de la salud");
    } else if(imc  > 40) { 
        console.log("Recomendamos consultar con un profesional de la salud");
    } else if (imc!= undefined){
        console.log("Introduce un valor válido")
    } 
} while (imc!= undefined){
    
}
   

    
    
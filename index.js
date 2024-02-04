//Ejercicio 1 condicional

let velocidad = parseInt (prompt("Bienvenido! Ingrese la velocidad de su auto por la carretera"));

if (velocidad <=39) {
    alert("¡Baja velocidad, Manejas muy lento!");
} else if (velocidad >= 40 && velocidad <=60) {
    alert ("¡Velocidad correspondiente, eres un conductor responsable!");
} else {
    alert("¡Vas demasiado rápido! ¡Ten cuidado!");
}

//Ejercicio 2

console.log ("Bienvenido, esta es la tabla del 3");
let x= 3;
while(x <=30) {
 console.log(x)
 x= x+3
}

// Ejercicio 3, simulador interactivo.
//Calculadora de IVA

let valorNeto = parseInt (prompt("Bievenido a la calculadora de IVA, favor ingresar el precio neto ($) y te entregaremos el valor con IVA. Sin puntos."));
let valorTotal = calcularIva; 

function calcularIva () {
    return valorTotal = (valorNeto * 21 /100) + valorNeto ;
}

calcularIva ();

alert("El valor Neto es: $" + valorNeto + 
" El IVA (21%) es: " + (valorNeto * 21 /100)
     + " El valor total es: $" + valorTotal)
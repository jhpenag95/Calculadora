function takeValue(x){
    document.getElementById('resultado').innerHTML +=x;
}

function clearInput(){
    document.getElementById('resultado').innerHTML ="";
}

function calcularesultado(){
    var result= eval(document.getElementById('resultado').innerHTML);
    document.getElementById('resultado').innerHTML=result;
}

var punto=document.getElementById('punto');
var cero=document.getElementById('cero');
var uno=document.getElementById('uno');
var dos=document.getElementById('dos');
var tres=document.getElementById('tres');
var cuatro=document.getElementById('cuatro');
var cinco=document.getElementById('cinco');
var seis=document.getElementById('seis');
var siete=document.getElementById('siete');
var ocho=document.getElementById('ocho');
var nueve=document.getElementById('nueve');


var sumar=document.getElementById('sumar');
var restar=document.getElementById('restar');
var multiplicar=document.getElementById('multiplicar');
var dividir=document.getElementById('dividir');
var igual=document.getElementById('igual');
var Eliminar=document.getElementById('Eliminar');


/**Números */
cero.addEventListener("click", function(){
    takeValue(0);
})
uno.addEventListener("click", function(){
    takeValue(1);
})
dos.addEventListener("click", function(){
    takeValue(2);
})
tres.addEventListener("click", function(){
    takeValue(3);
})
cuatro.addEventListener("click", function(){
    takeValue(4);
})
cinco.addEventListener("click", function(){
    takeValue(5);
})
seis.addEventListener("click", function(){
    takeValue(6);
})
siete.addEventListener("click", function(){
    takeValue(7);
})
ocho.addEventListener("click", function(){
    takeValue(8);
})
nueve.addEventListener("click", function(){
    takeValue(9);
})

punto.addEventListener("click", function(){
    takeValue(".");
})

/**Operadores */

sumar.addEventListener("click", function(){
    takeValue("+");
})
restar.addEventListener("click", function(){
    takeValue("-");
})
multiplicar.addEventListener("click", function(){
    takeValue("*");
})
dividir.addEventListener("click", function(){
    takeValue("/");
})
igual.addEventListener("click", function(){
    calcularesultado();
})
Eliminar.addEventListener("click", function(){
    clearInput();
})
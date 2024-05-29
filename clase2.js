let btnVerificar = document.getElementById('verificar');

btnVerificar.addEventListener('click',verMensaje)

function esPrimo(numero) {
    if(numero<2||(numero%2==0&&numero!=2))
        return false;
     for(let x=3; x*x<=numero; x+=2)
        if( numero%x==0 )
           return false;
     return true;
 }

function verMensaje(){
let valor = document.getElementById('numero').value;
let resultado = document.getElementById('resultado');
let mensaje = '';

if (esPrimo(valor)) {
mensaje = 'el numero ingresado es primo';
} else {
mensaje = 'el numero ingresado no es primo';
}

resultado.textContent = mensaje;
}
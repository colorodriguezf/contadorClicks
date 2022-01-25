"use strict"; 

let contador = document.getElementById("contarCLicks");
document.getElementById("sumar1").addEventListener("click", sumar1);
document.getElementById("restar1").addEventListener("click", restar1);
document.getElementById("reiniciar").addEventListener("click",reiniciar);

let numero= 0;

function sumar1() {
    numero++;
    contador.innerHTML=numero;
}
const audioSumar = new Audio();
audioSumar.src= "sound-effects/ES_Bubble Blip 2 - SFX Producer.mp3";

function restar1() {
    if (numero>0) {
        numero--;
        contador.innerHTML=numero;
    }
    else {
        document.getElementById("error").innerHTML="El contador no puede ser negativo";
        setTimeout(error,2000);
    }
}
const audioRestar = new Audio();
audioRestar.src="sound-effects/ES_Suction Pop 3 - SFX Producer (mp3cut.net).mp3";
function error() {
        document.getElementById("error").innerHTML="";
    }
function reiniciar() {
        numero=0;
        contador.innerHTML=numero;
    }


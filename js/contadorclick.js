"use strict"; 
function cargarPagina () {
let contador=0;

function contar () {
    contador++;
    document.getElementById("contarCLicks").innerHTML= contador;
}
document.getElementById("btn-contar").addEventListener("click", contar);

}
document.addEventListener("DOMContentLoaded", cargarPagina);
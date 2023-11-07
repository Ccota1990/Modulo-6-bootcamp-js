import{
    setNumeroParaAcertar,
    setNumeroDeIntentos,
} from "./modelo";

import {
    generarNumeroAleatorio,
} from "./motor";

import{
    muestraNumeroDeIntentos,
    handleCompruebaClick,
} from "./ui";


const inicializaNuevaPartida = () =>{
    setNumeroParaAcertar (generarNumeroAleatorio ());
    setNumeroDeIntentos(0);
    muestraNumeroDeIntentos();
};

document.addEventListener("DOMContentLoaded", inicializaNuevaPartida);

   
const botonComprobar = document.getElementById("comprobar");
    botonComprobar.addEventListener("click", handleCompruebaClick);
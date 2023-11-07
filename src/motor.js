import{
    numeroParaAcertar,
    NO_ES_UN_NUMERO,
    EL_NUMERO_ES_MAYOR,
    EL_NUMERO_ES_MENOR,
    ES_EL_NUMERO_SECRETO,
    GAME_OVER_MAXIMO_INTENTOS,
    MAXIMO_INTENTOS,
    numeroDeIntentos,
}
from "./modelo";

export const generarNumeroAleatorio = () => Math.floor(Math.random() * 101);

export const HasSuperadoElNumeroMaximoDeIntentos = () =>{
    return numeroDeIntentos >= MAXIMO_INTENTOS;
}

export const comprobarNumero = (texto) => {
    const numero = parseInt(texto);
    const esUnNumero = !isNaN(numero);
    if (!esUnNumero) {
        return NO_ES_UN_NUMERO;
 }
    if (numero === numeroParaAcertar) {
        return ES_EL_NUMERO_SECRETO;
 }
    if(HasSuperadoElNumeroMaximoDeIntentos()) {
        return GAME_OVER_MAXIMO_INTENTOS;
    }
    
    return numero > numeroParaAcertar ? EL_NUMERO_ES_MAYOR : EL_NUMERO_ES_MENOR;
};
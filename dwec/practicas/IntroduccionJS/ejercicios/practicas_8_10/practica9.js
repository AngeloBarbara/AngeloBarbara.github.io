{
    document.addEventListener("DOMContentLoaded", init)

    function recogerCadena(){
        return prompt("Introduzca una cadena de caracteres");
    }
    
    function esMayusculaMinuscula(cadena){

        if(cadena == cadena.toUpperCase())
            return "La cadena " + cadena + " está formada solo por mayúsculas";
        
        if(cadena == cadena.toLowerCase())
            return "La cadena " + cadena + " está formada solo por minúsculas";
        
        return "La cadena " + cadena + " está formada por mayúsculas y minúsculas";
    }

    function init(){
        let mensaje = document.getElementById("mostrar");
        mensaje.innerHTML = esMayusculaMinuscula(recogerCadena());
    }

}   
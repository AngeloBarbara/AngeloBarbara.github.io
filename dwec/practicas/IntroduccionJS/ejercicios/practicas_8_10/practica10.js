{
    document.addEventListener("DOMContentLoaded", init)
    
    function recogerCadena(){
        return prompt("Introduzca una cadena de caracteres y te diré si es un palindromo");
    }
    
    function esPalindromo(cadena){

        let cadenaMinuscula = cadena.replace(' ','').toLowerCase().split('').join('');
        let cadenaAlReves = cadena.replace(' ','').toLowerCase().split('').reverse().join('');
        //let cadenaAlReves = cadenaTemporal.reverse();
        //let cadenaAlReves = cadenaMinuscula.reverse();

        for(let i in cadenaMinuscula)
            if(cadenaMinuscula[i] !== cadenaAlReves[i])
                return "La cadena \"" + cadena + "\" no es un palindromo";

        return "La cadena \"" + cadena + "\" es un palindromo";
        
    }

    function init(){
        let mensaje = document.getElementById("mostrar");
        mensaje.innerHTML = esPalindromo(recogerCadena());
    }
}
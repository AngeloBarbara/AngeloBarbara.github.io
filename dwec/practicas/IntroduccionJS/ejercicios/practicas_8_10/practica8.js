{
    document.addEventListener("DOMContentLoaded", init)

    function recogerNumero(){
        return prompt("Introduzca un número entero");
    }
    
    function esParImpar(numero){

        if(isNaN(numero))
            return "Ha introducido un valor no númerico";
        
        if ((numero % 2) == 0)
            return "El numero " + numero + " es par";
        
        return "El numero " + numero + " es impar";
    }

    function init(){
        let mensaje = document.getElementById("mostrar");
        mensaje.innerHTML = esParImpar(recogerNumero());
    }

}


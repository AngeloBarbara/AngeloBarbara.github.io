{
    document.addEventListener("DOMContentLoaded", init);
    const MAXIMO_CARACTERES = 100;
    let textArea;
    let info;

    function maximoLetras() {

        if (textArea.value.length >= MAXIMO_CARACTERES)
            return false;

        return true
    }

    function informacion () {

        if (textArea.value.length >= MAXIMO_CARACTERES) 
            info.innerHTML = "Máximo " + MAXIMO_CARACTERES + " caracteres";
        
        else 
            info.innerHTML = "Puedes escribir hasta " + (MAXIMO_CARACTERES - textArea.value.length) + " caracteres adicionales";
        
    }

    function init(){
        textArea = document.getElementById("texto");
        info = document.getElementById("info");
        textArea.onkeypress = maximoLetras;
        textArea.addEventListener("keyup", informacion);
    }
}
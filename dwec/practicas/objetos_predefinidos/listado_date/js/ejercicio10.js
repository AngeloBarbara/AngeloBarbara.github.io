{
    document.addEventListener("DOMContentLoaded", init);
    
    function calcularHastaFinDeAnno(cadena){
        return Math.round((Date.parse(cadena) - Date.now())/(1000 * 60 * 60 * 24));
    }

    function init(){
        document.getElementById("parrafo").innerHTML = "Falta " + calcularHastaFinDeAnno("December 31, 2018") + " dias para fin de año";
    }
}
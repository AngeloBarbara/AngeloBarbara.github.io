{
    document.addEventListener("DOMContentLoaded", init);
    let parrafo;

    function test(cadena){ 
        if(cadena.match(/hello/))
            return "Coincidencia encontrada";
        return "No encontré una coincidencia";

    }

    function init(){
        parrafo = document.getElementById("parrafo");
        parrafo.innerHTML += "cadena.match(/hello/): " + test("hello world!");
    }
}
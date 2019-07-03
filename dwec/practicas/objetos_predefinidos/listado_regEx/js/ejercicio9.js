{
    document.addEventListener("DOMContentLoaded", init);
    let parrafo;

    function test(cadena){ 
        if(cadena.search(/hello/) != -1)
            return "Coincidencia encontrada";
        return "No encontré una coincidencia";

    }

    function init(){
        parrafo = document.getElementById("parrafo");
        parrafo.innerHTML += "cadena.search(/hello/): " + test("hello world!");
    }
}
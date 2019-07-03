{
    document.addEventListener("DOMContentLoaded", init);
    let parrafo;

    function test(cadena){ 
        if(/^hello/.test(cadena))
            return "Coincidencia encontrada";
        return "No encontré una coincidencia";

    }

    function init(){
        parrafo = document.getElementById("parrafo");
        parrafo.innerHTML += "let regex = /^hello/";
        parrafo.innerHTML += "regex.test('hello world!'): " + test("hello world!");
    }
}
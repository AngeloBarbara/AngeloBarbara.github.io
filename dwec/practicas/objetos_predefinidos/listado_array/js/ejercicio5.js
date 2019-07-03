{
    document.addEventListener("DOMContentLoaded", init);

    let crearArray = function () {
        let arrayConArgumentos = [];

        for (let i = 0; i < arguments.length; i++)
            arrayConArgumentos.push(arguments[i]);
        return arrayConArgumentos;

    }
    
    function init(){
        let parrafo = document.getElementById("parrafo");
        parrafo.innerHTML = "Array con argumentos (1,2,3,4,5) = " + crearArray(1,2,3,4,5);
    }
}
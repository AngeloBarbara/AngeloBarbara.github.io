{
    document.addEventListener("DOMContentLoaded", init);
    let array = [1, 2, 3, 4, 5, "a"];

    function init(){
        let parrafo = document.getElementById("parrafo");
        parrafo.innerHTML = "Recorrido del array con un forEach: "
        array.forEach(function(indice, elemento){
            parrafo.innerHTML += "<br>Array[" + indice + "] = " + elemento
        });
        parrafo.innerHTML += "<br><br>El array solo tiene números: " + array.every(function (numero) {
            return !isNaN(numero);
        });
        parrafo.innerHTML += "<br><br>Hay algún elemento String en el array: " + array.some(function (numero) {
            return isNaN(numero);
        });
        parrafo.innerHTML += "<br><br>Números menores de 3 en el array: " + array.filter(function (numero) {
            return numero < 3;
        });
    }
}
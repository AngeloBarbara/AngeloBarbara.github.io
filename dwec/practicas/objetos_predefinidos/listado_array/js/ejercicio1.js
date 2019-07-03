{
    document.addEventListener("DOMContentLoaded", init);
    let array = [1, 2, 3, 4, 5];
    
    function anadirElemento(elemento){
        let nodo = document.createElement("li");
        nodo.appendChild(document.createTextNode(elemento));
        document.getElementById("listaArray").appendChild(nodo);
    }
    
    function init(){
        array.forEach(function(elemento, indice, array) {
            anadirElemento("Array[" + indice + "] = " + elemento);
        })
    }
}
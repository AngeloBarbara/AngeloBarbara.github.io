{
    document.addEventListener("DOMContentLoaded", init);
    

    function crearArray(dimension){
        let parrafo = document.getElementById("parrafo");
        let array = [];
        for (let i = 0; i < dimension; i++) {
            array.push(i);
        }
        parrafo.innerHTML = "Array = [" + array + "]";
    }

    function init(){
        crearArray(10);
    }
}
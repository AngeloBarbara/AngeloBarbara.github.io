{
    document.addEventListener("DOMContentLoaded", init);
    let array = [1, 2, undefined, undefined, undefined, 4, 5, undefined, undefined];

    function borrarUndefined(element) {
        for (var i = 0; i < element.length; i++)
            if (typeof element[i] === "undefined"){
                element.splice(i, 1);
                i--;
            }
    }

    function init(){
        let parrafo = document.getElementById("parrafo");
        parrafo.innerHTML = "Array inicial: " + array;
        borrarUndefined(array);
        parrafo.innerHTML += "<br><br>Array después del borrado: " + array;
    }
}
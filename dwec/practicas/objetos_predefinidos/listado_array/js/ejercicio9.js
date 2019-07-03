{
    document.addEventListener("DOMContentLoaded", init);
    let arrayPush = new Array(100);
	let arrayUnshift = new Array(100);

    function aniadir(){

        let tiempo0 = performance.now();
        for (let i = 0; i<arrayPush; i++){
            arrayPush.push(0);
        }
        let tiempo1 = performance.now();

        parrafo.innerHTML += "Eficiencia del push: " + (tiempo1 - tiempo0);

        tiempo0 = performance.now();
        for (let i = 0; i<arrayUnshift; i++){
            arrayUnshift.unshift(0);
        }
        tiempo1 = performance.now();

        parrafo.innerHTML += "<br>Eficiencia del unshift: " + (tiempo1 - tiempo0);
    }

    function eliminar(){
        tiempo0 = performance.now();
        while(arrayPush.length>0){
            arrayPush.pop();
        }
        tiempo1 = performance.now();

        parrafo.innerHTML += "<br>Eficiencia del pop: " + (tiempo1 - tiempo0);

        tiempo0 = performance.now();
        while(arrayUnshift.length>0){
            arrayUnshift.shift();
        }
        tiempo1 = performance.now();

        parrafo.innerHTML += "<br>Eficiencia del shift: " + (tiempo1 - tiempo0);
    }

    function init(){
        let parrafo = document.getElementById("parrafo");
        aniadir();
        eliminar();
    }
}
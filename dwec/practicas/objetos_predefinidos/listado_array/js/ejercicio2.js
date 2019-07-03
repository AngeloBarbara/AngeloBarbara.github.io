{
    document.addEventListener("DOMContentLoaded", init);
    let alumnos = ["Angelo", "Pepito", "Perez"];
    let alumno = {nombre: "Angelo", curso: "2DAW", dni: "xxxxxxxx"};
    let ejemplo = "0 in alumnos = " + (0 in alumnos) +
        "<br>1 in alumnos = " + (1 in alumnos) +
        "<br>5 in alumnos = " + (5 in alumnos)+
        "<br><br>nombre in alumno = " + ("nombre" in alumno) + 
        "<br>curso in alumno = " + ("curso" in alumno) + 
        "<br>Angelo in alumno = " + ("Angelo" in alumno) +
        "<br><br>length in alumnos = " + (length in alumnos);
    
    function anadirElemento(elemento){
        let nodo = document.createElement("p");
        nodo.innerHTML = ejemplo;
        document.body.appendChild(nodo);
    }
    
    function init(){
        anadirElemento(ejemplo);
    }
}
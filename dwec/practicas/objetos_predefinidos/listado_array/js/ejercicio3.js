{
    document.addEventListener("DOMContentLoaded", init);
    let alumnos = ["Angelo", "Pepito", "Pérez"];
    let cadena = "Prueba Array";

    function init(){
        document.getElementById("parrafo").innerHTML = "isArray(alumnos) alumnos = [\"Angelo\", \"Pepito\", \"Pérez\"] = " + Array.isArray(alumnos) +
        "<br>isArray(cadena) cadena = \"Prueba Array\" = " + Array.isArray(cadena);
    }
}
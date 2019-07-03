{   
    document.addEventListener("DOMContentLoaded", init);

    function init(){
        document.getElementById("defecto").innerHTML = "Con el constructor por defecto: new Date() => " + new Date();
        document.getElementById("milisegundos").innerHTML = "Pasando al contructor un entero que representa el número de milisegundos: new Date(milisegundos) => " + new Date(1756985469);
        document.getElementById("cadenaFecha").innerHTML = "Pasando al contructor una cadena que representa la fecha: new Date(\"Jan 1 2018\") => " + new Date("Jan 1 2018");
        document.getElementById("anio_mes_dia").innerHTML = "Pasando al contructor valores enteros con las representaciones de las partes de una fecha: new Date(2018,0,1,3,24,0) => " + new Date(2018,0,1,3,24,0);
    }
}
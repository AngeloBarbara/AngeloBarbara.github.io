{
    document.addEventListener("DOMContentLoaded", init);
    let newDate;

    function initFecha(){
        newDate = document.getElementById("fecha");
        newDate.value = new Date().toISOString().split("T")[0];
    }

    function diaSemana(fecha){
        let dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"];
        document.getElementById("parrafo").innerHTML = "Dia de la semana: " + dias[fecha.getDay()];
    }

    function init(){
        initFecha();
        document.getElementById("semanaElegida").addEventListener("click", function(){diaSemana(new Date(newDate.value))});
        document.getElementById("semanaActual").addEventListener("click", function(){diaSemana(new Date(Date.now()))});
    }
}
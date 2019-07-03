{
    document.addEventListener("DOMContentLoaded", init);

    function initFecha(){
        document.getElementById("fecha").value = new Date().toISOString().split("T")[0];
    }
    
    function calcularEdad(){
        let fecha = new Date(document.getElementById("fecha").value);
        let fechaActual = new Date();
        let parrafo = document.getElementById("parrafo");
        try {
            if(isNaN(Date.parse(fecha)))
                throw new Error("La fecha introucida no es válida");
            if(fecha.getFullYear() == fechaActual.getFullYear()){
                let dia = Math.abs(fechaActual.getDate() - fecha.getDate());
                let mes = Math.abs(fechaActual.getMonth() - fecha.getMonth());
                parrafo.innerHTML = "Han transcurrido: " + dia + " dias y " + mes + " meses."
                return;
            }
            parrafo.innerHTML = "Edad: " + (fechaActual.getFullYear() - fecha.getFullYear());
        } catch (error) {
            parrafo.innerHTML = error.message;
        }
    }

    function init(){
        initFecha();
        document.getElementById("edad").addEventListener("click", calcularEdad);
    }
}
{
    document.addEventListener("DOMContentLoaded", init);
    let error;

    function fecha(){
        let fecha = document.getElementById("fecha").value;
        try {
            if(isNaN(Date.parse(fecha)))
                throw new Error("La fecha introducida no es válida");
            error.style.color = "green";
            error.innerHTML = "Ha introducido la fecha: " + fecha;
        } catch (e) {
            error.style.color = "red";
            error.innerHTML = e.message;
        }    
    }

    function init(){
        error = document.getElementById("error");
        document.getElementById("fechaButton").addEventListener("click", fecha);
    }
}
{
    document.addEventListener("DOMContentLoaded", init);
    let date = new Date(Date.now());
    let newDate;
    let fechaActual;

    function incrementarFecha(){
        let numero = parseInt(document.getElementById("numeroDias").value);
        if(isNaN(numero))
            return;
        newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + numero)
        fechaActual.innerHTML = new Date(newDate);
        date = newDate;
    }

    function init(){
        fechaActual = document.getElementById("parrafo");
        fechaActual.innerHTML = date;
        document.getElementById("incrementar").addEventListener("click", incrementarFecha);
    }
}
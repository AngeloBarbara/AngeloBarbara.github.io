{
    document.addEventListener("DOMContentLoaded", init);

    function comprobarFecha(){
        let error = document.getElementById("error");
        if(isNaN(Date.parse(document.getElementById("fecha").value))){
            error.style.color = "red";
            error.innerHTML = "La fecha introducida no es válida"; 
        }
        else{
            error.style.color = "green";
            error.innerHTML = "La fecha introducida es válida";
        }
    }

    function init(){
        document.getElementById("buttonFecha").addEventListener("click", comprobarFecha);
    }
}
{
    document.addEventListener("DOMContentLoaded", init);
    //let campoDni;

    function initFecha(){
        let fecha = document.getElementById("fecha");
        fecha.value = new Date().toISOString().split("T")[0];
        fecha.max = new Date().toISOString().split("T")[0];
    }
    
    function comprobarDni(){
        let letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];
        let regex = /^(\d{8})[ -]?([TRWAGMYFPDXBNJZSQVHLCKET])$/i;
        let error = document.getElementById("error");
        let valor = this.value,
        grupos = regex.exec(valor);

        if (grupos === null) {
            if (valor === "")
                error.innerHTML = "Campo Vacio";
            else
                error.innerHTML = "Formato incorrecto";
                error.style.color = "red";
            return;
        }

        //Destructuring
        [, numero, letra] = grupos;

        if (letra.toUpperCase() !== letras[parseInt(numero % 23)]){
            error.innerHTML = "Letra incorrecta";
            error.style.color = "red";
        }else {
            error.innerHTML = "DNI correcto";
            error.style.color = "green";
        }

    }

    function init(){
        document.getElementById("dni").addEventListener("blur", comprobarDni);
        initFecha();
    }
}
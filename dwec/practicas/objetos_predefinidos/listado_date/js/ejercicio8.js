{
    document.addEventListener("DOMContentLoaded", init);

    function esBisiesto(fecha){
        try {
            if(isNaN(Date.parse(fecha)))
                throw new Error("La fecha introucida no es válida");
            if(fecha.getFullYear()% 4 == 0 && fecha.getFullYear()% 100 != 0 || fecha.getFullYear()% 400 == 0)
                return "Es bisiesto";
            return "No es bisiesto";
        } catch (error) {
            return error.message;
        }
    }

    function init(){
        let parrafo = document.getElementById("parrafo");
        parrafo.innerHTML += "<br>esBisiesto(new Date())" + esBisiesto(new Date());
        parrafo.innerHTML += "<br>esBisiesto(new Date(2018))" + esBisiesto(new Date(2018));
        parrafo.innerHTML += "<br>esBisiesto(new Date(\"Jan 1, 2018\"))" + esBisiesto(new Date("Jan 1, 2018"));
        parrafo.innerHTML += "<br>esBisiesto(new Date(2018,1,1))" + esBisiesto(new Date(2018,1,1));
        parrafo.innerHTML += "<br>esBisiesto(new Date(\"a\")" + esBisiesto(new Date("a"));
        parrafo.innerHTML += "<br>esBisiesto(new Date(\"a\")" + esBisiesto(new Date(""));
        parrafo.innerHTML += "<br>esBisiesto(new Date(\"a\")" + esBisiesto(new Date(undefined));
    }
}
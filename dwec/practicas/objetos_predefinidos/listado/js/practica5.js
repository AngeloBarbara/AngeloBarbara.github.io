/**
 * Reloj. Crea una página que cada segundo te muestre actualizado un reloj digital del tipo "22:14:09 h" (usa timing events del objeto window)
 */

{
    document.addEventListener("DOMContentLoaded", init);
    let reloj;

    function normalizarHora(elemento){
        if(elemento < 10)
            return "0" + elemento;
        return elemento;
    }
    
    function actualizarReloj(){
        let date = new Date();
        let hours = normalizarHora(date.getHours());
        let minutes = normalizarHora(date.getMinutes());
        let seconds = normalizarHora(date.getSeconds());
        reloj.innerHTML = hours + " : " + minutes + " : " + seconds;
    }

    function init(){
        reloj = document.getElementById("reloj");
        setInterval("actualizarReloj()", 1000);
    }
}
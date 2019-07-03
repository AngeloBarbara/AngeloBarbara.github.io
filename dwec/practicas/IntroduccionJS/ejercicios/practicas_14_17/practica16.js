{
    document.addEventListener("DOMContentLoaded", init);
    let dimensiones;

    function informacion(elEvento) {
        let evento = elEvento || window.event;
        let posicionX = "";
        let posicionY = "";
        dimensiones = tamanoVentanaNavegador();

        if(evento.clientX > (dimensiones[0] / 2))
            posicionX = "derecha";
        else
            posicionX = "izquierda";
        
        if(evento.clientY > (dimensiones[1] / 2))
            posicionY = "abajo";
        else
            posicionY = "arriba";

        muestraInformacion(['Posicion', posicionX, posicionY]);
    }
    
    function muestraInformacion(mensaje) {
        document.getElementById("info").innerHTML = '<h1>'+mensaje[0]+'</h1>';
        for(var i=1; i<mensaje.length; i++) {
            document.getElementById("info").innerHTML += '<p>'+mensaje[i]+'</p>';
        }
    }
    
    function tamanoVentanaNavegador(){
        // Adaptada de http://www.howtocreate.co.uk/tutorials/javascript/browserwindow
        
        if(typeof(window.innerWidth) == 'number') {
            // No es IE
            dimensiones = [window.innerWidth, window.innerHeight];
        } else if(document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
            //IE 6 en modo estandar (no quirks)
            dimensiones = [document.documentElement.clientWidth, document.documentElement.clientHeight];
        } else if(document.body && (document.body.clientWidth || document.body.clientHeight)) {
            //IE en modo quirks
            dimensiones = [document.body.clientWidth, document.body.clientHeight];
        }
        
        return dimensiones;
    }

    function init(){
        document.addEventListener("click", informacion);
    }
    
    
}
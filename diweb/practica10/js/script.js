{
    document.addEventListener("DOMContentLoaded", init);
    
    function cargaContextoCanvas(idCanvas) {
        let elemento = document.getElementById(idCanvas);
        if (elemento && elemento.getContext) {
            let contexto = elemento.getContext("2d");
            if (contexto) {
                return contexto;
            }
        }
        return false;
    }

    function init(){
        let contexto = cargaContextoCanvas("micanvas");
    
    
        if (contexto) {
            //Círculo lupa
            contexto.beginPath();
            contexto.lineWidth=3;
            
            contexto.arc(13, 13, 10, Math.PI, Math.PI*4, false);
            contexto.stroke();
    
            //Palo lupa
            contexto.beginPath();
            contexto.moveTo(19, 19);
            contexto.lineTo(30, 30);
            contexto.stroke();
        }
    }
}

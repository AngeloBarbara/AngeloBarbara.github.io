{
    document.addEventListener("DOMContentLoaded", init);
    
    function muestraInformacion(mensaje) {
        info.innerHTML = '<h1>'+mensaje[0]+'</h1>';
        for(var i=1; i<mensaje.length; i++) {
            info.innerHTML += '<p>'+mensaje[i]+'</p>';
        }
    }

    function informacion(evento){
        switch (evento.type) {
            case 'mousemove':
              info.style.backgroundColor = '#FFFFFF';
              muestraInformacion(['Ratón', 'Navegador [' + evento.clientX + ', ' + evento.clientY + ']', 'Pagina [' + evento.pageX + ', ' + evento.pageY + ']']);
              break;
            case 'keypress':
              info.style.backgroundColor = '#CCE6FF';
              let caracter = evento.charCode || evento.keyCode;
              muestraInformacion(['Teclado', 'Carácter [' + String.fromCharCode(caracter) + ']', 'Código [' + evento.keyCode + ']']);
              break;
            case 'click':
              info.style.backgroundColor = '#FFFFCC';
              break;
          }
    }

    function init(){
        document.addEventListener("mousemove", informacion);
        document.addEventListener("keypress", informacion);
        document.addEventListener("click", informacion);
    }
}
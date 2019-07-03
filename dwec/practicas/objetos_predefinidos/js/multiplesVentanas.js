/**
 * Crea la siguiente página Web donde el botón crea cinco nuevas ventanas ubicadas en la esquina tal y como se muestran.
 * Métodos a utilizar:
 * miVentana = window.open('','','width=200,height=200');
 * miVentana.document.open();
 * miVentana.document.write() 
 * Añade el esqueleto básico: html, head, title, body, ul...
 * 
 * @author Angelo Barbara
 */

{
    document.addEventListener("DOMContentLoaded", init)
    let top = 0;

    function abrirVentanas () {
        for(let i = 0; i < 5; i++){
            let nuevaVentana = window.open('', '', 'width=200,height=200,top='+(top += 10) +',left='+top+'');
            nuevaVentana.document.write(
                `<html>
                <head>
                <title>Ventana ${i + 1} </title>
                </head>
                <body>
                <p>Ventana ${i +1} </p>
                <input type=\"button\" id=\"button\" value=\"Cerrar\" onclick=window.close();>
                </body>
                </html>`);
                nuevaVentana.document.close();
               
        }
    }

    function init (){
        let button = document.getElementById("button");
        button.addEventListener('click', abrirVentanas);
    }
}
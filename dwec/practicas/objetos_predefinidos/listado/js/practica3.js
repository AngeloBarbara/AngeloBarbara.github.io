/**
 * Crea una página web con el siguiente comportamiento:
 * Un botón "bajar línea" para bajar una línea.
 * Un botón "subir línea" para subir una línea
 * Un botón "bajar" para bajar una página.
 * Un botón "subir" para subir una página.
 * Un botón "inicio" para ir al inicio del documento
 * Un botón "fin" para ir al final del documento.
 * Puedes utilizar los siguientes métodos de windows: scroll(), scrollBy(), scrollByLines(), scrollTo()
 * 
 * @author Angelo Barbara
 */

{   
    document.addEventListener("DOMContentLoaded", init);

    function init(){


        let bajarLinea = document.getElementById("bajarLinea").addEventListener("click", () => { window.scrollByLines(1) }); 
        let subirLinea = document.getElementById("subirLinea").addEventListener("click", () => { window.scrollByLines(-1) });
        let bajarPagina = document.getElementById("bajarPagina").addEventListener("click", () => { window.scroll(0, window.scrollY + window.innerHeight) });
        let subirPagina = document.getElementById("subirPagina").addEventListener("click", () => { window.scroll(0, window.scrollY - window.innerHeight) });
        let inicio = document.getElementById("inicio").addEventListener("click", () => { window.scrollTo(0,0) });
        let fin = document.getElementById("fin").addEventListener("click", () => { window.scrollTo(0,document.body.clientHeight) });
    }

}
/**
 * Muestra en  una lista la siguiente información. Cada uno de las etiquetas <ol> y <li> han de crearse mediante los métodos de document. Explica en cada uno la diferencia con respecto a los demás. 
 * window.outerHeight
 * window.outerHeight
 * window.innerHeight
 * window.screen.availHeight
 * window.screen.height
 * window.document.clientHeight
 * 
 * @author Angelo Barbara
 */
{

   let div;

   document.addEventListener("DOMContentLoaded", init);

    function init (){
        
        div = document.getElementById("window");
        
        let ol = document.createElement("ol");
        
        let metodos = [

            {metodo : window.outerHeight , nombre: "window.outerHeight", descripcion: "Obtiene la altura en pixeles de toda la ventana del navegador" },
            {metodo : window.innerHeight , nombre: "window.innerHeight", descripcion: "Altura de la ventana del navegador incluido, si está renderizada, la barra de desplazamiento horizontal" },
            {metodo : window.screen.availHeight, nombre: "window.screen.availHeight", descripcion: "Retorna el total de espacio vertical disponible en la pantalla." },
            {metodo : window.screen.height , nombre: "window.screen.height", descripcion: "Retorno la altura de la pantalla en pixeles " },
            {metodo : window.document.clientHeight , nombre: "window.document.clientHeight", descripcion: "Devuelve la altura de un elemento en píxeles, incluyendo el padding pero no las barras horizontales, el borde o el margen." }
            
        ];

        
        for (let i = 0; i < metodos.length; i++) {

            let li = document.createElement("li");
            li.innerHTML = "<b>" +metodos[i].nombre + "</b>: " + metodos[i].metodo + "px, " + metodos[i].descripcion + ".";
            ol.appendChild(li);
        
        }
        div.appendChild(ol);
        
    }

}
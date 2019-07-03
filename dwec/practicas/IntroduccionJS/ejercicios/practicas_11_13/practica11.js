/**
 * A partir de la página web proporcionada y utilizando las funciones DOM, mostrar por pantalla la
 * siguiente información:
 * 1. Número de enlaces de la página
 * 2. Dirección a la que enlaza el penúltimo enlace
 * 3. Numero de enlaces que enlazan a http://prueba
 * 4. Número de enlaces del tercer párrafo
 * 
 * @author Angelo Barbara
 */

{
    let contador = 0;
    let numEnlaces;
    let parrafos;
    let enlacesTercerParrafo;
    document.addEventListener('DOMContentLoaded', init);

    function contarEnlaces(){
        numEnlaces = document.getElementsByTagName('a');
        parrafos = document.getElementsByTagName('p');
        enlacesTercerParrafo = parrafos[2].getElementsByTagName('a');

        for(let i in numEnlaces)
            if(numEnlaces[i].href == 'http://prueba/')
                contador++;
    }

    function addElement(msg){
        let nodo = document.createElement('h1');
        nodo.appendChild(document.createTextNode(msg));
        document.body.appendChild(nodo);
    }

    function init(){
        contarEnlaces();
        addElement('Número de enlaces de la página: ' + numEnlaces.length);
        addElement('Dirección a la que enlaza el penúltimo enlace: ' + numEnlaces[numEnlaces.length - 2].href);
        addElement('Numero de enlaces que enlazan a http://prueba: ' + contador);
        addElement('Número de enlaces del tercer párrafo: ' + enlacesTercerParrafo.length);
    }
}
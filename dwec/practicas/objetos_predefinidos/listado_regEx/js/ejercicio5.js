{
    document.addEventListener("DOMContentLoaded", init);

    function init(){
        let regex = /d(b+)d/g;
        let pruebaRegex = regex.exec( "cdbbdbsbz");
        let parrafo = document.getElementById("parrafo");
        parrafo.innerHTML += "let regex = \"/abc/\"g";
        parrafo.innerHTML += "let pruebaRegex = regex.exec( \"cdbbdbsbz\")";
        parrafo.innerHTML += "<br>regex.index: " + /d(b+)d/g.exec( "cdbbdbsbz").index;
        parrafo.innerHTML += "<br>regex.lastIndex: " + regex.lastIndex;
    }
}
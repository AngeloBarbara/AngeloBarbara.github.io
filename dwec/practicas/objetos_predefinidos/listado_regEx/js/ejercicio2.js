{
    document.addEventListener("DOMContentLoaded", init);

    function init(){
        let regex = /abc/g;
        let parrafo = document.getElementById("parrafo");
        parrafo.innerHTML += "let regex = \"/abc/\"g";
        parrafo.innerHTML += "<br>regex.global: " + regex.global;
        parrafo.innerHTML += "<br>regex.global: " + regex.ignoreCase;
        parrafo.innerHTML += "<br>regex.global: " + regex.multiline;
    }
}
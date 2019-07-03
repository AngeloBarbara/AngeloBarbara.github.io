{
    document.addEventListener("DOMContentLoaded", init);

    function init(){
        let regex = /abc/g;
        let parrafo = document.getElementById("parrafo");
        parrafo.innerHTML += "let regex = \"/abc/\"g";
        parrafo.innerHTML += "<br>regex.flags: " + regex.flags;
    }
}
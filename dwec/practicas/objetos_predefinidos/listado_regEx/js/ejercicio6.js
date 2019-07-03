{
    document.addEventListener("DOMContentLoaded", init);

    function init(){
        let regex = /hi/g;
        regex.test('hi there!');
        RegExp.lastMatch;
        let parrafo = document.getElementById("parrafo");
        parrafo.innerHTML += "let regex = /hi/g";
        parrafo.innerHTML += "<br>RegExp.lastMatch: " + RegExp.lastMatch;
    }
}
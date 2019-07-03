{
    document.addEventListener("DOMContentLoaded", init);

    function init(){
        document.getElementById("parrafo").innerHTML += "<br><br> Date.now() => " + Date.now();
    }
}
{
    document.addEventListener("DOMContentLoaded", init);

    function init(){
        let d = Date.now();
        document.getElementById("parrafo").innerHTML += "<br><br> Date.parse(\"Jan 1, 2018\") => " + Date.parse("Jan 1, 2018");
    }
}
/**
 * @author Angelo Barbara
 */
{
    document.addEventListener("DOMContentLoaded", init);

    function preventDefault(web){
        event.preventDefault;
        window.open(web, "_self");
    }
    
    function init() {
        document.getElementById("cuenta").addEventListener("click", function(){
            preventDefault("ejercicio1.html")
        });
        document.getElementById("nombreApellidos").addEventListener("click", function(){
            preventDefault("ejercicio2.html")
        });
    }
}
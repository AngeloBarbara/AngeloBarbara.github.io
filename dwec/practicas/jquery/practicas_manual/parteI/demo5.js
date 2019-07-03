/**
 * Demo 5, parte 1
 * @author Angelo Barbara
 */

function init(){
    $("#ocultar").click((event)=>{
        event.preventDefault();
        $("#capaefectos").hide("slow");
    });
    $("#mostrar").click((event)=>{
        event.preventDefault();
        $("#capaefectos").show(1000);
    });
}

$(init)
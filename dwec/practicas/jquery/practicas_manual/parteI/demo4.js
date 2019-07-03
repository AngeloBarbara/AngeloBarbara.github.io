/**
 * Demo 4, parte 1
 * @author Angelo Barbara
 */

function init(){
    $("a").mouseover(()=>$("#capa").addClass("clasecss"));
    $("a").mouseout(()=>$("#capa").removeClass("clasecss")); 
}

$(init)
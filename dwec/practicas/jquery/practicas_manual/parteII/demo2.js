/**
 * Demo 2, parte 2
 * @author Angelo Barbara
 */
function init(){
    $("#capa").data("nombre","Angelo");
    alert($("#capa").data("nombre"))

    // remover el dato
    $("#capa").removeData("nombre")

}
$(init)
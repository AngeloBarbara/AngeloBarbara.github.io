/**
 * @author Angelo Barbara
 */
function init() {
    function cambiaTexto() {
        var elem = $(this);
        if (elem.html() != "Hiciste clic!!") {
            elem.html("Hiciste clic!!");
        } else {
            elem.html("Hiciste de nuevo clic!!");
        }
    }
    $(".verde").on("click", cambiaTexto);

    $("#insertarelem").click(function (e) {
        var nuevoElemento = $('<div class="verde">Este elemento se ha creado e insertado dinamicamente (haz clic)</div>');
        nuevoElemento.appendTo($(document.body));
        $(".verde").on("click", cambiaTexto);
    });

    $("#ponerclaseverde").click(function (e) {
        $("#noverde").addClass("verde");
        $(".verde").on("click", cambiaTexto);
    });
}
$(init);
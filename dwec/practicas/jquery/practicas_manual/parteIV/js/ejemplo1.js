/**
 * @author Angelo Barbara
 */
function init() {
    $("a").each(function (i) {
        var titulo = $(this).attr("title");
        alert("Atributo title del enlace " + ++i + ": " + titulo);
    });
}
$(init);
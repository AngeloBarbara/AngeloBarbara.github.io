{
    let init = function(){
        let $showInfo = $("#showInfo");
        let id;
        let habilidades = new Map();

        $("button").click(function () {
            let $elemento = $(this);
            $showInfo.empty();
            id = $elemento.prop("id");
            $.getJSON("./json/" + id + ".json", function (data) {
                let items = [];
                let contador = 0;
                if (id === "desarrolladores")
                    items.push("<select id='selectDesarrolladores'>");
                else
                    items.push("<select>");
                items.push("<option selected disabled> Selecciona una opción</option>");
                $.each(data, function (key, value) {
                    items.push("<option value=" + (++contador) + ">" + key + "</option>");
                    habilidades.set(contador, value);
                });
                items.push("</select>");
                items.push("<p id='descripcion'></p>");


                $("<div>").html(items.join("")).appendTo($showInfo);
                $("select").change(function () {
                    if ($(this).prop("id") == "selectDesarrolladores") {
                        $("#descripcion").html(obtenerLenguajes($(this).val()));
                    } else
                        $("#descripcion").html(habilidades.get(parseInt($(this).val())));
                });
            });
        });

        let obtenerLenguajes = function(posicion){
            let items = [];
                let array = habilidades.get(parseInt(posicion)).split(",");
                array.forEach(element => {
                    items.push("<label for="+element+">"+element+"</label><input type='checkbox' id="+element+"><br>");
                });
                $("#descripcion").html(items.join(""));
        }
    }

    $(init);
}
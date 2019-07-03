{
    let interval;

    function initTablero(filas, columnas) {
        let $contenedor = $("<div>");
        let $fila;
        let $casilla;
        $contenedor.prop("id", "tablero");
        for (let i = 0; i < filas; i++) {
            $fila = $("<div>");
            $fila.prop("id", "fila");
            for (let j = 0; j < columnas; j++) {
                $casilla = $("<div>").prop("id", i + "-" + j)
                .addClass("casillaTapada")
                .click(function(e){
                    if(this.buttons === 2)
                        return;
                    buscaminas.picar(i, j)
                    mostrarCasillas();
                })
                .on('mousedown', function (event) {
                    clickCasilla(i, j, event);
                });
                $fila.append($casilla);
            }
            $contenedor.append($fila);
        }
        $("#contenedor").append($contenedor);
        $("#tablero").fadeIn("slow");
    }

    function clickCasilla(i, j, event) {
        //event.preventDefault();
        console.log(event.buttons);
        switch (event.buttons) {
            case 3:
            case 4:
                buscaminas.despejar(i, j);
                if (buscaminas.getCasillasAlrededor().length !== 0){
                    mostrarCasillasAlrededor(obtenerCasilla(i, j));
                    return
                }
                mostrarCasillas();
                break;
            case 2:
                buscaminas.posicionarBandera(i, j);
                mostrarBandera(i, j);
                break;
        }
    }

    function mostrarCasillasAlrededor(casillaPulsada) {
        let $casillasAlrededor = $(buscaminas.getCasillasAlrededor());

         $casillasAlrededor.fadeIn(function () {
             $(this).addClass("casillaAlrededor");
         });

         casillaPulsada.on("mouseup mouseleave", function () {
             $casillasAlrededor.fadeIn(2000, function () {
                  $(this).removeClass("casillaAlrededor");
              });
         });
         
        buscaminas.restablecerCasillasAlrededor();
    }

    function mostrarCasillas() {
        let $casilla;
        let arrayCasillas = buscaminas.getCasillasAMostrar();

        $.each(arrayCasillas, function (index) { 
            $casilla = obtenerCasilla(arrayCasillas[index][0], arrayCasillas[index][1]);
            if (buscaminas.isPartidaFinalizada() && buscaminas.getCasillasPorDescubrir() != 0)
                $casilla.addClass("casillaConBomba", 200, function () {
                    $(this).css({
                        "transform": "rotate(360deg)",
                        "transition-duration": "0.3s"
                    });
                });
            else
                $casilla.addClass("casillaDescubierta", 200, function () {
                    $(this).css({
                        "transform": "rotateX(360deg)",
                        "transition-duration": "0.5s"
                    });
                });
            
            if (arrayCasillas[index][2] !== 0 && arrayCasillas[index][2] !== "x")
                $casilla.text(arrayCasillas[index][2]);
        });

        buscaminas.restablecerCasillasAMostrar();
        comprobarFinalPartida();
    }


    function mostrarBandera(fila, columna) {
        if (buscaminas.getTablero2()[fila][columna] == "B")
            obtenerCasilla(fila, columna).animate({
                opacity: 0,
            },'fast', function(){
                $(this).animate({opacity:1},1)
            }).delay(800).addClass("casillaConBandera", 300, "easeInElastic");
        else
            obtenerCasilla(fila, columna).removeClass("casillaConBandera", 300, "easeInBack");
        $marcadorBanderas.text(buscaminas.getBanderas());
    }

    function obtenerCasilla(fila, columna) {
        return $("#" + fila + "-" + columna);
    }

    function comprobarFinalPartida() {
        if (buscaminas.isPartidaFinalizada()) {
            clearInterval(interval);

            if (buscaminas.getCasillasPorDescubrir() === 0) {
                $("#textoFinJuego").text("¡Has ganado!");
                $("#finJuego").show("puff", function(){
                    $(this).css({
                        backgroundColor : "green",
                        opacity: 0.6
                    });
                });
            } else {
                $("#textoFinJuego").text("¡Has perdido!");
                $("#finJuego").fadeIn('fast').effect("explode", {}, 500, function() { 
                    $(this)
                      .hide("fast", "linear")
                      .fadeIn().css('opacity',0.6);
                  });
            }
        }
    }

    function crearReloj() {
        let $reloj = $("<p>");
        $reloj.prop("id", "reloj");
        $reloj.html("00 : 00 : 00");
        $("#utils").append($reloj);
    }

    function crearMarcadorBanderas() {
        $imagenBandera = $("<img>");
        $marcadorBanderas = $("<p>");
        $marcadorBanderas.prop("id", "marcadorBanderas");
        $marcadorBanderas.text(buscaminas.getBanderas());
        $("#utils").append($imagenBandera);
        $("#utils").append($marcadorBanderas);
    }

    function normalizarHora(elemento) {
        return elemento < 10 ? "0" + elemento : elemento;
    }
    
    function actualizarReloj(date1) {
        let date2 = new Date().getTime();
        let difDate = new Date(date2 - date1);
        let hours = normalizarHora(difDate.getHours() - 1);
        let minutes = normalizarHora(difDate.getMinutes());
        let seconds = normalizarHora(difDate.getSeconds());
        $("#reloj").html(hours + " : " + minutes + " : " + seconds);
    }
    
    function initReloj() {
        let date1 = new Date().getTime();
        interval = setInterval(function(){
          actualizarReloj(date1);
        }, 1000);
    }

    document.oncontextmenu = function () {
        return false
    };

    function getFilasColumnas(dificultad) {
        switch (dificultad) {
            case "facil":
                buscaminas.init(8, 8, 10);
                return [8, 8];
            case "intermedio":
                buscaminas.init(16, 16, 40);
                return [16, 16];
            case "dificil":
                buscaminas.init(16, 30, 99);
                return [16, 30];
        }
    }

    $(()=>{
        $("button").click(function (e) {
            //e.preventDefault();
            let [filas, columnas] = getFilasColumnas($(this).prop("id"));
            $("#botonesDificultad").html("<button><a href='index.html'>Reiniciar</a></button>")
            crearReloj();
            initReloj();
            crearMarcadorBanderas();
            initTablero(filas, columnas);
        })
    });
}
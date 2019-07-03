{

    let $button, $contenido, $nuevoJuego, array, $cajaJuego, $reloj, date1, interval;

    function initJuego(value){
        buscaminas.init(value);

        //document.getElementById("form").style.display = "none";
        $("#form").css('display','none');

        initCajaJuego();
        
        initCasillas();

        initHora();

    }

    function initCasillas(){
        let $caja, $contenedor;
        //caja = document.createElement('div');
        //caja.className = "caja";
        $caja = $("<div class='caja'></div>");
        for(let i = 0; i < buscaminas.getFilas(); i++){
            //contenedor = document.createElement('div');
            //contenedor.id = "contenedor";
            $contenedor = $("<div id='contenedor'></div>");
            for(let j = 0; j < buscaminas.getColumnas(); j++){
               
                //let input = document.createElement("input");
                //input.id = i + '_' + j;
                //input.className = "button";
                //input.type = "button";
                
                let $input = $(`<input id='${i}_${j}' class='button' type='button'></input>`);
                //input.style.backgroundImage = "url(img/img.png)";
                
                //input.value = buscaminas.getValue(i,j);
                $input.val(buscaminas.getValue(i,j));
                
                //input.addEventListener("mousedown", function(){comprobarBombas(this.id)});

                $input.on("mousedown",function(e){

                //});

                //input.addEventListener("mousedown", function(e){
                    console.log(e.buttons);
                    //e.preventDefault;
                    //console.log(e.$button);
                    $button = getButton($(this).attr('id'));
                    //console.log($button.attr('id'));
                    switch(e.buttons){
                        case 1:
                            comprobarBombas();
                            break;
                        case 2:
                            posicionarBandera();
                            break;
                        default:
                            ayuda();
                            //console.log("hola");
                            break;
                }});
                $contenedor.append($input);
            }
            $caja.append($contenedor);
        }
        $cajaJuego.append($caja);
        $contenido.append($cajaJuego);
        $('.button').css('display','none');
        $('.button').show('slow');
    }

    function initCajaJuego(){
        // cajaJuego = document.createElement('div');
        // cajaJuego = document.createElement('div');
        // cajaJuego.className = "cajaJuego";
        // cajaBanderas = document.createElement('div');
        // cajaBanderas.className = "cajaBanderas";
        // cajaJuego.appendChild(cajaBanderas);
        // cajaTimer = document.createElement('div');
        // cajaTimer.className = 'cajaTimer';
        // cajaJuego.appendChild(cajaTimer);
        // h3Timer = document.createElement('h3');
        // h3Timer.id = 'reloj';
        // h3Timer.innerHTML = '00 : 00 : 00';
        // cajaTimer.appendChild(h3Timer);
        // cajaNumeroBanderas = document.createElement('div');
        // cajaImagenBandera = document.createElement('div');
        // h3Banderas = document.createElement('h3');
        // h3Banderas.innerHTML = buscaminas.getMinas();
        // h3Banderas.className = "h3Banderas";
        // cajaNumeroBanderas.appendChild(h3Banderas);
        // cajaImagenBandera.innerHTML = "<img src='img/flag.jpg'/>";
        // cajaImagenBandera.className = "cajaImagenBandera";
        // cajaBanderas.appendChild(cajaNumeroBanderas);
        // cajaBanderas.appendChild(cajaImagenBandera);
        $cajaJuego = $("<div class='cajaJuego'></div>");
        $cajaBanderas = $("<div class='cajaBanderas'></div>");
        $cajaJuego.append($cajaBanderas);
        $cajaTimer = $("<div class='cajaTimer'></div>");
        $cajaJuego.append($cajaTimer);
        $h3Timer = $("<h3 id='reloj'></h3>");
        $h3Timer.html('00 : 00 : 00');
        $cajaTimer.append($h3Timer);
        $cajaNumeroBanderas = $("<div></div>");
        $cajaImagenBandera = $("<div class='cajaImagenBandera'></div>");
        $cajaImagenBandera.html("<img src='img/flag.jpg'/>");
        $h3Banderas = $("<h3 class='h3Banderas'></h3>");
        $h3Banderas.html(buscaminas.getMinas());
        $cajaNumeroBanderas.append($h3Banderas);
        $cajaBanderas.append($cajaNumeroBanderas);
        $cajaBanderas.append($cajaImagenBandera);
        
    }

    function normalizarHora(elemento){
        return elemento < 10 ? '0' + elemento : elemento;
    }
    
    function actualizarReloj(){
        let date2 = new Date().getTime();
        difDate = new Date(date2 - date1);
        let hours = normalizarHora(difDate.getHours()-1);
        let minutes = normalizarHora(difDate.getMinutes());
        let seconds = normalizarHora(difDate.getSeconds());
        $reloj.html(hours + " : " + minutes + " : " + seconds);
    }

    function initHora(){
        $reloj = $('#reloj');
        date1 = new Date().getTime();
        interval = setInterval("actualizarReloj()", 1000);
    }

    function ayuda(){
        //$button = getButton()(this);
        //$button.className = "transition";
        //$button.className = "button";
        let ayuda = false;
        let [x,y] = $button.attr('id').split('_');
        x = parseInt(x), y = parseInt(y);
        let j = Math.max(x - 1, 0);
        let k = Math.max(y - 1, 0);

        for(j = Math.max(x - 1, 0); j <= Math.min(x + 1, buscaminas.getFilas() - 1); j++)
            for(k = Math.max(y - 1, 0); k <= Math.min(y + 1, buscaminas.getColumnas() - 1); k++)
                if(getButton(j+"_"+k).value === '9'){
                    transition(getButton(j+"_"+k));
                    ayuda = true;
                }
                //if(getButton(j(this)+"_"+k).value !== '0' && getButton(j(this)+"_"+k).value !== '*')
                  //  $button = getButton(j(this)+"_"+k); 

        if(!ayuda)
            for(j = Math.max(x - 1, 0); j <= Math.min(x + 1, buscaminas.getFilas() - 1); j++)
                for(k = Math.max(y - 1, 0); k <= Math.min(y + 1, buscaminas.getColumnas() - 1); k++)
                    if(getButton(j+"_"+k).value !== '0'){
                        $button = getButton(j+"_"+k);
                        comprobarBombas();
                        return;
                        //ayuda = true;
                    }
            //transition(getButton(j(this)+"_"+k)); 
    }

    function transition(button){
        //button.style.transition = 'background-color 0.3s';
        //button.style.backgroundColor = 'rgb(231, 140, 140)';
        $button.css({
            "transition":"background-color 0.3s",
            "backgroundColor":"rgb(231, 140, 140)"
        });
        setTimeout("noTransition()",400);
    }

    function noTransition(){ 
        //$button.className = "button";
        //let buttons = document.getElementsByClassName('button');
        $('.button').css('backgroundColor','rgb(190, 68, 68)');
        //for(let i = 0; i <$buttons.length; i++)
            //buttons[i].style.backgroundColor = 'rgb(190, 68, 68)';
        //clearInterval(interval2);
    }

    function posicionarBandera(){
        //$button = getButton(i(this)d);
        if($button.attr('name') === "botonPulsado")
            return;
        if($button.attr('name') === "bandera"){
            //button.style.backgroundImage = "";
            //button.name = "";
            $button.css('backgroundImage','');
            $button.attr('name','');
            actualizarNumeroBanderas(1);
            return;
        }
        if($('[name="bandera"]').length < buscaminas.getMinas()){
            $button.attr('name','bandera');
            //button.style.backgroundImage = "url(img/flag.jpg)";
            $button.css('backgroundImage','url(img/flag.jpg)');
            actualizarNumeroBanderas(-1);
            comprobarSiHasGanado();
        }
    }

    function actualizarNumeroBanderas(value){
        let numBanderas = document.getElementsByClassName('h3Banderas')[0];
        numBanderas.innerHTML = parseInt(numBanderas.textContent) + value;
    }

    function comprobarBombas(){
        //console.log($button.attr("name"));
        if($button.attr('name') === "bandera")
            return;
        array = buscaminas.comprobarBombas($button.attr('id'));
        if(array.length === buscaminas.getColumnas() * buscaminas.getFilas()){
            mostrarTablero();
            return;
        }
        for(let i = 0; i < array.length; i++){
            let $button = getButton(array[i]);
            //button.style.backgroundImage = `url(img/${$button.value}.png)`;
            setTimeout(function(){
                //$casilla = $("#"+arrayCasillas[i][0]+"-"+arrayCasillas[i][1]);
                //$casilla.addClass("casillaDescubierta");
                //$casilla.text(arrayCasillas[i][2]);
                $button.css('backgroundImage',`url(img/${$button.val()}.png)`);
            },i * 20 + 100);
            
            //$button.disabled = true;
            if($button.attr('name') === "bandera"){
                //button.name = "botonPulsado";
                $button.attr('name','botonPulsado')
                actualizarNumeroBanderas(1);
            }
            $button.attr('name','botonPulsado')
        }
        comprobarSiHasGanado();
    }

    function mostrarTablero(){
        for(let i = 0; i < array.length; i++){
            let $button = getButton(array[i]);
            //console.log($buttons[i]);
            //button.style.backgroundImage = `url(img/${$button.value}.png)`;
            //button.disabled = true;
            setTimeout(function(){
                //$casilla = $("#"+arrayCasillas[i][0]+"-"+arrayCasillas[i][1]);
                //$casilla.addClass("casillaDescubierta");
                //$casilla.text(arrayCasillas[i][2]);
                $button.css('backgroundImage',`url(img/${$button.val()}.png)`);
            }, i * 20 + 100);
            $button.attr('disabled',true);
        }
        
        newGame("pierde");
    }

    function comprobarSiHasGanado(){
        //if(document.getElementsByName("botonPulsado").length === buscaminas.comprobarSiHasGanado()){
            console.log($('[name="botonPulsado"]').length);
            if($('[name="botonPulsado"]').length === buscaminas.comprobarSiHasGanado()){
            //if(document.getElementsByName("bandera").length === buscaminas.getMinas()){
                //for(let i = 0; i < buscaminas.getFilas(); i++)
                    //for(let j = 0; j < buscaminas.getColumnas(); j++)
                        //document.getElementById(i + "_" + j).disabled = true;
                        $('.button').attr('disabled',true);
                newGame("gana");
            //}
        }
    }

    function newGame(id){
        clearInterval(interval);
        //nuevoJuego.style.display = "";
        $nuevoJuego.css('display','');
        //document.getElementById(id).style.display = "";
        $(`#${id}`).css('display','');
        //document.getElementById("newGame").addEventListener("click", () => location.reload());
        $('#newGame').on('click',()=>location.reload());
    }

    function getButton(id){
        //return document.getElementById(id);
        //console.log(document.getElementById(id).id);
        return $(`#${id}`);
    }

    function init(){
        $(document).on("contextmenu", function(e) {
            e.preventDefault();
        });
        
        //let inputs = document.getElementsByClassName("input");
        $("input").on("click", function(){
            initJuego($(this).val())
        });
        //contenido = document.getElementById("contenido");
        $contenido = $("#contenido");
        //for(let i = 0; i < inputs.length; i++)
            //inputs[i].addEventListener("click", function(){initJuego(this.value)});
        //nuevoJuego = document.getElementById("nuevoJuego");
        $nuevoJuego = $("#nuevoJuego");
        $nuevoJuego.css("display", "none");
        //nuevoJuego.style.display = "none";
        //let span = document.getElementsByTagName("span");
        //span[0].style.display = "none";
        //span[1].style.display = "none";
        let $span = $('span');
        $span.css('display','none');
    }

    $(init);
}
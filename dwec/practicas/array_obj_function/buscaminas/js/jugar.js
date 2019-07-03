{
    document.addEventListener("DOMContentLoaded", init);
    let button, contenido, nuevoJuego, array, cajaJuego, reloj, date1, interval;

    function initJuego(value){
        buscaminas.init(value);

        document.getElementById("form").style.display = "none";

        initCajaJuego();
        
        initCasillas();

        initHora();

    }

    function initCasillas(){
        let caja, contenedor;
        caja = document.createElement('div');
        caja.className = "caja";
        for(let i = 0; i < buscaminas.getFilas(); i++){
            contenedor = document.createElement('div');
            contenedor.id = "contenedor";
            for(let j = 0; j < buscaminas.getColumnas(); j++){
                let input = document.createElement("input");
                input.id = i + '_' + j;
                input.className = "button";
                input.type = "button";
                //input.style.backgroundImage = "url(img/img.png)";
                input.value = buscaminas.getValue(i,j);
                //input.addEventListener("mousedown", function(){comprobarBombas(this.id)});
                input.addEventListener("mousedown", function(e){
                    console.log(e.buttons);
                    //e.preventDefault;
                    //console.log(e.button);
                    button = getButton(this.id);
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
                contenedor.appendChild(input);
            }
            caja.appendChild(contenedor);
        }
        cajaJuego.appendChild(caja);
        contenido.appendChild(cajaJuego);
    }

    function initCajaJuego(){
        cajaJuego = document.createElement('div');
        cajaJuego = document.createElement('div');
        cajaJuego.className = "cajaJuego";
        cajaBanderas = document.createElement('div');
        cajaBanderas.className = "cajaBanderas";
        cajaJuego.appendChild(cajaBanderas);
        cajaTimer = document.createElement('div');
        cajaTimer.className = 'cajaTimer';
        cajaJuego.appendChild(cajaTimer);
        h3Timer = document.createElement('h3');
        h3Timer.id = 'reloj';
        h3Timer.innerHTML = '00 : 00 : 00';
        cajaTimer.appendChild(h3Timer);
        cajaNumeroBanderas = document.createElement('div');
        cajaImagenBandera = document.createElement('div');
        h3Banderas = document.createElement('h3');
        h3Banderas.innerHTML = buscaminas.getMinas();
        h3Banderas.className = "h3Banderas";
        cajaNumeroBanderas.appendChild(h3Banderas);
        cajaImagenBandera.innerHTML = "<img src='img/flag.jpg'/>";
        cajaImagenBandera.className = "cajaImagenBandera";
        cajaBanderas.appendChild(cajaNumeroBanderas);
        cajaBanderas.appendChild(cajaImagenBandera);
        
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
        reloj.innerHTML = hours + " : " + minutes + " : " + seconds;
    }

    function initHora(){
        reloj = document.getElementById('reloj');
        date1 = new Date().getTime();
        interval = setInterval("actualizarReloj()", 1000);
    }

    function ayuda(){
        //button = getButton();
        //button.className = "transition";
        //button.className = "button";
        let ayuda = false;
        let [x,y] = button.id.split('_');
        x = parseInt(x), y = parseInt(y);
        let j = Math.max(x - 1, 0);
        let k = Math.max(y - 1, 0);

        for(j = Math.max(x - 1, 0); j <= Math.min(x + 1, buscaminas.getFilas() - 1); j++)
            for(k = Math.max(y - 1, 0); k <= Math.min(y + 1, buscaminas.getColumnas() - 1); k++)
                if(getButton(j+"_"+k).value === '9'){
                    transition(getButton(j+"_"+k));
                    ayuda = true;
                }
                //if(getButton(j+"_"+k).value !== '0' && getButton(j+"_"+k).value !== '*')
                  //  button = getButton(j+"_"+k); 

        if(!ayuda)
            for(j = Math.max(x - 1, 0); j <= Math.min(x + 1, buscaminas.getFilas() - 1); j++)
                for(k = Math.max(y - 1, 0); k <= Math.min(y + 1, buscaminas.getColumnas() - 1); k++)
                    if(getButton(j+"_"+k).value !== '0'){
                        button = getButton(j+"_"+k);
                        comprobarBombas();
                        return;
                        //ayuda = true;
                    }
            //transition(getButton(j+"_"+k)); 
    }

    function transition(button){
        button.style.transition = 'background-color 0.3s';
        button.style.backgroundColor = 'rgb(231, 140, 140)';
        setTimeout("noTransition()",400);
    }

    function noTransition(){ 
        //button.className = "button";
        let buttons = document.getElementsByClassName('button');
        for(let i = 0; i < buttons.length; i++)
            buttons[i].style.backgroundColor = 'rgb(190, 68, 68)';
        //clearInterval(interval2);
    }

    function posicionarBandera(){
        //button = getButton(id);
        if(button.name === "botonPulsado")
            return;
        if(button.name === "bandera"){
            button.style.backgroundImage = "";
            button.name = "";
            actualizarNumeroBanderas(1);
            return;
        }
        if(document.getElementsByName("bandera").length < buscaminas.getMinas()){
            button.name = "bandera";
            button.style.backgroundImage = "url(img/flag.jpg)";
            actualizarNumeroBanderas(-1);
            comprobarSiHasGanado();
        }
    }

    function actualizarNumeroBanderas(value){
        let numBanderas = document.getElementsByClassName('h3Banderas')[0];
        numBanderas.innerHTML = parseInt(numBanderas.textContent) + value;
    }

    function comprobarBombas(){
        if(button.name === "bandera")
            return;
        array = buscaminas.comprobarBombas(button.id);
        if(array.length === buscaminas.getColumnas() * buscaminas.getFilas()){
            mostrarTablero();
            return;
        }
        for(let i = 0; i < array.length; i++){
            let button = getButton(array[i]);
            button.style.backgroundImage = `url(img/${button.value}.png)`;
            //button.disabled = true;
            if(button.name === "bandera"){
                button.name = "botonPulsado";
                actualizarNumeroBanderas(1);
            }
            button.name = "botonPulsado";
        }
        comprobarSiHasGanado();
    }

    function mostrarTablero(){
        for(let i = 0; i < array.length; i++){
            let button = getButton(array[i]);
            //console.log(buttons[i]);
            button.style.backgroundImage = `url(img/${button.value}.png)`;
            button.disabled = true;
        }
        
        newGame("pierde");
    }

    function comprobarSiHasGanado(){
        if(document.getElementsByName("botonPulsado").length === buscaminas.comprobarSiHasGanado()){
            //if(document.getElementsByName("bandera").length === buscaminas.getMinas()){
                for(let i = 0; i < buscaminas.getFilas(); i++)
                    for(let j = 0; j < buscaminas.getColumnas(); j++)
                        document.getElementById(i + "_" + j).disabled = true;
                newGame("gana");
            //}
        }
    }

    function newGame(id){
        clearInterval(interval);
        nuevoJuego.style.display = "";
        document.getElementById(id).style.display = "";
        document.getElementById("newGame").addEventListener("click", () => location.reload());
    }

    function getButton(id){
        return document.getElementById(id);
    }

    function init(){
        document.oncontextmenu = function(){return false};
        let inputs = document.getElementsByClassName("input");
        contenido = document.getElementById("contenido");
        for(let i = 0; i < inputs.length; i++)
            inputs[i].addEventListener("click", function(){initJuego(this.value)});
        nuevoJuego = document.getElementById("nuevoJuego");
        nuevoJuego.style.display = "none";
        let span = document.getElementsByTagName("span");
        span[0].style.display = "none";
        span[1].style.display = "none";
    }
}
{
    document.addEventListener("DOMContentLoaded", init);
    let filas, columnas, minas, nuevoJuego, contenido, contador=0, nivel, x, y, button;
    //let columnas;
    //let minas;
    //let nivel;
    let posicion = [];
    let tablero = [];
    //let tableroTemporal = [];
    //let x,y;
    

    function crearTablero(){
        let caja, contenedor;
        caja = document.createElement('div');
        caja.className = "caja";
        for(let i = 0; i < filas; i++){
            contenedor = document.createElement('div');
            contenedor.id = "contenedor";
            for(let j = 0; j < columnas; j++){
                let input = document.createElement("input");
                input.id = i + '_' + j;
                input.className = "button";
                input.type = "button";
                input.style.backgroundImage = "url(img/img.png)";
                //input.value = tablero[i][j];
                input.addEventListener("click", comprobarBombas);
                contenedor.appendChild(input);
            }
            caja.appendChild(contenedor);
        }
        contenido.appendChild(caja);
    }

    function initJuego(){
        nivel = this.value;

        document.getElementById("form").style.display = "none";

        switch(nivel){
            case "Facil":
                filas=columnas=minas=8;
                break;
            case "Intermedio":
                filas=columnas=minas=12;
                break;
            default:
                filas=columnas=minas=16;
                break;
        }

        initArray();
        posicionarBombasYNumeros();
        crearTablero();
    }

    function initArray(){
        for(let i = 0; i < filas; i++){
            tablero[i] = [];
            for(let j = 0; j < columnas; j++)
                tablero[i][j] = 0;
        }
        //console.table(tablero);
    }

    function getButton(x, y){
        return document.getElementById(x + '_' + y);
    }

    function posicionarBombasYNumeros(){
        //let x, y;
        for(let i = 0; i < minas; i++){
            do{
                x = Math.floor(Math.random() * minas), y = Math.floor(Math.random() * minas);
            }while(tablero[x][y] === "*")
            tablero[x][y] = "*";
            for(let j = Math.max(x - 1, 0); j <= Math.min(x + 1, filas - 1); j++)
                for(let k = Math.max(y - 1, 0); k <= Math.min(y + 1, columnas - 1); k++)
                    if(tablero[j][k] !== "*")
                        tablero[j][k] += 1;
        }

        console.table(tablero);

        //for(let i = 0; i < filas; i++){
          //  tableroTemporal[i] = [];
            //for(let j = 0; j < columnas; j++)
              //  tableroTemporal[i][j] = 0;
        //}

        
        //tableroTemporal = tablero.map(function(group){
            //return tableroTemporal.concat(group);
          //  return tableroTemporal = [...group];
            //});
    }

    function comprobarBombas(){
        posicion = this.id.split('_');
        x = parseInt(posicion[0]), y = parseInt(posicion[1]);

        if(tablero[x][y] === "*"){
            mostrarTablero();
            return;
        }

        if(tablero[x][y] !== 0 && tablero[x][y] !== "*"){
            button = getButton(x, y);
            button.style.backgroundImage = `url(img/${tablero[x][y]}.png)`;
            //tableroTemporal[x][y] = -1;
            button.disabled = true;
            contador++;
            comprobarSiHasGanado();
            //console.log(tableroTemporal.length);
            //console.table(tablero);
            //console.log('HAS PERDIDO');
            return;
        }

        

        comprobarCasillas(x, y);
        //console.log(tableroTemporal.length);
        //console.table(tableroTemporal);
        comprobarSiHasGanado();
    }

    function comprobarSiHasGanado(){
        
        if(contador === (filas*columnas-minas)){
            for(let i = 0; i < filas; i++)
                for(let j = 0; j < columnas; j++){
                    document.getElementById(i + "_" +j).disabled = true;
            }
            //juegoTerminado.style.display = "";
            newGame("gana");
        }
        //console.table(tableroTemporal);

    }

    function mostrarTablero(){
        //let inputs = document.getElementsByClassName("button");
        for(let i = 0; i < filas; i++)
            for(let j = 0; j < columnas; j++){
                button = getButton(i, j);
                button.style.backgroundImage = `url(img/${tablero[i][j]}.png)`;
                button.disabled = true;
            }
        
        newGame("pierde");
    }

    function newGame(id){
        nuevoJuego.style.display = "";
        document.getElementById(id).style.display = "";
        document.getElementById("newGame").addEventListener("click", () => location.reload());
    }

    function comprobarCasillas(offSetX, offSetY){
        button = getButton(offSetX, offSetY);
        if(button.value === ""){
            //button = "";
            button.value = "0";
            button.disabled = true;
            contador++;
            if(tablero[offSetX][offSetY] == 0){
            for(let j = Math.max(offSetX - 1, 0); j <= Math.min(offSetX + 1, filas - 1); j++)
                for(let k = Math.max(offSetY - 1, 0); k <= Math.min(offSetY + 1, columnas - 1); k++){
                    //if(tablero[offSetX][offSetY] !== -"*"){
                        document.getElementById(j + "_" + k).style.backgroundImage = `url(img/${tablero[j][k]}.png)`;
                        //console.log(document.getElementById(j.toString() + "" +k.toString()));
                        comprobarCasillas(j, k);
                }
            }
                    //}
        }

        
        //console.table(tableroTemporal);
        //mostrarCasillasVisibles(tableroTemporal);
    }

    function init(){
        //nivelDificultad();
        let inputs = document.getElementsByClassName("input");
        contenido = document.getElementById("contenido");
        for(let i = 0; i < inputs.length; i++)
            inputs[i].addEventListener("click", initJuego);
        nuevoJuego = document.getElementById("nuevoJuego");
        nuevoJuego.style.display = "none";
        let span = document.getElementsByTagName("span");
        span[0].style.display = "none";
        span[1].style.display = "none";
        
        //nuevoJuego.style.display="none";
        //nuevoJuego.addEventListener("click", ()=>location.reload());
    }
}
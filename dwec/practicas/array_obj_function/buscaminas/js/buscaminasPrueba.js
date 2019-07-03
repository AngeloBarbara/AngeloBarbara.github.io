let buscaminas = (function(){
        let filas, columnas, minas, contador = 0, nivel, x, y, tablero = [], tablero2 = [], array = [];

        function init(value){
            nivel = value;
            //console.log(nivel);
    
            //document.getElementById("form").style.display = "none";
    
            switch(nivel){
                case "Facil":
                    filas=columnas=minas=8;
                    break;
                case "Intermedio":
                    filas=columnas=minas=16;
                    break;
                default:
                    filas=columnas=minas=24;
                    break;
            }
    
            initArray();
            posicionarBombasYNumeros();
            //crearTablero();
        }

        function initArray(){
            for(let i = 0; i < filas; i++){
                tablero[i] = [];
                tablero2[i] = [];
                for(let j = 0; j < columnas; j++){
                    tablero[i][j] = 0;
                    tablero2[i][j] = 0;
                }
            }
        }

        function posicionarBombasYNumeros(){
            for(let i = 0; i < minas; i++){
                do{
                    x = Math.floor(Math.random() * filas), y = Math.floor(Math.random() * columnas);
                }while(tablero[x][y] === "*")
                tablero[x][y] = "*";
                for(let j = Math.max(x - 1, 0); j <= Math.min(x + 1, filas - 1); j++)
                    for(let k = Math.max(y - 1, 0); k <= Math.min(y + 1, columnas - 1); k++)
                        if(tablero[j][k] !== "*")
                            tablero[j][k] += 1;
            }
    
            console.table(tablero);
        }

        //function getButton(x, y){
          //  return document.getElementById(x + '_' + y);
        //}

        function comprobarBombas(input){
            let posicion = input.split('_');
            x = parseInt(posicion[0]), y = parseInt(posicion[1]);
    
            if(tablero[x][y] === "*"){
                array = [];
                for(let i = 0; i < filas; i++)
                    for(let j = 0; j < columnas; j++)
                        array.push(i+'_'+j);
                return array;
            }
    
            if(tablero[x][y] !== 0 && tablero[x][y] !== "*"){
                array = [x+'_'+y];
                //button = getButton(x, y);
                //button.style.backgroundImage = `url(img/${tablero[x][y]}.png)`;
                //button.disabled = true;
                contador++;
                //comprobarSiHasGanado();
                console.log(contador);
                return array;
            }
    
            array = [];
            comprobarCasillas(x, y);
            console.log(contador);
            return array;
            //comprobarSiHasGanado();
        }

        function getValue(x,y){
            return tablero[x][y];
        }

        function comprobarSiHasGanado(){
        
            if(contador >= (filas*columnas-minas))//{
                //for(let i = 0; i < filas; i++)
                  //  for(let j = 0; j < columnas; j++){
                    //    document.getElementById(i + "_" +j).disabled = true;
                    return true;
                //}
                //newGame("gana");
            //}
        }

        function comprobarCasillas(offSetX, offSetY){
            //button = getButton(offSetX, offSetY);
            if(tablero2[offSetX][offSetY] === 0){
                tablero2[offSetX][offSetY] = -1;
                contador++;
                if(tablero[offSetX][offSetY] === 0){
                for(let j = Math.max(offSetX - 1, 0); j <= Math.min(offSetX + 1, filas - 1); j++)
                    for(let k = Math.max(offSetY - 1, 0); k <= Math.min(offSetY + 1, columnas - 1); k++){
                            //document.getElementById(j + "_" + k).style.backgroundImage = `url(img/${tablero[j][k]}.png)`;
                            array.push(j+'_'+k);
                            comprobarCasillas(j, k);
                    }
                }
            }
            
        }

        function getFilas(){
            return filas;
        }

        function getColumnas(){
            return columnas;
        }

        function getTablero(){
            return tablero;
        }

        function getMinas(){
            return minas;
        }

        return{
            init : init,
            comprobarBombas : comprobarBombas ,
            getValue : getValue,
            comprobarSiHasGanado : comprobarSiHasGanado,
            getFilas : getFilas,
            getColumnas : getColumnas,
            getTablero : getTablero,
            getMinas : getMinas
        }

    })();  
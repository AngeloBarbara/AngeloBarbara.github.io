let buscaminas = (function(){
        let filas, columnas, minas, nivel, tablero = [], tablero2 = [], array = [];

        function init(value){
            nivel = value;
    
            switch(nivel){
                case "Facil":
                    filas=columnas=minas=8;
                    break;
                case "Intermedio":
                    filas=columnas=16,minas=30;
                    break;
                case "Dificil":
                    filas=16,columnas=30,minas=99;
                    break;
            }
    
            initArray();
            posicionarBombasYNumeros();
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
                }while(tablero[x][y] === "9")
                tablero[x][y] = "9";
                for(let j = Math.max(x - 1, 0); j <= Math.min(x + 1, filas - 1); j++)
                    for(let k = Math.max(y - 1, 0); k <= Math.min(y + 1, columnas - 1); k++)
                        if(tablero[j][k] !== "9")
                            tablero[j][k] += 1;
            }
    
            console.table(tablero);
        }

        function comprobarBombas(input){
            let [x,y] = input.split('_');
            x = parseInt(x), y = parseInt(y);
    
            if(tablero[x][y] === "9"){
                let array = [];
                for(let i = 0; i < filas; i++)
                    for(let j = 0; j < columnas; j++)
                        array.push(i+'_'+j);
                return array;
            }
    
            if(tablero[x][y] !== 0 && tablero[x][y] !== "9"){
                let array = [x+'_'+y];
                //contador++;
                //tablero2[x][y] = -1;
                //console.log(contador);
                return array;
            }
    
            array = [];
            comprobarCasillas(x, y);
            //console.log(contador);
            return array;
        }

        function getValue(x,y){
            return tablero[x][y];
        }

        function comprobarSiHasGanado(){
        
            return filas*columnas-minas;
        }

        function comprobarCasillas(offSetX, offSetY){
            if(tablero2[offSetX][offSetY] === 0){
                tablero2[offSetX][offSetY] = -1;
                //contador++;
                if(tablero[offSetX][offSetY] === 0)
                    for(let j = Math.max(offSetX - 1, 0); j <= Math.min(offSetX + 1, filas - 1); j++)
                        for(let k = Math.max(offSetY - 1, 0); k <= Math.min(offSetY + 1, columnas - 1); k++){
                                array.push(j+'_'+k);
                                comprobarCasillas(j, k);
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
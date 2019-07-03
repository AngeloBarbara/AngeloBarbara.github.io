{
    document.addEventListener("DOMContentLoaded", init);
    let filas, columnas, minas, nivel, x, y;
    //let columnas;
    //let minas;
    //let nivel;
    let posicion = [];
    let tablero = [];
    //let x,y;

    function nivelDificultad(){
        nivel = pedirNivel();
        if(isNaN(nivel) || nivel<0 || nivel>3)
            return nivelDificultad();
        switch(nivel){
            case 1:
                filas=columnas=minas=8;
                break;
            case 2:
                filas=columnas=minas=9;
                break;
            default:
                filas=columnas=minas=10;
                break;
        }
    }

    function pedirNivel(){
        return parseInt(prompt("Introduzca nivel dificultad: (1. facil / 2. intermedio / 3. experto)"));
    }

    function initArray(){
        for(let i = 0; i < filas; i++){
            tablero[i] = [];
            for(let j = 0; j < columnas; j++)
                tablero[i][j] = 0;
        }
        //console.table(tablero);
    }

    function posicionarBombasYNumeros(){
        //let x, y;
        for(let i = 0; i < minas; i++){
            do{
                x = Math.floor(Math.random() * minas), y = Math.floor(Math.random() * minas);
            }while(tablero[x][y] === 9)
            tablero[x][y] = 9;
            for(let j = Math.max(x - 1, 0); j <= Math.min(x + 1, filas - 1); j++)
                for(let k = Math.max(y - 1, 0); k <= Math.min(y + 1, columnas - 1); k++)
                    if(tablero[j][k] !== 9)
                        tablero[j][k] += 1;
        }
        console.table(tablero);
    }

    function pedirPosicion(){
        return prompt("Introduzca los valores de x e y: ");
    }

    function pulsar(){
        posicion = pedirPosicion().split('');
        if(posicion.some(e=>isNaN(e)))
            return pulsar();
        if(posicion.length !== 2 || posicion[0] < 0 || posicion[0] > minas -1 || posicion[1] < 0 || posicion[1] > minas -1)
            return pulsar();
        comprobarBombas();
    }

    function comprobarBombas(){
        x = parseInt(posicion[0]), y = parseInt(posicion[1]);
        console.log("x = " +posicion[0] + " y =" + posicion[1]);
        //console.log(x);
        //console.log(y);
        //console.log(tablero[x][y]);
        if(tablero[x][y] === 9){
            //console.table(tablero);
            console.log('HAS PERDIDO');
            return;
        }
        
        pulsar();

    }

    function init(){
        nivelDificultad();
        //crearTablero();
        initArray();
        posicionarBombasYNumeros();
        pulsar();
    }
}
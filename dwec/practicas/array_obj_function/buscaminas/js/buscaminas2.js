{
    document.addEventListener("DOMContentLoaded", init);

    let buscaminas = {
        filas : 0, columnas : 0, minas : 0, nivel : 0, tablero : [], tablero2 : [], array : [], tablero3: [], fin : false, contador : 0,

        init(value){
            nivel = value;
    
            switch(nivel){
                case "facil":
                    filas=columnas=minas=8;
                    break;
                case "intermedio":
                    filas=columnas=16,minas=30;
                    break;
                default:
                    filas=16,columnas=30,minas=99;
                    break;
            }
    
            this.initArray();
            this.posicionarBombasYNumeros();
        },

        initArray(){
            for(let i = 0; i < filas; i++){
                this.tablero[i] = [];
                this.tablero2[i] = [];
                this.tablero3[i] = [];
                for(let j = 0; j < columnas; j++){
                    this.tablero[i][j] = 0;
                    this.tablero2[i][j] = 0;
                    this.tablero3[i][j] = "*";
                }
            }
        },

        posicionarBombasYNumeros(){
            for(let i = 0; i < minas; i++){
                do{
                    x = Math.floor(Math.random() * filas), y = Math.floor(Math.random() * columnas);
                }while(this.tablero[x][y] === "9")
                this.tablero[x][y] = "9";
                for(let j = Math.max(x - 1, 0); j <= Math.min(x + 1, filas - 1); j++)
                    for(let k = Math.max(y - 1, 0); k <= Math.min(y + 1, columnas - 1); k++)
                        if(this.tablero[j][k] !== "9")
                        this.tablero[j][k] += 1;
            }
    
            console.table(this.tablero);
            console.table(this.tablero3);
        },

        comprobarBombas(inputX, inputY){
            //let [x,y] = input.split('_');
            let x = parseInt(inputX), y = parseInt(inputY);
            if(x < 0 || x > filas - 1 || y < 0 || y > columnas - 1)
             throw new Error("Introduzca una posición correcta");
    
            if(this.tablero[x][y] === "9"){
                this.fin = true;
                //let array = [];
                for(let i = 0; i < filas; i++)
                    for(let j = 0; j < columnas; j++)
                        this.tablero3[i][j] = this.tablero[i][j];

                console.log("PERDISTE");
                return;
                        //array.push(i+'_'+j);
                //return array;
            }
    
            if(this.tablero[x][y] !== 0 && this.tablero[x][y] !== "9"){
                //let array = [x+'_'+y];
                this.tablero3[x][y] = this.tablero[x][y];
                this.contador++;
                //contador++;
                //tablero2[x][y] = -1;
                //console.log(contador);
                //return array;
            }
    
            //this.array = [];
            this.comprobarCasillas(x, y);
            //console.log(contador);
            //return array;
            this.comprobarSiHasGanado();
            console.table(this.tablero3);
            //console.table(this.tablero2);
            //console.table(this.tablero);
        },

        getValue(x,y){
            return this.tablero[x][y];
        },

        comprobarSiHasGanado(){
            //return filas*columnas-minas;
            //let result = [];

            //for(let i = 0; i < filas; i++)
              //  for(let j = 0; j < columnas; j++)
                //    if(this.tablero3[i][j] === "*")
                  //      this.result.push(this.tablero3[i][j]);
            
            //if(this.result.length === minas)
              //  console.log("GANASTE");
            if(this.contador === filas*columnas-minas)
                console.log(result.length);
        },

        comprobarCasillas(offSetX, offSetY){
            if(this.tablero2[offSetX][offSetY] === 0){
                this.tablero2[offSetX][offSetY] = -1;
                //contador++;
                if(this.tablero[offSetX][offSetY] === 0)
                    for(let j = Math.max(offSetX - 1, 0); j <= Math.min(offSetX + 1, filas - 1); j++)
                        for(let k = Math.max(offSetY - 1, 0); k <= Math.min(offSetY + 1, columnas - 1); k++){
                            this.tablero3[j][k] = this.tablero[j][k];
                            //this.array.push(j+'_'+k);
                            this.contador++;
                            this.comprobarCasillas(j, k);
                        }
            }
            
        },

    };

    function init(){
        let value = prompt("Introduzca el nivel (facil/intermedio/dificil):");
        buscaminas.init(value.toLowerCase());
        do{
            try {
                buscaminas.comprobarBombas(prompt("Introduzca el valor de la x:"), prompt("Introduzca el valor de la y:"));
            } catch (error) {
                alert(error.message);
            }
        }while(buscaminas.fin === false || this.contador === filas*columnas-minas);
    }
}
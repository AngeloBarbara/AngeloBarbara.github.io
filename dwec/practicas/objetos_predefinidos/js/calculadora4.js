/**
 * 
 * @author Angelo Barbara
 */

{
    document.addEventListener("DOMContentLoaded", init);
    //let botones = ["CE", "<-", "%", "+", "7", "8", "9", "-", "4", "5", "6", "x", "1", "2", "3", "/", "0", "+-", ",", "="];
    //let contador = 0;
    //let numero;
    //let texto;
    //let operador = "";
    //let operacionEfectuada = false;

    let calculadora = {
        botones : ["CE", "<-", "%", "+", "7", "8", "9", "-", "4", "5", "6", "x", "1", "2", "3", "/", "0", "+-", ",", "="],
        numero : 0,
        operador : "",
        contador : 0,
        display : [],
        operacionEfectuada: false,
        input : "",

//        crearCalculadora : function(){
        crearCalculadora (){
            let contenido = document.createElement("div");
            let elemento = document.createElement("div");
            let input = document.createElement("input");
            let contador = 0;
            input.disabled = true;
            contenido.className = "calculadora";
            calculadora.addAtributosEvento(input, "text", 0, "texto");
            elemento.appendChild(input);
            contenido.appendChild(elemento);
            
            for (let i = 0; i < 5; i++) {
                elemento = document.createElement("div");
                for (let j = 0; j < 4; j++) {
                    input = document.createElement("input");
                    calculadora.addAtributosEvento(input, "button", calculadora.botones[contador++], "button");
                    elemento.appendChild(input);
                }
                contenido.appendChild(elemento);
            }


            document.body.appendChild(contenido);
            calculadora.display = document.getElementsByClassName("texto")[0];
            calculadora.input = document.getElementsByTagName("input");
        },

        //addAtributosEvento: function(element, tipo, valor, clase){
        addAtributosEvento(element, tipo, valor, clase){
            element.type = tipo;
            element.value = valor;
            element.className = clase;
            element.addEventListener('click', calculadora.funcionalidad);
        },

        funcionalidad: function(){
            //texto = document.getElementsByClassName("texto")[0];
            if(calculadora.display.value == "Error" && this.value != "CE")
                return;
            if(!isNaN(parseInt(this.value))){
                if(calculadora.operacionEfectuada)
                    calculadora.display.value = 0;
    
                if(calculadora.display.value == 0 && !calculadora.display.value.includes('.'))
                    calculadora.display.value = parseFloat(this.value);
                else
                    calculadora.display.value += parseFloat(this.value);
    
                calculadora.operacionEfectuada = false;
                    
                    
                //});
            }else{
                //if(numero != 0)
                if(calculadora.operador != "" && this.value != "CE" && this.value != "+-" && this.value != "," && this.value != "<-" && this.value != "%")
                    calculadora.operacion();
                        
                calculadora.comprobarOperador(this.value);
                    
                if(this.value != "+-" && this.value != "," && this.value != "CE" && this.value != "<-")
                    calculadora.operacionEfectuada = true;
            }
        },

        comprobarOperador: function(value){
            if(value == "+" || value == "-" || value == "x" || value == "/")
                calculadora.numero = parseFloat(calculadora.display.value);
            switch(value){
                case "+":
                    calculadora.operador = "+";
                    //numero = parseFloat(texto.value);
                    break;
                case "-":
                    calculadora.operador = "-";
                    //numero = parseFloat(texto.value);
                    break;
                case "x":
                    calculadora.operador = "x";
                    //numero = parseFloat(texto.value);
                    break;
                case "/":
                    calculadora.operador = "/";
                    //numero = parseFloat(texto.value);
                    break;
                case "+-":
                    calculadora.display.value = parseFloat(calculadora.display.value) * -1;
                    break;
                case ",":
                    if(!calculadora.operacionEfectuada){
                        if(!calculadora.display.value.includes('.'))
                            calculadora.display.value += '.';
                    }
                    break;
                case "<-": 
                    if(calculadora.display.value.length === 1)
                        calculadora.display.value = 0;
                    else
                        calculadora.display.value = calculadora.display.value.slice(0, calculadora.display.value.length - 1);
                    break;
                case "CE":
                    calculadora.display.value = 0;
                    calculadora.operador = "";
                    break;
                case "%":
                    calculadora.display.value = parseFloat(calculadora.display.value) / 100;
                    break;
                case "=":
                    calculadora.operacion();
                    break;
            }
        },

        operacion: function(){
            if(calculadora.operador != ""){
                switch(calculadora.operador){
                    case "+":
                        calculadora.display.value = parseFloat(calculadora.display.value) + calculadora.numero;
                        break;
                    case "-":
                        calculadora.display.value = calculadora.numero - parseFloat(calculadora.display.value);
                        break;
                    case "x":
                        calculadora.display.value = parseFloat(calculadora.display.value) * calculadora.numero;
                        break;
                    case "/":
                        calculadora.display.value = calculadora.numero / parseFloat(calculadora.display.value);
                        break;
                }
            }
            if(calculadora.display.value == "Infinity")
                calculadora.display.value = "Error";
            calculadora.operador = "";
    
        }
    };

    function init(){
        calculadora.crearCalculadora();
        //let buttons = document.getElementsByTagName("input");
        //calculadora.display = document.getElementsByClassName("texto")[0];
        //calculadora.input = document.getElementsByTagName("input");
        //for(let i = 0; i < buttons.length; i++)
           // buttons[i].addEventListener('click', funcionalidad);
        //Array.prototype.forEach.call(calculadora.input, element => {
           // element.addEventListener('click', calculadora.funcionalidad);
        //});
    }

    

    

    

    

    

    

}

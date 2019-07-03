/**
 * 
 * @author Angelo Barbara
 */

{
    document.addEventListener("DOMContentLoaded", init)
    let botones = ["CE", "<-", "%", "+", "7", "8", "9", "-", "4", "5", "6", "*", "1", "2", "3", "/", "0", "+-", ".", "="];
    let contador = 0;
    //let numero;
    let texto;
    //let operador = "";
    let operacionEfectuada = false;

    function crearCalculadora() {
        let contenido = document.createElement("div");
        let elemento = document.createElement("div");
        let input = document.createElement("input");
        input.disabled = true;
        contenido.className = "calculadora";
        addAtributos(input, "text", 0, "texto");
        elemento.appendChild(input);
        contenido.appendChild(elemento);
        
        for (let i = 0; i < 5; i++) {
            elemento = document.createElement("div");
            for (let j = 0; j < 4; j++) {
                input = document.createElement("input");
                addAtributos(input, "button", botones[contador++], "button");
                elemento.appendChild(input);
            }
            contenido.appendChild(elemento);
        }


        document.body.appendChild(contenido);
    }

    function addAtributos(element, tipo, valor, clase){
        element.type = tipo;
        element.value = valor;
        element.className = clase;
    }

    

    function funcionalidad(){
        //texto = document.getElementsByClassName("texto")[0];
        let valor = this.value;
        if(texto.value == "Error" && valor != "CE")
            return;
        if(valor == "." && texto.value.includes('.'))
            return;
        if(isNaN(texto.value.charAt(texto.value.length - 1)) && isNaN(valor) && valor != "CE" && valor != "<-")
            return;
        if(valor == "CE" || valor == "<-" || valor == "+-" || valor == "%"){
            comprobarOperador(valor);
            return;
        }
        //if(!isNaN(parseInt(this.value))){
          //  if(operacionEfectuada)
            //    texto.value = 0;

        if(operacionEfectuada){
            if(!isNaN(parseFloat(valor)))
                texto.value = 0;
                //if(operacionEfectuada)
            operacionEfectuada = false;
        }

        if(!isNaN(parseFloat(valor))){
            if(texto.value == 0 && !texto.value.includes('.')){
                texto.value = valor;
                return;
            }
        }

        //else
        if(valor != "=")
            texto.value += valor;
        else
            operacion();
                
                
            //});
       // }else{
         //   //if(numero != 0)
           // if(operador != "" && this.value != "CE" && this.value != "+-" && this.value != "," && this.value != "<-" && this.value != "%")
             //   operacion();
                    
            //comprobarOperador(this.value);
                
            //if(this.value != "+-" && this.value != "," && this.value != "CE" && this.value != "<-")
              //  operacionEfectuada = true;
        
    }

    function comprobarOperador(value){
        //if(value == "+" || value == "-" || value == "x" || value == "/")
         //   numero = parseFloat(texto.value);
        switch(value){
            //case "+":
              //  operador = "+";
                //numero = parseFloat(texto.value);
                //break;
            //case "-":
              //  operador = "-";
                //numero = parseFloat(texto.value);
               // break;
            //case "x":
              //  operador = "x";
                //numero = parseFloat(texto.value);
                //break;
            //case "/":
              //  operador = "/";
                //numero = parseFloat(texto.value);
               // break;
            case "+-":
                texto.value = parseFloat(texto.value) * -1;
                break;
           // case ",":
             //   if(!operacionEfectuada){
               //     if(!texto.value.includes('.'))
                 //       texto.value += '.';
                //}
                //break;
            case "<-": 
                if(texto.value.length === 1)
                    texto.value = 0;
                else
                    texto.value = texto.value.slice(0, texto.value.length - 1);
                break;
            case "CE":
                texto.value = 0;
                //operador = "";
                break;
            case "%":
                texto.value = parseFloat(texto.value) / 100;
                break;
            //case "=":
              //  operacion();
                //break;
        }
    }

    function operacion(){
        //if(operador != ""){
          //  switch(operador){
            //    case "+":
              //      texto.value = parseFloat(texto.value) + numero;
                //    break;
                //case "-":
                  //  texto.value = numero - parseFloat(texto.value);
                    //break;
                //case "x":
                  //  texto.value = parseFloat(texto.value) * numero;
                    //break;
                //case "/":
                  //  texto.value = numero / parseFloat(texto.value);
                    //break;
            //}
        //}
        //if(texto.value){
        texto.value = eval(texto.value);
        operacionEfectuada = true;
        //}
        if(texto.value == "Infinity")
            texto.value = "Error";
        //operador = "";

    }

    function init(){
        crearCalculadora();
        //let buttons = document.getElementsByTagName("input");
        texto = document.getElementsByClassName("texto")[0];
        let input = document.getElementsByTagName("input");
        //for(let i = 0; i < buttons.length; i++)
           // buttons[i].addEventListener('click', funcionalidad);
        Array.prototype.forEach.call(input, element => {
            element.addEventListener('click', funcionalidad);
        });
    }

}

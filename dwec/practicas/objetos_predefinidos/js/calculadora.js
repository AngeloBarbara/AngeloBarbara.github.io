/**
 * 
 * @author Angelo Barbara
 */

{
    document.addEventListener("DOMContentLoaded", init)
    let botones = ["CE", "<-", "%", "+", "7", "8", "9", "-", "4", "5", "6", "x", "1", "2", "3", "/", "0", "+-", ",", "="];
    let contador = 0;

    function crearCalculadora() {
        let contenido = document.createElement("div");
        let elemento = document.createElement("div");
        let input = document.createElement("input");
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
        let botoness = document.getElementsByTagName("input");
        let texto = document.getElementsByClassName("texto")[0];

    //for(let i in botoness){
      //  if(!isNaN(parseInt(botoness[i].value)))
        //   botoness[i].addEventListener("click", function() {
          //  document.getElementsByClassName("texto")[0].value = this.value;
           //});
    //}

        Array.prototype.forEach.call(botoness, element => {
            if(!isNaN(parseInt(element.value)))
            element.addEventListener("click", function() {
                if(texto.value == 0)
                    texto.value = parseFloat(this.value);
                else
                    texto.value += parseFloat(this.value);
            });
            if(element.value === "+-")
                element.addEventListener("click", function() {
                    texto.value = parseFloat(texto.value) * -1;
            });
        });
    }

    function init(){
        crearCalculadora();
        funcionalidad();
    }

}

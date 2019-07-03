{
    document.addEventListener("DOMContentLoaded", init);
    //let nombre, fecha, raza, peso;
    let cajaError, textoError;

    function enviarFormulario(event){
        event.preventDefault();
        //cajaError.style.display = 'none';
        let nombre = document.getElementById('nombre').value;
        //lindoGatito.valirNombre('eee');
        //nombre.addEventListener('blur', lindoGatito.validarNombre);
        let fecha = document.getElementById('fecha').value;
        let raza = document.getElementById('raza');
        raza = raza.options[raza.selectedIndex].value;
        let peso = document.getElementById('peso').value;

        try {
            let gatito = new LindoGatito(nombre, fecha, raza, peso);
            cajaError.style.display = 'none';
            let nuevaVentana = window.open('', '', 'width=1200px', 'heigth=1200px');
            nuevaVentana.document.open();
            nuevaVentana.document.gatito = gatito;
            nuevaVentana.document.write(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <link rel="stylesheet" href="css/style.css">
                <script src="js/lindoGatito.js"></script>
                <script src="js/funcionalidad.js"></script>
                <title>Lindo Gatito</title>
            </head>
            <body>
                <div id="web">
                    <img src="img/gato.jpg" alt="" id="imagen">
                    <h1 id="estado">Soy ${nombre}!!! Encantado de conocerte</h1>
                    <div id="form">
                        <label for="">Nombre:</label><br>
                        <input type="text" name="" id="nombre" value="${nombre}" disabled><br><br>
                        <label for="">Edad:</label><br>
                        <input type="text" name="" id="fecha" value="${gatito.getEdad()}" disabled><br><br>
                        <label for="">Raza:</label><br>
                        <input name="" id="raza" value=${raza} disabled><br><br>
                        <label for="">Peso:</label><br>
                        <input type="text" name="" id="peso" value="${peso}" disabled><br><br>
                    </div>
                    <div id="funciones">
                        <input type="button" id="jugar" value="Jugar">
                        <input type="button" id="comer" value="Comer">
                        <input type="button" id="dormir" value="Dormir">
                    </div>
                </div>
            </body>
            </html>`);
            nuevaVentana.document.close();
        } catch (error) {
            cajaError.style.display = '';
            textoError.innerHTML = error.message;
            //error.innerHTML = 'aaaaaaa';
        }
    }

    //document.createElement(span);
    //formulario.insertBefore(div, document.getElementById);

    function initFecha(){
        fecha = document.getElementById("fecha");
        fecha.value = new Date().toISOString().split("T")[0];
    }

    function init(){
        document.getElementById('enviar').addEventListener('click', enviarFormulario);
        initFecha();
        cajaError = document.getElementById('cajaError');
        cajaError.style.display = 'none';
        textoError = document.getElementById('error');
    }
}
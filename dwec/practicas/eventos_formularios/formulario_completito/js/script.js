{
    document.addEventListener("DOMContentLoaded", init);

    let btnEnviar;
    let nombre;
    let errorNombre;
    let correo;
    //let patronCorreo = /\w+([\._-]?\w+)*@\w+([\._-]?\w+)*\.\w{2,3}$/;
    let errorCorreo;
    let dni;
    let errorDni;
    let fecha;
    let errorFecha;
    let telefono;
    let errorTelefono;
    let cuenta;
    let errorCuenta;
    let url;
    let errorUrl;
    let curso;
    let errorCurso;
    let asignaturas;
    let errorAsignaturas;
    let terminos;
    let errorTerminos;
    
    let validaciones = [];

    let patrones = {
        nombre: /^[A-Za-záéíóúÁÉÍÓÚÑñ]{2,}/,
        correo: /\w+([\._-]?\w+)*@\w+([\._-]?\w+)*\.\w{2,3}$/,
        dni: /^(\d{8})[ -]?([TRWAGMYFPDXBNJZSQVHLCKET])$/i,
        fecha: /^(.*)[\/\-](.*)[\/\-](.*)$/,
        telefono: /^(\+\d{2,3})?[6789]\d{8}$/,
        cuenta: /^[A-Z]{2}\d{2}[ \-]?\d{4}[ \-]?\d{4}[ \-]?\d{2}[ \-]?\d{10}$/,
        url: /^(http[s]?:\/\/)?\w+\d*(\.\w+)*\.\w{2,3}$/
    }

    let mensajes = {
        nombre: "Por favor introduzca un nombre válido!",
        nHermanos: "Por favor introduzca un número válido!",
        correo: "Por favor introduzca un correo válido!",
        dni: "Por favor introduzca un dni válido!",
        fecha: "Por favor introduzca una fecha válida!",
        telefono: "Por favor introduzca un teléfono válido!",
        cuenta: "Por favor introduzca una cuenta válida!",
        url: "Por favor introduzca una URL válida!"
    }

    function setError(elemento, elementoError, mensaje) {
        elementoError.innerHTML = mensaje;
        elementoError.style = "color: rgb(239, 21, 174); font-weight: bold";
        elemento.style = "border-color: red; border-width: 2px;";
    }

    function quitarError(elemento, elementoError) {
        elementoError.innerHTML = "";
        elemento.style = "border-color: white";
    }

    function validar(elemento, elementoError, patron, mensaje) {
        if (!patron.test(elemento.value)) {
            setError(elemento, elementoError, mensaje);
            validaciones.push(elemento);
        } else {
            quitarError(elemento, elementoError);
        }
    }

    function validarDni(){
        let letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];
        let regex = /^(\d{8})[ -]?([TRWAGMYFPDXBNJZSQVHLCKET])$/i;
        let valor = this.value,
        grupos = regex.exec(valor);
        errorDni.style = "color: rgb(239, 21, 174); font-weight: bold";
        dni.style = "border-color: red; border-width: 2px;";

        if (grupos === null) {
            if (valor === ""){
                errorDni.innerHTML = "Campo Vacio";
                validaciones.push(dni);
            }
            else{
                errorDni.innerHTML = "Formato incorrecto";
                validaciones.push(dni);
            }
            return;
        }

        //Destructuring
        [, numero, letra] = grupos;

        if (letra.toUpperCase() !== letras[parseInt(numero % 23)]){
            errorDni.innerHTML = "Letra incorrecta";
            validaciones.push(dni);
        }else {
            quitarError(dni, errorDni);
            
        }

    }

    function validarFecha() {
        let date = fecha.value;
        let arrayFecha = date.split("/");
        let dia = parseInt(arrayFecha[0]);
        let mes = parseInt(arrayFecha[1]) - 1;
        let anio = parseInt(arrayFecha[2]);

        let fechaComprobar = new Date(anio, mes, dia);

        if (dia != fechaComprobar.getDate() || mes != fechaComprobar.getMonth() || anio != fechaComprobar.getFullYear()) {
            setError(fecha, errorFecha, mensajes.fecha);
            validaciones.push(fecha);
        } else {
            quitarError(fecha, errorFecha);
        }
    }

    function validarCurso() {
        if (curso.value === "seleccionar") {
            setError(curso, errorCurso, "Por favor escoja un curso!");
            validaciones.push(curso);
        } else {
            quitarError(curso, errorCurso);
        }
    }

    function validarAsignaturas() {
        let contador = 0;

        for (let i = 0; i < asignaturas.length; i++) {
            if (asignaturas[i].checked) {
                contador++;
            }

        }

        if (contador < 2) {
            setError(asignaturas, errorAsignaturas, "Por favor escoja al menos 2 asignaturas!");
        } else {
            quitarError(asignaturas, errorAsignaturas);
        }
    }

    function validarTerminos() {
        if (!terminos.checked) {
            setError(terminos, errorTerminos, "Debe aceptar nuestros términos de uso!");
        } else {
            quitarError(terminos, errorTerminos);
        }
    }

    function init(){
        btnEnviar = document.getElementById("enviar");
        nombre = document.getElementById("nombre");
        errorNombre = document.getElementById("errorNombre");
        correo = document.getElementById("correo");
        errorCorreo = document.getElementById("errorCorreo");
        dni = document.getElementById("dni");
        errorDni = document.getElementById("errorDni");
        fecha = document.getElementById("fecha");
        errorFecha = document.getElementById("errorFecha");
        telefono = document.getElementById("nTelefono");
        errorTelefono = document.getElementById("errorNTelefono");
        cuenta = document.getElementById("nCuenta");
        errorCuenta = document.getElementById("errorNCuenta");
        url = document.getElementById("url");
        errorUrl = document.getElementById("errorUrl");
        curso = document.getElementById("curso");
        errorCurso = document.getElementById("errorCurso");
        asignaturas = document.getElementsByClassName("asignatura");
        errorAsignaturas = document.getElementById("errorAsignatura");
        terminos = document.getElementById("terminosUso");
        errorTerminos = document.getElementById("errorTerminosUso");
        nombre.addEventListener("blur", function () {
            validar(nombre, errorNombre, patrones.nombre, mensajes.nombre);
        });
    
        correo.addEventListener("blur", function () {
            validar(correo, errorCorreo, patrones.correo, mensajes.correo);
        });
    
        dni.addEventListener("blur", validarDni);
    
        fecha.addEventListener("blur", validarFecha);
    
        telefono.addEventListener("blur", function () {
            validar(telefono, errorTelefono, patrones.telefono, mensajes.telefono);
        });
    
        cuenta.addEventListener("blur", function () {
            validar(cuenta, errorCuenta, patrones.cuenta, mensajes.cuenta);
        });
    
        url.addEventListener("blur", function () {
            validar(url, errorUrl, patrones.url, mensajes.url);
        });
    
        curso.addEventListener("blur", validarCurso);

        btnEnviar.addEventListener("click", function () {
            validar(nombre, errorNombre, patrones.nombre, mensajes.nombre);
            validar(correo, errorCorreo, patrones.correo, mensajes.correo);
            validarDni();
            validarFecha();
            validar(telefono, errorTelefono, patrones.telefono, mensajes.telefono);
            validar(cuenta, errorCuenta, patrones.cuenta, mensajes.cuenta);
            validar(url, errorUrl, patrones.url, mensajes.url);
            validarCurso();
            validarAsignaturas();
            validarTerminos();
            validaciones[0].focus();
            validaciones = [];
        });
    }
}
{
    document.addEventListener("DOMContentLoaded", init);

    let nombre;
    let errorNombre;
    let correo;
    let errorCorreo;
    let fechaLlegada;
    let errorFechaLlegada;
    let horaLlegada;
    let errorHoraLlegada;
    let nNoches;
    let errorNNoches;
    let nPersonas;
    let errorNPersonas
    let servicio;
    let edad;
    let dia;
    let mes;
    let anio;
    let validaciones = [];

    function enviar(){
       //ev.preventDefault();
       validaciones = [];
       //quitarError(fechaLlegada, errorFechaLlegada)
       validar(nombre, errorNombre, patrones.nombre, mensajes.nombre);
       validar(correo, errorCorreo, patrones.correo, mensajes.correo);
       validarFecha();
       validar(horaLlegada, errorHoraLlegada, patrones.hora, mensajes.hora);
       validarEnteros(nNoches, errorNNoches, mensajes.numero);
       validarEnteros(nPersonas, errorNPersonas, mensajes.numero);
       //validarNoches();
       //validarPersonas();
        
       if(validaciones.length !== 0)
            validaciones[0].focus();

       if(validaciones.length === 0){
            try{
                let reserva = new Reserva(nombre.value, correo.value, new Date(anio, mes, dia), horaLlegada.value, nNoches.value, nPersonas.value, getChecked(servicio), getChecked(edad));
                reserva.mostrar();
            }catch(error){
                setError(fechaLlegada, errorFechaLlegada, error.message);
            }
        }
    }
    ///^[A-Za-záéíóúÁÉÍÓÚÑñ]{2,}/

    let patrones = {
        nombre: /^[A-Za-záéíóúÁÉÍÓÚÑñ]{2,}/,
        correo: /\w+([\._-]?\w+)*@\w+([\._-]?\w+)*\.\w{2,3}$/,
        fecha: /^(.*)[\/\-](.*)[\/\-](.*)$/,
        hora: /^([0][0-9]|[1][0-9]|[2][0-4]):([0][0-9]|[1-5][0-9])$/
    }

    let mensajes = {
        nombre: "Introduzca un nombre válido",
        correo: "Introduzca un correo válido",
        fecha: "Introduzca una fecha válida",
        hora: "Introduzca una hora válida",
        numero: "Introduzca un número válido"
    }

    function setError(elemento, elementoError, mensaje) {
        elementoError.innerHTML = mensaje;
        elementoError.style = "color: rgb(226, 58, 58);; font-weight: bold";
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

    function validarFecha() {
        //let date = fechaLlegada.value;
        //let arrayFecha = date.split("/");
        let arrayFecha = patrones.fecha.exec(fechaLlegada.value);
        if(arrayFecha === null){
            setError(fechaLlegada, errorFechaLlegada, mensajes.fecha);
            return;
        }
        [, dia, mes, anio] = arrayFecha;
        //console.log(dia);
        //console.log(mes);
        //console.log(anio);
        //dia = parseInt(dia);
        mes = parseInt(mes) - 1;
        //anio = parseInt(anio);
        //console.log(dia);
        //console.log(mes);
        //console.log(anio);
    
        let fechaComprobar = new Date(anio, mes, dia);
        //console.log(fechaComprobar.getDate());
        //console.log(fechaComprobar.getMonth());
        //console.log(fechaComprobar.getFullYear());
    
        if (dia != fechaComprobar.getDate() || mes != fechaComprobar.getMonth() || anio != fechaComprobar.getFullYear()) {
            setError(fechaLlegada, errorFechaLlegada, mensajes.fecha);
            validaciones.push(fechaLlegada);
        } else {
            quitarError(fechaLlegada, errorFechaLlegada);
        }
    }

    function validarEnteros(element, error, message){
        if(isNaN(element.value) || element.value === ""){
            setError(element, error, message);
            validaciones.push(element);
        } else {
            quitarError(element, error, message);
        }    
    }

    //function validarPersonas(){
      //  if(isNaN(nPersonas.value) || nPersonas.value===""){
        //    setError(nPersonas, errorNPersonas, mensajes.numero);
          //  validaciones.push(nPersonas);
        //} else {
          //  quitarError(nPersonas, errorNPersonas);
        //}
    //}

    function getChecked(element){
        let checks = [];
        element.forEach(function(e){
            if(e.checked)
                checks.push(e.value);
        })
        //for(let i = 0; i < element.length; i++)
          //  if(element[i].checked)
        return checks;
    }

    //function getServicio(){
      //  for(let i = 0; i < servicio.length; i++)
        //    if(servicio[i].checked)
          //      return servicio[i].value;
    //}

    function init(){
        let form = document.getElementsByTagName("form")[0];
        form.addEventListener("submit", ev => {
            ev.preventDefault();
            enviar();
          });

        nombre = document.getElementById("nombre");
        errorNombre = document.getElementById("errorNombre");

        correo = document.getElementById("correo");
        errorCorreo = document.getElementById("errorCorreo");
        
        fechaLlegada = document.getElementById("fechaLlegada");
        errorFechaLlegada = document.getElementById("errorFechaLlegada");
        
        horaLlegada = document.getElementById("horaLlegada");
        errorHoraLlegada = document.getElementById("errorHoraLlegada");
        
        nNoches = document.getElementById("nNoches");
        errorNNoches = document.getElementById("errorNNoches");
        
        nPersonas = document.getElementById("nPersonas");
        errorNPersonas = document.getElementById("errorNPersonas");
        
        servicio = Array.from(document.getElementsByClassName("restaurante"));
        
        edad = Array.from(document.getElementsByClassName("edad"));

        nombre.addEventListener("blur", function () {
            validar(nombre, errorNombre, patrones.nombre, mensajes.nombre);
        });

        correo.addEventListener("blur", function () {
            validar(correo, errorCorreo, patrones.correo, mensajes.correo);
        });

        fechaLlegada.addEventListener("blur", validarFecha);

        horaLlegada.addEventListener("blur", function () {
            validar(horaLlegada, errorHoraLlegada, patrones.hora, mensajes.hora);
        });

        nNoches.addEventListener("blur", function(){validarEnteros(nNoches, errorNNoches, mensajes.numero)});

        nPersonas.addEventListener("blur", function(){validarEnteros(nPersonas, errorNPersonas, mensajes.numero)});
    }

    //function initFecha(){
      //  newDate = document.getElementById("fecha");
      //  newDate.value = new Date().toISOString().split("T")[0];
    //}
}
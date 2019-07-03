function Reserva(nombre, correo, fecha, hora, noches, personas, servicio, edad){
    this.nombre = nombre;
    this.correo = correo;
    this.fecha = this.setFecha(fecha);
    this.hora = hora;
    this.noches = noches;
    this.personas = personas;
    this.setServicio(servicio);
    this.edad = edad;
    this.id = this.uniqueID();
    this.diasRestantes = this.diasRestantes(fecha);
}

Reserva.prototype.setServicio = function(servicio) {
    //let regex = /^(.*)[\/\-](.*)[\/\-](.*)$/,
    //fechaComprobacion = regex.exec(fecha),
    //[, anio, mes, dia] = fechaComprobacion;
    //console.log(servicio);
    if(servicio.length === 0)
        this.servicio = "Ningún servicio adicional";
}

Reserva.prototype.setFecha = function(fecha) {
    //let regex = /^(.*)[\/\-](.*)[\/\-](.*)$/,
    //fechaComprobacion = regex.exec(fecha),
    //[, anio, mes, dia] = fechaComprobacion;
    if(!fecha instanceof Date)
        throw new Error("Introduzca un formato de fecha válido");
    return fecha.getDate() + '/' + (fecha.getMonth() + 1) + '/' + fecha.getFullYear();
}

Reserva.prototype.uniqueID = (function() {
    let id = 0; 
    return function() { return id++; };  
 })();

Reserva.prototype.diasRestantes = function(fecha){
    //let fechaComprobacion = fecha.split('/');
    //console.log(fechaComprobacion);
    //console.log(Date.now());
    //console.log(new Date(Date.now()));
    //console.log(Date.now() > fecha);
    //console.log(new Date(Date.now())>fecha);
    if(Date.now() > new Date(fecha))
        throw new Error("Fecha pasada");

    //console.log(Date.parse(new Date(fecha)));
    //console.log(Date.now());
    return Math.floor((Date.parse(new Date(fecha)) - Date.now())/(1000 * 60 * 60 * 24));
}

Reserva.prototype.mostrar = function(){
    let ventana = window.open('','', 'height=300px;width=200px');
    ventana.document.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Angelo Barbara</title>
    </head>
    <body>
        <header><h1>Angelo Barbara</h1></header>
        <main>
            <p>Reserva nº: ${this.id}</p>
            <p>Nombre: ${this.nombre}</p>
            <p>Correo: ${this.correo}</p>
            <p>Fecha de llegada: ${this.fecha}</p> 
            <p>Hora de llegada: ${this.hora}</p>
            <p>Número de noches: ${this.noches}</p>
            <p>Número de personas: ${this.personas}</p>
            <p>Servicio de restaurante: ${this.servicio}</p>
            <p>Edad del cliente: ${this.edad}</p>
            <p>Días que faltan: ${this.diasRestantes}</p>
        </main>
    </body>
    </html>`);
    ventana.document.close();
}
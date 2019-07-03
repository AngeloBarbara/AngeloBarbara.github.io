{
    function LindoGatito(nombre, fecha, raza, peso){
        this.nombre = this.validarNombre(nombre);
        this.fecha = this.validarFecha(fecha);
        this.raza = raza;
        this.peso = this.validarPeso(peso);
        this.edad = this.calcularEdad();
        this.estado = '';
    }
    
    LindoGatito.prototype.MAX_PESO = 15;
    LindoGatito.prototype.MIN_PESO = 1;
    
    LindoGatito.prototype.validarNombre = function(nombre){
        let regEx = /^[a-zñáéíúó]+\s?[a-zñáéíúó]*$/gi;
        if(!regEx.test(nombre))
            throw new Error("Introduzca un nombre válido para el lindo gatito");
        return nombre;
    }
    
    LindoGatito.prototype.validarPeso = function(peso){
        if(peso < this.MIN_PESO || peso > this.MAX_PESO || isNaN(peso))
            throw new Error("Introduzca un peso entre 1 y 14");
        return parseInt(peso);
    }
    
    LindoGatito.prototype.validarFecha = function(fecha){
        if(isNaN(Date.parse(fecha)))
            throw new Error("Introduzca una fecha con formato correcto");
        return fecha;
    }

    LindoGatito.prototype.calcularEdad = function(){
        let fechaNacimiento = new Date(this.fecha);
        let newDate = new Date();
        if(fechaNacimiento.getFullYear() == newDate.getFullYear()){
            let meses = newDate.getMonth() - fechaNacimiento.getMonth();
            let dias = newDate.getDay() - fechaNacimiento.getDay();
            return meses + " meses y " + dias + " días";
        }
        return newDate.getFullYear() - fechaNacimiento.getFullYear() + " años";
    }

    LindoGatito.prototype.getEdad = function(){
        return this.edad;
    }
    
    LindoGatito.prototype.getNombre = function(){
        return this.nombre;
    }
    
    LindoGatito.prototype.getfecha = function(){
        return this.fecha;
    }
    
    LindoGatito.prototype.getRaza = function(){
        return this.raza;
    }
    
    LindoGatito.prototype.getPeso = function(){
        return this.peso;
    }
    
    LindoGatito.prototype.setEstado = function(estado){
        this.estado = estado;
    }
    
    LindoGatito.prototype.getEstado = function(){
        return this.estado;
    } 
    
    LindoGatito.prototype.jugar = function(){
        this.peso -= 1;
        this.estado = 'Jugando';
    }

    LindoGatito.prototype.comer = function(){
        this.peso += 1;
        this.estado = 'Comiendo';
    }

    LindoGatito.prototype.dormir = function(){
        this.estado = 'Durmiendo';
    }

    LindoGatito.prototype.isAlive = function(){
        return this.peso >= 1 && this.peso <= 15;
    }
}
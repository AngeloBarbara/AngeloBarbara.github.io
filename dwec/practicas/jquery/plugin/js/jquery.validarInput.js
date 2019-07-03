jQuery.fn.validarInut = function (opciones) {
    let _this = $(this);
    let patron = opciones.patron;
    let mensaje = opciones.mensaje;
    let contenedor = opciones.contenedor;
    let type = opciones.type;

    let fechaReal = function(date,datos){
        return (datos.anio == date.getFullYear() && datos.mes == date.getMonth() && datos.dia == date.getDate());
    };

    _this.on('blur', function () {
        if (_this.val() == "") {
            contenedor.text("Campo vacío.");
        } else {
            switch (type) {
                case 'date':
                    if (!patron.test(_this.val())) {
                        contenedor.text(mensaje);
                    }else {
                        let dateSplit = _this.val().split('-');
                        let dia = parseInt(dateSplit[0]);
                        let mes = parseInt(dateSplit[1]-1);
                        let anio = parseInt(dateSplit[2]);
                        let date = new Date(anio,mes,dia);
                        if(date == 'Invalid Date' || !fechaReal(date,{dia,mes,anio}))
                            contenedor.text("Introduzca un formato correcto");
                        else
                            contenedor.empty();
                    }
                    break;
                case 'text':
                    if (!patron.test(_this.val()))
                        contenedor.text(mensaje);
                    else 
                        contenedor.empty();
                    break;
            }

        }

        _this.on('click',function(){
            contenedor.empty();
        });

    });


    return _this;
};
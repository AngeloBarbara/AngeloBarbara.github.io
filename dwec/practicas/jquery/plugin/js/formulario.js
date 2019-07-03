{
    let init = function(){
        $('#inputNombre').validarInut({
            patron:/^(?:[a-zaéíóúñü]{3,}\s*)+$/i,
            mensaje:'El formato del nombre no es correcto.',
            contenedor:$('#errorNombre'),
            type:'text'
        });

        $('#inputApellidos').validarInut({
            patron:/^(?:[a-zaéíóúñü]{3,}\s*)+$/i,
            mensaje:'El formato de los apellidos no es correcto.',
            contenedor:$('#errorApellidos'),
            type:'text'
        });

        $('#inputFecha').validarInut({
            patron:/^\d{2}\-\d{2}\-\d{4}$/i,
            mensaje:'Formato de fecha incorrecto.',
            contenedor:$('#errorFecha'),
            type:'date'
        });

        $('#inputCorreo').validarInut({
            patron:/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            mensaje:'Formato de correo incorrecto.',
            contenedor:$('#errorCorreo'),
            type:'text'
        });

        $('#btnEnviar').on('click',function(){
            $('#inputNombre').trigger('blur');
            $('#inputApellidos').trigger('blur');
            $('#inputFecha').trigger('blur');
            $('#inputCorreo').trigger('blur');
            if($('.errorForm:not(:empty)').length === 0)
                console.log('bien');
            else{
                $('#input' + $('.errorForm:not(:empty)').attr('id').substring(5)).focus();
                //console.log($('.errorForm:not(:empty)').attr('id').substring(5));
            }
        });
    };
    
    $(init);
}
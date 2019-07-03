(function ($) {

    const patrones = {
        nombre: [/^[a-zA-Zñúíóáé]{3,}([ ][a-zA-Zñúíóáé]{3,}){0,20}$/, "Mínimo 3 caracteres para el nombre."],
        apellido: [/^[a-zA-Zñúíóáé]{3,}([ ][a-zA-Zñúíóáé]{3,}){0,20}$/, "Mínimo 3 caracteres para el apellido."],
        email: [/^[a-zA-Zñ]{1,10}([.][a-zA-Zñ]{1,10}){0,3}[@][a-z]{1,6}([\.][a-z]{1,4}){1,4}$/, "Correo inválido. Ejemplo:examen@exm.c"],
    }

    let tester = {
        validar (patron, texto) {
          return patrones[patron][0].test(texto);
        }
      }
   
    jQuery.fn.examen = function (opciones) {
        let $errores = [];

        let defaultOptions = $.extend({
            css: {
                "color": "#ff0000",
                "background": "#ffDEDE",
                "border": "1px solid #ffD3D7"
            },
            expresiones: patrones,

        }, opciones);

        let $inputs = $("input:not([type='submit']), select, option", $(this));

        let cssInitial = {
            "color": 'initial',
            "background": 'initial',
            "border": $inputs.css("border")
        }


        $(this).submit(function (event) {
            event.preventDefault();
            $errores = [];
            $inputs.blur();
            
            if($errores.length === 0){
                $.get({
                    url: "autor.txt", 
                    success: function(result){
                        $("textarea").text(result);
                  }});
                  return;
            }
            
            $errores[0].focus();
            $("textarea").text("");
            
        });

        $inputs.on("blur", function () {
            if(!tester.validar($(this).attr("tipo"),$(this).val())){
                 $(this).css(defaultOptions.css);
                 $errores.push($(this));
                 return;
            } 

            $(this).css(cssInitial);
            
        });
        return this;
    };

})(jQuery)
{
   // var index = 0;

    var listaimg = ["imagenes/fondo1.jpg", "imagenes/fondo2.jpg", "imagenes/fondo.jpg"];

   

    (function(){
        var i = 0;
            var cambiar = setInterval( function(){
                //$('#cambiante').css( 'background-image', 'url("2.jpg")' );
                $('body').animate({
                    opacity: 0
                }, 'slow', function(){
                    $(this).css( {'background-image': 'url("' + listaimg[i] + '")'} )
                    .animate({opacity: 1});
                    i++;
                    if ( i == 3 ) { i = 0  };
                });
            }, 2000);
        
    })();
}
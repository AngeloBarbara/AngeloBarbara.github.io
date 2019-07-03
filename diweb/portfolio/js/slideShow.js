$(init);

function init(){
	$('#barra-java').animate({
        width: '50%',
    }, 2000);
    $('#barra-php').animate({
        width: '50%',
    }, 2000);
    $('#barra-html').animate({
        width: '70%',
    }, 2000);
    $('#barra-css').animate({
        width: '70%',
    }, 2000);
    $('#barra-js').animate({
        width: '60%',
    }, 2000);
    $('#barra-python').animate({
        width: '50%',
	}, 2000);
	
	slideShow({
        slides: ["#p1", "#proyectos", '#pag3'],
        intervalo: 5000
    })
}

let slideShow = function(opciones){

	opciones = $.extend({
		divDestino : "#container",
		intervalo : 1500,
		alto : window.innerHeight,
		velocidad : 1.2,
		colorBotonActual : '#58167d',
		slides  : []
	}, opciones);

	let actual = 0;
	let alto  = opciones.alto;

	let slides = opciones.slides.length;

	let $slideshow = $(opciones.divDestino);


	contenido = '<div class="slideShowButtons">';

	for(let i = 0; i < opciones.slides.length; i++)
		contenido += `<div data-idx="${i}" class="slideButton"></div>`

	contenido += "</div>"

	$(opciones.divDestino).append(contenido);


	let $puntos = $('.slideShowButtons');

	$puntos.find('div').eq(0).css({
		backgroundColor : opciones.colorBotonActual 
	});

	let intervalo = setInterval(function(){

		mover("sig");

	}, opciones.intervalo );


	function mover( dir, click ){

		( dir === "sig" ) ? actual-- : actual++;

		if( actual > 0 ){

			actual = ( slides - 1 ) * -1;

		}else if( actual <= ( slides * -1 ) ){
			actual = 0;
		}


		moverPorPunto(actual, click);

	}

	function moverPorPunto(actual, click){
		if( click )
			clearInterval( intervalo );

		if(actual != '0'){
			$('#barra-java').animate({
				width: '0',
			}, 2000);
			$('#barra-php').animate({
				width: '0',
			}, 2000);
			$('#barra-html').animate({
				width: '0',
			}, 2000);
			$('#barra-css').animate({
				width: '0',
			}, 2000);
			$('#barra-js').animate({
				width: '0',
			}, 2000);
			$('#barra-python').animate({
				width: '0',
			}, 2000);
		}

		else{
			$('#barra-java').animate({
				width: '50%',
			}, 2000);
			$('#barra-php').animate({
				width: '50%',
			}, 2000);
			$('#barra-html').animate({
				width: '70%',
			}, 2000);
			$('#barra-css').animate({
				width: '70%',
			}, 2000);
			$('#barra-js').animate({
				width: '60%',
			}, 2000);
			$('#barra-python').animate({
				width: '50%',
			}, 2000);
		}

		if(actual == '-1')
			$('#proyectos').fadeIn(2000);
		else
			$('#proyectos').fadeOut(200);

		let margen = actual * alto;
		let $puntoActual = $puntos.find('div').eq(actual * -1);
		let $demasPuntos = $puntos.find('div').not($puntoActual);

		let tl = new TimelineMax();
		tl.to( $slideshow, opciones.velocidad, { marginTop: margen } )
		.to($puntoActual, 0.5, { backgroundColor : opciones.colorBotonActual }, `-=${opciones.velocidad}` )
		.to($demasPuntos, 0.5, { backgroundColor : '#a1a1a1' }, `-=${opciones.velocidad}` );

	}

	$(".slideButton").on('click',function(){
		let idx = $(this).data('idx') * -1;
		moverPorPunto(idx, true);
	});


	$(".botSlide").on("click",function(){

		let dir = $(this).data("mov");
		mover( dir, true );

	});

	$('.login').on('click',function(){
		clearInterval( intervalo );
	});
}
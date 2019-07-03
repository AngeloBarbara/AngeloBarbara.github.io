{
    document.addEventListener("DOMContentLoaded", init);
    let jugar, dormir, comer, gato, peso, imagen, campoEstado;

    function funcionalidad(estado){
        if(gato.isAlive()){
            switch(estado){
                case 'jugar':
                    gato.jugar();
                    break;
                case 'dormir':
                    gato.dormir();
                    break;
                default:
                    gato.comer();
                    break;
            }
            actualizarDatos(estado);
        }
    }

    function actualizarDatos(estado){
        peso.value = gato.getPeso();

        if(!gato.isAlive())
            return desabhilitarFormulario();

        campoEstado.innerHTML = gato.getNombre() + ' está ' + gato.getEstado();
        //console.log(gato.getEstado());
        switch(estado){
            case 'jugar':
                    imagen.src = 'img/play.jpg';
                    break;
                case 'dormir':
                    imagen.src = 'img/sleep.jpg';
                    break;
                default:
                    imagen.src = 'img/eat.jpg';
                    break;
        }
    }

    function desabhilitarFormulario(){
        imagen.src = 'img/sick.jpeg';
        jugar.style.disabled = true;
        comer.style.disabled = true;
        dormir.style.disabled = true;
        campoEstado.innerHTML = gato.getNombre() + ' se ha muerto' ;
    }

    function init(){
        jugar = document.getElementById("jugar");
        jugar.addEventListener("click", ()=>funcionalidad('jugar'));
        dormir = document.getElementById("dormir");
        dormir.addEventListener("click", ()=>funcionalidad('dormir'));
        comer = document.getElementById("comer");
        comer.addEventListener("click", ()=>funcionalidad('comer'));
        peso = document.getElementById("peso");
        gato = document.gatito;
        imagen = document.getElementById('imagen');
        campoEstado = document.getElementById('estado');
    }
}
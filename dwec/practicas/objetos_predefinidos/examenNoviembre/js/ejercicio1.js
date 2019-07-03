/**
 * @author Angelo Barbara
 */
{
    document.addEventListener("DOMContentLoaded", init);
    let mensaje;

    function init() {
        mensaje = document.getElementById("mensaje");
        document.getElementById("reset").addEventListener("click", resetContador);
        document.getElementById("atras").addEventListener("click", ev => {
            ev.preventDefault;
            history.back();
        });
  
        initContador();
    }
  
    function generaMensaje(contador) {
        switch(contador){
            case 1:
                mensaje.textContent = `Bienvenido a mi humilde morada. Esta es la primera vez que entras. Espero que vuelvas`;
                break;
            case 2:
                mensaje.textContent = `Hola de nuevo. Ya estas aquí por segunda vez. ¿Volveremos a vernos?. `;
                break;
            default:
                mensaje.innerHTML = `Ya empiezas a ser pesado. Esta es la vez número ${parseInt(contador)} que entras. Sigue con tus cosas.`;
                break;

        }
    }
  
    function initContador() {
        if (localStorage.getItem("contador") == null)
            localStorage.setItem("contador", 1);
        else 
            localStorage.setItem("contador", parseInt(localStorage.getItem("contador")) + 1);
        
        generaMensaje(parseInt(localStorage.getItem("contador")));
    }
  
    function resetContador() {
        localStorage.setItem("contador", 0);
        mensaje.innerHTML = `RESETEADO`;
    }
}
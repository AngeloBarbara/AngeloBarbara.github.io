{
    document.addEventListener("DOMContentLoaded", init);
    let form;
    let enviar;

    function mostrarForm() {
        if (form.style.display == "block") {
            form.style.display = "none";
        } else {
            form.style.display = "block";
        }
    }

    function crearTarea(){
        let titulo = document.getElementById("titulo").value;
        let fecha = document.getElementById("fecha").value.split("-");
        //fecha = fecha.split("/");
        //console.log(fecha);
        let dia = fecha[2];
        let mes = fecha[1];
        let anio = fecha[0];
        let asignatura = document.getElementById("asignaturaAdd").value;
        let tarea = document.getElementById("tarea").value;
        let article = document.createElement("article");
        article.className = asignatura;
        article.innerHTML = `<a href="#"><img id="modificar" src="images/modificar.png" alt=""></a>
        <a href="#"><img id="eliminar" src="images/eliminar.png" alt=""></a>
        <header>
            <h2>${titulo}</h2>
            <h5>Fecha de entrega: ${dia}/${mes}/${anio}</h5>
        </header>
        <p>${tarea}.</p>`;
        let section = document.getElementById("seccion");
        section.appendChild(article);
    }

    function init(){
        form = document.getElementById("formOculto");
        enviar = document.getElementById("enviar");
        document.getElementById("addTarea").addEventListener("click", mostrarForm);
        enviar.addEventListener("click", crearTarea);
    }
}
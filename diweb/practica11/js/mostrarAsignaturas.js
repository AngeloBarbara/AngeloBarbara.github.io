{
    document.addEventListener("DOMContentLoaded", init);

    let articulos;

    function mostrarDiweb() {
        for (let i = 0; i < articulos.length; i++) {
            if(articulos[i].style.display != "block"){
                articulos[i].style.display = "block";
            }
            if (articulos[i].className !== "diweb") {
                articulos[i].style.display = "none";
            }
        }
    }

    function mostrarDwes() {
        for (let i = 0; i < articulos.length; i++) {
            if(articulos[i].style.display != "block"){
                articulos[i].style.display = "block";
            }
            if (articulos[i].className !== "dwes") {
                articulos[i].style.display = "none";
            }
        }
    }

    function mostrarDwec() {
        for (let i = 0; i < articulos.length; i++) {
            if(articulos[i].style.display != "block"){
                articulos[i].style.display = "block";
            }
            if (articulos[i].className !== "dwec") {
                articulos[i].style.display = "none";
            }
        }
    }

    function mostrarAndroid() {
        for (let i = 0; i < articulos.length; i++) {
            if(articulos[i].style.display != "block"){
                articulos[i].style.display = "block";
            }
            if (articulos[i].className !== "android") {
                articulos[i].style.display = "none";
            }
        }
    }

    function mostrarDaw() {
        for (let i = 0; i < articulos.length; i++) {
            if(articulos[i].style.display != "block"){
                articulos[i].style.display = "block";
            }
            if (articulos[i].className !== "daw") {
                articulos[i].style.display = "none";
            }
        }
    }

    function mostrarEmpresa() {
        for (let i = 0; i < articulos.length; i++) {
            if(articulos[i].style.display != "block"){
                articulos[i].style.display = "block";
            }
            if (articulos[i].className !== "empresa") {
                articulos[i].style.display = "none";
            }
        }
    }

    function mostrarTodo() {
        for (let i = 0; i < articulos.length; i++) {
            articulos[i].style.display = "block";

        }
    }

    function init(){
        articulos = document.getElementsByTagName("article");
        document.getElementById("btnDiweb").addEventListener("click", mostrarDiweb);
        document.getElementById("btnDwes").addEventListener("click", mostrarDwes);
        document.getElementById("btnDwec").addEventListener("click", mostrarDwec);
        document.getElementById("btnAndroid").addEventListener("click", mostrarAndroid);
        document.getElementById("btnDaw").addEventListener("click", mostrarDaw);
        document.getElementById("btnEmpresa").addEventListener("click", mostrarEmpresa);
        document.getElementById("btnMostrarTodo").addEventListener("click", mostrarTodo);
    }
}
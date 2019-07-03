/**
 *Mi URL. Crea una página que te muestre debidamente desglosada la url. (servidor, protocolo, ruta...)
 * 
 * @author Angelo Barbara
 * */

{
    document.addEventListener("DOMContentLoaded", init);
       
    function init() {
        let info = document.getElementById("info");
        info.innerHTML = "URL: "+location.href+ "<br/>";
        info.innerHTML += "Protocolo: "+location.protocol+ "<br/>";
        info.innerHTML += "Host: "+location.host+ "<br/>";
        info.innerHTML += "Hostname: "+location.hostname+ "<br/>";
        info.innerHTML += "Puerto: "+location.port+ "<br/>";
        info.innerHTML += "Pathname: "+location.pathname+ "<br/>";
        info.innerHTML += "Hash: "+location.hash+ "<br/>";
        info.innerHTML += "Origen: "+location.origin+ "<br/>";
    }
}
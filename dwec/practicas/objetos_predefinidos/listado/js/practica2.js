/**
 * El objeto window dispone de las propiedades scrollX, scrollY y scrollbars.
 * Muéstralos reaccionando al evento scroll sobre window.
 * 
 * @author Angelo Barbara
*/

{

    document.addEventListener("DOMContentLoaded", init);

    function init(){


        let scrollX = document.getElementById("scrollX");
        let scrollY = document.getElementById("scrollY");
        let scrollbars = document.getElementById("scrollbars");

        window.addEventListener("scroll", function (){

            scrollX.innerHTML = "<b>ScrollX: </b>" + this.scrollX;
            scrollY.innerHTML = "<b>ScrollY: </b>" + this.scrollY;
            scrollbars.innerHTML = "<b>Scrollbars: </b>" + this.scrollbars.visible;

        });


    }
}
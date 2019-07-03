{
    document.addEventListener("DOMContentLoaded", init);

    function init(){
        let inputs = document.getElementsByClassName("input");
        for(let i = 0; i < inputs.length; i++)
            inputs[i].addEventListener("click", ()=>window.open("buscaminas3.html", "_self"));
    }
}
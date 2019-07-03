{
    document.addEventListener("DOMContentLoaded", init);

    function init(){
        Calendar.setup({
            inputField: "fecha",
            ifFormat: "%d/%m/%Y",
            daFormat: "%A, %d de %B de %Y",
            button: "selector",
            displayArea: "fecha_usuario",
            weekNumbers: false
        })
    }

}
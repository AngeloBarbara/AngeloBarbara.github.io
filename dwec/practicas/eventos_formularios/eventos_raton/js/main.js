{
    let arrayColores;

    function init() {
        arrayColores = ["rgb(56, 58, 199)", "rgb(100, 105, 102)", "rgb(199, 108, 56)", "rgb(163, 112, 16)", "rgb(72, 172, 97)", "rgb(189, 201, 81)", "rgb(219, 125, 219)"];
        let canvas = document.getElementsByTagName("canvas");

        for (let element of canvas) {
            element.addEventListener(element.getAttribute("id"), eventoCanvas);
            element.addEventListener("contextmenu", quitarMenuContextual);
            pintaCanvas(element);
        }
    }

    function eventoCanvas(ev) {
        pintaCanvas(ev.target, generaAleatorio(arrayColores.length - 1), ev.offsetX, ev.offsetY, ev.button, ev.buttons);
    }

    function quitarMenuContextual(ev) {
        ev.preventDefault();
    }

    let pintaCanvas = function (canvas, aleatorio, x, y, button, buttons) {
        if (canvas.getContext) {
            let ctx = canvas.getContext('2d', {
                alpha: false
            });
            if (arguments.length === 1) {
                ctx.fillStyle = "rgb(52, 135, 141)";
            } else {
                ctx.fillStyle = arrayColores[aleatorio];
            }
            ctx.fillRect(0, 0, 400, 400);

            ctx.font = "1.3em Lato";
            ctx.fillStyle = "white";

            ctx.fillText(canvas.getAttribute("id"), 50, 30);

            if (arguments.length > 1) {;
                ctx.fillText("x = " + x, 210, 40);
                ctx.fillText("y = " + y, 210, 70);
                ctx.fillText("button = " + button, 190, 100);
                ctx.fillText("buttons = " + buttons, 190, 130);
            }

        }
    }

    function generaAleatorio(max, min = 1) {
        return Math.round(Math.random() * (max - min)) + min;
    }

    document.addEventListener("DOMContentLoaded", init);

}
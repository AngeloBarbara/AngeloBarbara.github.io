{
    function init() {
        document.getElementById("info").addEventListener("mouseover",showToolTip);
        document.getElementById("info").addEventListener("mouseout",hideToolTip);
    }

    function showToolTip() {
        overlib('Prueba tooltip.',WIDTH,150,FGCOLOR,'#ffffcc',
        DELAY,250,OFFSETX,15,ABOVE);
    }

    function hideToolTip(){
        nd();
    }

    window.addEventListener("load",init);
}
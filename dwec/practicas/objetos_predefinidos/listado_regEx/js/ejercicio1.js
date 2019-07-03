{
    document.addEventListener("DOMContentLoaded", init);
  
    function createRegex() {
      let regex1 = /abc/;
  
      let regex2 = new RegExp("/abc/");
    }

    function init() {
        createRegex();
    }
}
/**
 * @author Angelo Barbara
 */
{
  document.addEventListener("DOMContentLoaded", init);
  let regEx = /^\s*([a-záéíóúñ]+)\s*([a-záéíóúñ]+\s*)*,\s*([a-záéíóúñ]+\s*)+$/i;
  let nombre_apellido;
  //let grupos;
  let nombre;
  let apellidos;
  //let nombre2;
  //let apellidos2;
  let nombres = new Set();

  function comprobarNombre(){
      //grupos = regEx.exec(nombre_apellido.value);
      error.innerHTML = "";
      try {
          //if(grupos == null)
              //throw new Error("Error. Formato correcto: Cuadrado Perfecto, Anacleto");
          let [apellidos, nombre] = getNombreApellidos(nombre_apellido.value.toUpperCase());

          comprobarSet(apellidos, nombre);
        
          if(!error.innerHTML.includes("REPETIDO"))
            modificarMensage(apellidos, nombre);

      } catch (er) {
          nombre.innerHTML = "";
          apellidos.innerHTML = "";
          error.innerHTML = er.message;
      }

  }

  function getNombreApellidos(value) {
    try {
        let [, apellidos, nombre] = regEx.exec(value);
        return [apellidos, nombre];

    } catch (error) {
        throw new Error('Error. Formato correcto: Cuadrado Perfecto, Anacleto');
    }
    
}

  function modificarMensage(apellidos2, nombre2){
      nombre.innerHTML = " " + nombre2;
      apellidos.innerHTML = " " + apellidos2;
      nombre_apellido.value = "";
  }

  function comprobarSet(apellidos, nombre){
      if(nombres.has(nombre + " " + apellidos)){
          error.innerHTML = "REPETIDO";
          return;
      }

      nombres.add(nombre + " " + apellidos);
  }
  
  function init(){
      
      error = document.getElementById("error");
      nombre = document.getElementById("nombre");
      apellidos = document.getElementById("apellidos");
      nombre_apellido = document.getElementById("nombre_apellido");
      nombre_apellido.addEventListener("blur", comprobarNombre);
      document.getElementById("atras").addEventListener("click", ev => {
        ev.preventDefault;
        history.back();
    });
  }
}

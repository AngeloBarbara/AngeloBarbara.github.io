/**
Entrega un código (debidamente comentado) donde demuestres los apartados del ejercicio anterior sobre la collection Map. Para ello utiliza como elementos los nombres y apellidos de cinco compañeros de clase.
@author Angelo Barbara
 */
{
  function init() {
    mapProprerties();
  }

  function mapProprerties() {
    //Constructor:
    let array = [["Angelo", "Barbara"], ["Marcos", "Gallardo"], ["Guillermo", "Boquizo"], ["Mario", "Navarro"]];
    let map = new Map(array);

    //Métodos para añadir:
    map.set("José", "Álvarez");

    //Número de elementos:
    console.log(map.size);

    //Métodos para buscar:
    console.log(map.get("Angelo"));

    //Se recorren mediante:
    map.forEach((element, key) => {
      console.log(element, key);
    });

    //Métodos para eliminar:
    map.delete("Angelo");
    map.clear();

  }

  window.addEventListener("load", init);
}

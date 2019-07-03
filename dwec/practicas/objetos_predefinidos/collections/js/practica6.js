/**
Entrega un código (debidamente comentado) donde demuestres los apartados del ejercicio anterior sobre la collection Set. Para ello utiliza como elementos los nombres y apellidos de cinco compañeros de clase.
@author Angelo Barbara
 */
{
  function init() {
    setProprerties();
  }

  function setProprerties() {
    //Constructor:
    let array = [["Angelo", "Barbara"], ["Marcos", "Gallardo"], ["Guillermo", "Boquizo"], ["Mario", "Navarro"]];
    let set = new Set(array);

    //Métodos para añadir:
    set.add("José", "Álvarez");

    //Número de elementos:
    console.log(set.size);

    //Métodos para buscar:
    console.log(set.get("Angelo"));

    //Se recorren mediante:
    set.forEach((element, key) => {
      console.log(element, key);
    });

    //Métodos para eliminar:
    set.delete("Angelo");
    set.clear();

  }

  window.addEventListener("load", init);
}

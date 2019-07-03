/**
Entrega un código (debidamente comentado) donde demuestres los apartados del ejercicio anterior sobre la collection WeakSet.Para ello utiliza como elementos los nombres y apellidos de cinco compañeros de clase

@author Angelo Barbara
 */
{
  function init() {
    usageWeakSet();
  }

  let usageWeakSet = function() {
    //Constructor admite como parámetros:
    let object1 = { nombre: "Angelo" };
    let object2 = { apellido: "Barbara" };
    let weakSet= new WeakSet([object1, object2]);

    console.log(weakSet);

    //Métodos para añadir:
    let object3 = { nombre: "Marcos" };
    let object4 = { nombre: "Gallardo" };
    weakSet.add(object3);
    weakSet.add(object4);

    console.log("Set add() -> " + weakSet);

    //Métodos para eliminar:
    weakSet.delete(object4);

    console.log("Set delete() -> " + weakSet);

  };

  window.addEventListener("load", init);
}

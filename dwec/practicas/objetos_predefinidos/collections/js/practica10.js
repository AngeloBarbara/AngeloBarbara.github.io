/**
Crea mediante iterables estos dos objetos collections. Indica el número de elementos de cada uno. Justifica el comportamiento: 
@author Angelo Barbara
 */
{
  function init() {
    weakSet();
  }

  function weakSet() {
    let b = new WeakSet([{}, {}]);
    let o = {};
    let a = new WeakSet([o, o]);

    // No puedes saber el tamaño de un WeakSet ya que su contenido son referencias de memoria.
  };

  window.addEventListener("load", init);
}

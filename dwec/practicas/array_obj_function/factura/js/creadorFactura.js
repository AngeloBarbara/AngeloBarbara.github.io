{
    let tabla;
    let arrayLineas = ["nombreProducto", "cantidadProducto", "precioProducto", "ivaProducto"];
    let empresa = empresaTemporal;
    let muestraError;
    let inputNombreCliente;
    let inputDireccionCliente;
    let inputTelefonoCliente;
    let inputNifCliente;
    let divMuestraFactura;
    let buttonLimpiarDatosCliente;

    function init() {

        rellenarDatosEmpresa();
        muestraError = document.getElementById("muestraError");
        divMuestraFactura = document.getElementById("mostrarFactura");
        tabla = document.getElementById("tablaProductos");
        buttonLimpiarDatosCliente = document.getElementById("limpiarDatosCliente");
        inputNombreCliente = document.getElementById("nombreCliente");
        inputDireccionCliente = document.getElementById("direccionCliente");
        inputTelefonoCliente = document.getElementById("telefonoCliente");
        inputNifCliente = document.getElementById("nifCliente");
        buttonLimpiarDatosCliente.addEventListener("click", limpiarDatosCliente);
        document.getElementById("nuevoProducto").addEventListener("click", nuevaLinea);
        document.getElementById("crearFactura").addEventListener("click", crearFactura);
    }

    function rellenarDatosEmpresa() {
        document.getElementById("nombreEmpresa").textContent += empresa.nombre;
        document.getElementById("telefonoEmpresa").textContent += empresa.telefono;
        document.getElementById("direccionEmpresa").textContent += empresa.direccion;
        document.getElementById("nifEmpresa").textContent += empresa.nif;
    }

    function nuevaLinea() {
        let linea = document.createElement("tr");
        let td;
        let element;
        let optionSuperReducido;
        let optionReducido;
        let optionGeneral;


        for (let i = 0; i < arrayLineas.length; i++) {
            td = document.createElement("td");
            
            
            switch(i){
                case 0:
                    element = document.createElement("input");
                    element.type = "text";
                    break;
                case 3:
                    element = document.createElement("select");
                    optionSuperReducido = document.createElement("option");
                    optionSuperReducido.value = "4";
                    optionSuperReducido.innerHTML = "4";
                    element.appendChild(optionSuperReducido);
                    optionReducido = document.createElement("option");
                    optionReducido.value = "12";
                    optionReducido.innerHTML = "12";
                    element.appendChild(optionReducido);
                    optionGeneral = document.createElement("option");
                    optionGeneral.value = "21";
                    optionGeneral.innerHTML = "21";
                    element.appendChild(optionGeneral);
                    break;
                default:
                    element = document.createElement("input");
                    element.type = "number";
            }

            element.id = arrayLineas[i];  
            td.appendChild(element);
            linea.appendChild(td);
        }
        tabla.appendChild(linea);
    }

    function crearFactura() {
        try{
        let factura = new Factura(empresa, crearCliente(), recorrerTablaProductos());
        factura.calcularFactura();
        mostrarFactura(factura);
        }catch(e){
           muestraError.textContent = e.message;
        }

    }

    function mostrarFactura(factura) {
        let ivas = factura.informacion.obtenerIvaParaMostrar();
        let tablaIva = document.createElement("table");
        tablaIva.id = "tablaTotal";
        let fila;
        let td;
        for (let i = 0; i < ivas.length; i++) {
            fila = document.createElement("tr");
            td = document.createElement("td");
            td.appendChild(document.createTextNode(ivas[i][0] + "% IVA"));
            fila.appendChild(td);
            td = document.createElement("td");
            td.appendChild(document.createTextNode(ivas[i][1] + " \u20AC"));
            fila.appendChild(td);
            tablaIva.appendChild(fila);
        }

        fila = document.createElement("tr");
        td = document.createElement("td");
        td.appendChild(document.createTextNode("BASE IMPONIBLE"));
        fila.appendChild(td);
        td = document.createElement("td");
        td.appendChild(document.createTextNode(factura.informacion.baseImponible + "\u20AC"));
        fila.appendChild(td);
        tablaIva.appendChild(fila);

        fila = document.createElement("tr");
        td = document.createElement("td");
        td.appendChild(document.createTextNode("TOTAL"));
        fila.appendChild(td);
        td = document.createElement("td");
        td.appendChild(document.createTextNode(factura.informacion.total + "\u20AC"));
        fila.appendChild(td);
        tablaIva.appendChild(fila);
        //console.log(tablaIva);

        tablaTotal = document.getElementById("tablaTotal");
        if (tablaTotal)
            divMuestraFactura.removeChild(tablaTotal);
        divMuestraFactura.appendChild(tablaIva);
    }

    function recorrerTablaProductos() {
        let productos = [];
        for (let i = 1; i < tabla.rows.length; i++) {
            productos.push(new Producto(
                tabla.rows[i].cells[0].childNodes[0].value,
                tabla.rows[i].cells[1].childNodes[0].value,
                tabla.rows[i].cells[2].childNodes[0].value,
                tabla.rows[i].cells[3].childNodes[0].value,
            ));
        }
        return productos;
    }

    function limpiarDatosCliente() {
        inputNombreCliente.value = "";
        inputDireccionCliente.value = "";
        inputTelefonoCliente.value = "";
        inputNifCliente.value = "";
    }

    function crearCliente() {
        let nombreCliente = document.getElementById("nombreCliente").value;
        let direccionCliente = document.getElementById("direccionCliente").value;
        let telefonoCliente = document.getElementById("telefonoCliente").value;
        let nifCliente = document.getElementById("nifCliente").value;
        return new Cliente(nombreCliente, direccionCliente, telefonoCliente, nifCliente);
    }


    window.addEventListener("load", init);
}
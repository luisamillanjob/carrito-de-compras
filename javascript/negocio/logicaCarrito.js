let listaProductos = JSON.parse(localStorage.getItem("prodSelect")) ?? [];

function agregarProds() {
    
    botonRegresar()

    if(listaProductos.length > 0){
        botonPago()
    }

    const contenedorProducts = document.getElementById("compras");

    for (const producto of listaProductos) {
        contenedorProducts.innerHTML +=
            `<div class="card">
                <img class="card-img-top" src="${producto.foto}" alt="${producto.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">Precio: $ ${producto.precio} USD</p>
                        <p class="card-text"> Cantidad: 1 ${producto.medida}</p>
                        <button class="btn btn-primary eliminar" id="${producto.id}">Eliminar producto</button>
                    </div>
            </div>`
    }

    const botonesEliminar = document.getElementsByClassName("eliminar");
    for (const boton of botonesEliminar) {
        boton.addEventListener('click', () => {
            const productoEliminar = listaProductos.find(producto => producto.id == boton.id)
            const posicionProducto = listaProductos.indexOf(productoEliminar)
            listaProductos.splice(posicionProducto, 1)
            localStorage.setItem("prodSelect", JSON.stringify(listaProductos))
            mostrarMensajeCarrito(`Producto ${productoEliminar.nombre} eliminado del carrito`)
            setTimeout(() => {
                window.location.reload()
              }, "700");
        })
    }
}

agregarProds();

function botonRegresar() {
    const contendorOpciones = document.getElementById("opciones");
    contendorOpciones.innerHTML +=
        `<a href="index.html" class="returnInicio">Regresar al almacen</a>`
}

function botonPago() {
    const contendorOpciones = document.getElementById("opciones");
    contendorOpciones.innerHTML +=
        `<a href="../pago.html" class="pago">Ir a pagar</a>`
}

function mostrarMensajeCarrito(mensaje) {
    Toastify({
        text: mensaje,
        duration: 3000,
        gravity: "bottom",
        style: {
            background: "linear-gradient(to right, #ff6347, #ff0000)"
          }
    }).showToast();
}
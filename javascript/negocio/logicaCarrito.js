import listaProductos from "../data/productosCarrito.js";

function agregarProds() {

    const contenedorProducts = document.getElementById("compras");

    for (const producto of listaProductos) {
        contenedorProducts.innerHTML +=
            `<div class="card">
            <img class="card-img-top" src="${producto.foto}" alt="${producto.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">Precio: $ ${producto.precio} USD</p>
                    <p class="card-text"> Cantidad: ${producto.cantidad} ${producto.medida}</p>
                    <button class="btn btn-primary">Eliminar producto</button>
                </div>
        </div>`
    }
}
agregarProds();

function opcion(){
    const contendorOpciones=document.getElementById("opciones");
    contendorOpciones.innerHTML +=
    `<a href="index.html" class="returnInicio">Regresar al almacen</a>
    <a href="../pago.html" class="pago">Ir a pagar</a>`

}
opcion();
import listaProductos from "../data/productos.js";

const contenedorProducts = document.getElementById("product");

function agregarProds() {
    for (const producto of listaProductos) {
        contenedorProducts.innerHTML +=
            `<div class="card">
            <img class="card-img-top" src="${producto.foto}" alt="${producto.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">Precio: ${producto.precio} x ${producto.cantidad}</p>
                    <button class="btn btn-primary">Agregar al carrito</button>
                </div>
        </div>`

    }
}
agregarProds();

function busquedaProds() {
    const contenedorBusqueda = document.getElementById("menu")
    contenedorBusqueda.innerHTML +=
        `<form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>`
        contenedorBusqueda.innerHTML +=
        `<a href="carrito.html" class="irCarrito">ir a carrito de compras</a>`
}
busquedaProds()

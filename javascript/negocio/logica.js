import listaProductos from "../data/productos.js";
const carrito = [];
const contenedorProducts = document.getElementById("product");

function agregarProds() {
    for (const producto of listaProductos) {
        contenedorProducts.innerHTML +=
            `<div class="card">
            <img class="card-img-top" src="${producto.foto}" alt="${producto.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">Precio: $ ${producto.precio} USD</p>
                    <p class="card-text">medida: ${producto.medida}</p>
                    <button class="btn btn-primary agregar"  id="${producto.id}"> Agregar al carrito </button>
                </div>
        </div>`
    }
    const botonesCompra = document.getElementsByClassName("agregar");
    for (const boton of botonesCompra) {

        boton.addEventListener('click', () => {
            const productAdd = listaProductos.find(itemDeLista => itemDeLista.id == boton.id)
            agregarACarrito(productAdd);
        })
    }
}
agregarProds();

function agregarACarrito(prod) {
    carrito.push(prod);
    localStorage.setItem("prodSelect",JSON.stringify(carrito))
    console.table(carrito);

}

function busquedaProds() {
    const contenedorBusqueda = document.getElementById("menu")
    contenedorBusqueda.innerHTML +=
        `<form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>`
    contenedorBusqueda.innerHTML +=
        `<a href="carrito.html" class="irCarrito">Ir a carrito de compras</a>`
}
busquedaProds()

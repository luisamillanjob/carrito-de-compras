let listaProductos=JSON.parse(localStorage.getItem("prodSelect")) ;
function agregarProds() {

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
            const productoEliminar= listaProductos.find(producto=>producto.id == boton.id)
            const posicionProducto= listaProductos.indexOf(productoEliminar)
            listaProductos.splice(posicionProducto,1)
            localStorage.setItem("prodSelect",JSON.stringify(listaProductos))
            window.location.reload()
        })
    }
}

agregarProds();

function botones(){
    const contendorOpciones=document.getElementById("opciones");
    contendorOpciones.innerHTML +=
    `<a href="index.html" class="returnInicio">Regresar al almacen</a>
    <a href="../pago.html" class="pago">Ir a pagar</a>`

}

botones();
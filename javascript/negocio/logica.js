let listaProductos = [];
cargarProductosIniciales()

let productos = JSON.parse(localStorage.getItem("productosFiltrados")) ?? listaProductos;
const carrito = JSON.parse(localStorage.getItem("prodSelect")) ?? [];
const contenedorProducts = document.getElementById("product");

function agregarProds() {
    for (const producto of productos) {
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
            const productAdd = productos.find(itemDeLista => itemDeLista.id == boton.id)
            agregarACarrito(productAdd);
            mostrarMensaje(`El ${productAdd.nombre} fue agregado con exito`)
        })

    }
}
agregarProds();

function agregarACarrito(prod) {
    carrito.push(prod);
    localStorage.setItem("prodSelect", JSON.stringify(carrito))
    console.table(carrito);

}

function busquedaProds() {
    const contenedorBusqueda = document.getElementById("menu")
    contenedorBusqueda.innerHTML +=
        `<form class="form-inline my-2 my-lg-0">
            <input placeholder="Producto" class="form-control mr-sm-2" type="search" aria-label="Search" id="campoBusqueda">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit" id="botonBusqueda">Buscar</button>
            <button class="btn btn-outline-success my-2 my-sm-0" id="botonLimpiar">Limpiar</button>
        </form>`
    contenedorBusqueda.innerHTML +=
        `<a href="carrito.html" class="irCarrito">Ir a carrito de compras</a>`

    const botonBusqueda = document.getElementById("botonBusqueda")
    botonBusqueda.addEventListener('click', () => {
        filtrarProductos()
    })

    const botonLimpiar = document.getElementById("botonLimpiar")
    botonLimpiar.addEventListener('click', () => {
        limpiarFiltro()
    })

}
busquedaProds()

function filtrarProductos() {
    event.preventDefault()
    const campoBusqueda = document.getElementById("campoBusqueda")
    const filtro = campoBusqueda.value
    if (filtro != "") {
        productos = productos.filter(producto => producto.nombre.toLowerCase().includes(filtro.toLowerCase()))
        localStorage.setItem("productosFiltrados", JSON.stringify(productos))
        window.location.reload()
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Por favor indique el producto que desea filtrar",
        });
    }
}

function limpiarFiltro() {
    productos = listaProductos
    localStorage.setItem("productosFiltrados", JSON.stringify(productos))
    window.location.reload()
}

function mostrarMensaje(mensaje) {
    Toastify({
        text: mensaje,
        duration: 3000,
        gravity: "bottom",
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          }
    }).showToast();
}

async function cargarProductosIniciales() {
    const productosLocalStorage = JSON.parse(localStorage.getItem("listaProductos"))
    if(!productosLocalStorage){
        const response = await fetch("https://663d5e8de1913c4767940cdd.mockapi.io/api/productos");
        const productosObjeto = await response.json();
        localStorage.setItem("listaProductos", JSON.stringify(productosObjeto))
        listaProductos = productosObjeto
        window.location.reload()
    }else{
        listaProductos = productosLocalStorage
    }
  }
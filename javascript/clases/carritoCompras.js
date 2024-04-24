export class CarritoDeCompras{

    constructor(id, listaProductos, total){
        this.id = id;
        this.listaProductos = listaProductos;
        this.total = total;
    }

    agregarProducto(producto){
        this.total += producto.precio;
        this.listaProductos.push(producto);
    }
}
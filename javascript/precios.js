import listaProductos from "./productos.js";
import { CarritoDeCompras } from "./carritoCompras.js";

const carritoDeCompras = new CarritoDeCompras("1", [], 0);

let productoId = parseInt(prompt("ingresar id del producto que desea agregar"));

//uso de filter, map, join
function filtrarPorCategoria() {

    let categoriaID = parseInt(prompt('seleccione la categoria que desea filtrar \n1-Aceites\n2-Carbohidratos\n3-Frutas\n4-Lacteos\n5-Proteina\n6-Vegetales'));
    if (categoriaID <= 6 && categoriaID > 0) {
        const productosPorCategoria = listaProductos.filter(p => p.categoria.id === categoriaID)
        const nombreProductosFiltrados = productosPorCategoria.map(p => p.nombre);
        const nombreProductosFiltradosString = nombreProductosFiltrados.join(" - ")

        alert(nombreProductosFiltradosString)
    }
    else {
        alert('el Id ingresado no corresponde a ninguna categoria')
    }
}
//uso de find
function agregarProducto() {

    while (productoId != 0) {

        if (productoId == 99) {
            filtrarPorCategoria()
        } else {
            const producto = listaProductos.find(p => p.id === productoId);

            //Si encuentra el producto, agreguelo al carrito
            if (producto !== null && producto !== undefined) {
                carritoDeCompras.agregarProducto(producto)
                alert(`agregaste ${producto.nombre} a tu carrito de compras`)
            } else {
                alert(`Id de producto invalido`)
            }
        }

        productoId = parseInt(prompt("ingresar id del producto que desea agregar"));
    }

    const total = carritoDeCompras.total.toFixed(2)
    alert('el total de su compra es, ' + total + ' USD')
}

function modoDePago() {
    let total = carritoDeCompras.total.toFixed(2);

    if (total === "0.00") {
        alert("el carrito esta vacio")
        return
    }

    let tarjeta = 0;

    while (tarjeta.toString().length !== 16) {

        let metodoDePago = parseInt(prompt('Desea pagar con \n1-Debito\n2-credito+10% de interes\n3-Efectivo'));

        if (metodoDePago === 1) {
            tarjeta = parseInt(prompt("ingresar numero de cuenta"));
            if (tarjeta.toString().length === 16) {
                alert('Pago Realizado, ' + total + ' USD');
            }
            else {
                alert('el numero de tarjeta no es valido, verifique y vuelva a ingresar')
            }
        }
        else if (metodoDePago === 2) {
            tarjeta = parseInt(prompt("ingresar numero de cuenta"));
            if (tarjeta.toString().length === 16) {
                total = parseFloat(total + (total * 0.1));
                total = total.toFixed(2);
                alert('Pago Realizado, ' + total + ' USD');
            }
            else {
                alert('el numero de tarjeta no es valido, verifique y vuelva a ingresar')
            }
        }
        else if (metodoDePago === 3) {
            alert('el total de su compra es, ' + total + ' USD');
            break
        }
        else {
            alert('debe elegir un metodo de pago valido');
        }
    }
}

agregarProducto()

modoDePago()

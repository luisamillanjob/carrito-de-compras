let total = 0

function agregarProducto() {
    let productoId = parseInt(prompt("ingresar id del producto que desea agregar"));

    while (productoId != 0) {
        switch (productoId) {
            case 1:
                alert('agregaste tomate a tu carrito de compras')
                total += 2.00
                break
            case 2:
                alert('agregaste manzana a tu carrito de compras')
                total += 3.50
                break
            case 3:
                alert('agregaste lechuga a tu carrito de compras')
                total += 1.20
                break
            case 4:
                alert('agregaste zanahoria a tu carrito de compras')
                total += 1.80
                break
            case 5:
                alert('agregaste pan a tu carrito de compras')
                total += 2.50
                break
            case 6:
                alert('agregaste leche a tu carrito de compras')
                total += 1.90
                break
            case 7:
                alert('agregaste huevos a tu carrito de compras')
                total += 2.75
                break
            case 8:
                alert('agregaste arroz a tu carrito de compras')
                total += 1.50
                break
            case 9:
                alert('agregaste pasta a tu carrito de compras')
                total += 1.20
                break
            case 10:
                alert('agregaste carne de res a tu carrito de compras')
                total += 8.00
                break
            case 11:
                alert('agregaste pollo a tu carrito de compras')
                total += 5.50
                break
            case 12:
                alert('agregaste pescado a tu carrito de compras')
                total += 6.00
                break
            case 13:
                alert('agregaste papas a tu carrito de compras')
                total += 1.50
                break
            case 14:
                alert('agregaste cebolla a tu carrito de compras')
                total += 1.00
                break
            case 15:
                alert('agregaste aceie de oliva a tu carrito de compras')
                total += 4.00
                break

            default:
                alert('el numero ingresado no corresponde a un ID')
                break
        }
        productoId = parseInt(prompt("ingresar id del producto que desea agregar"));
    }
    total = total.toFixed(2)
    alert('el total de su compra es, ' + total + ' USD')

}

function modoDePago() {
    if(total==="0.00"){
        alert("el carrito esta vacio")
        return
    }
    
    let tarjeta = 0;
    
    while(tarjeta.toString().length !== 16){

        let metodoDePago = parseInt(prompt('Desea pagar con \n1-Debito\n2-credito+10% de interes\n3-Efectivo'));

        if (metodoDePago === 1) {
            tarjeta = parseInt(prompt("ingresar numero de cuenta"));
            if (tarjeta.toString().length === 16) {
                alert('Pago Realizado, '+total+' USD');
            }
            else {
                alert('el numero de tarjeta no es valido, verifique y vuelva a ingresar')
            }
        }
        else if (metodoDePago === 2) {
            tarjeta = parseInt(prompt("ingresar numero de cuenta"));
            if (tarjeta.toString().length === 16) {
                total=parseFloat(total+(total*0.1));
                total=total.toFixed(2);
                alert('Pago Realizado, '+total+' USD');
            }
            else {
                alert('el numero de tarjeta no es valido, verifique y vuelva a ingresar')
            }
        }
        else if (metodoDePago === 3) {
            alert('el total de su compra es, ' + total +' USD');
        }
        else {
            alert('debe elegir un metodo de pago valido');
        }
    }
}

agregarProducto()

modoDePago()

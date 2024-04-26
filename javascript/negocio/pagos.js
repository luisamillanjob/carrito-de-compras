cargarMetodosDePago()

function cargarMetodosDePago() {

    const total = calcularTotal()

    const metodosDePagoSection = document.getElementById("metodos-de-pago")
    metodosDePagoSection.innerHTML +=
        `
        <input id="total" type="text" value="Total $${total} USD" disabled></input>

        <h2>Selecciona el medio de pago</h2>

        <table>
            <tr>
                <td><b>Tarjeta de credito</b></td>
                <td>
                    <input type="radio" name="metodo-pago" value="1" />
                    <img class="logo-pago" src="https://seeklogo.com/images/V/visa-logo-121ECA05B2-seeklogo.com.png"
                        alt="logo-visa" />
                </td>
                <td>
                    <input type="radio" name="metodo-pago" value="2" />
                    <img class="logo-pago"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png"
                        alt="logo-mastercard" />
                </td>
                <td>
                    <input type="radio" name="metodo-pago" value="3" />
                    <img class="logo-pago"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/2052px-American_Express_logo_%282018%29.svg.png"
                        alt="logo-amex" />
                </td>
            </tr>
            <tr>
                <td><b>Pago en bancos</b></td>
                <td>
                    <input type="radio" name="metodo-pago" value="4" />
                    <img class="logo-pago"
                        src="https://logowik.com/content/uploads/images/bancolombia3394.logowik.com.webp"
                        alt="bancolombia-logo" />

                </td>
                <td>
                    <input type="radio" name="metodo-pago" value="5" />
                    <img class="logo-pago"
                        src="https://w7.pngwing.com/pngs/150/906/png-transparent-santander-bank-santander-group-santander-consumer-bank-santander-uk-bank-text-retail-logo.png"
                        alt="banco-santander-logo" />
                </td>
            </tr>
            <tr>
                <td><b>Pago en efectivo</b></td>
                <td>
                    <input type="radio" name="metodo-pago" value="6" />
                    <img class="logo-pago"
                        src="https://img.freepik.com/vector-premium/diseno-icono-dinero-efectivo_1692-61.jpg"
                        alt="cash-logo" />
                </td>
            </tr>
        </table>

        <br />
        <button id="botonIrPago">Continuar al pago</button>           
        `
    const botonIrPago = document.getElementById("botonIrPago");
    botonIrPago.addEventListener('click', () => { continuarAlPago() })
}

function calcularTotal() {
    let listaProductos = JSON.parse(localStorage.getItem("prodSelect"));
    let total = 0;
    for (const producto of listaProductos) {
        total += producto.precio;
    }
    return total.toFixed(2);
}

function continuarAlPago() {
    const opcionPagoSeleccionada = document.querySelector('input[name="metodo-pago"]:checked');

    if (opcionPagoSeleccionada != null) {

        const opcionSeleccionadaValor = opcionPagoSeleccionada.value;

        const metodosDePagoSection = document.getElementById("metodos-de-pago")
        metodosDePagoSection.style.display = "none"

        switch (opcionSeleccionadaValor) {

            case "1":
            case "2":
            case "3":
                formularioTarjeta()
                break;

            case "4":
            case "5":
                formularioBanco()
                break;

            case "6":
                formularioEfectivo()
                break;
        }

    }
    else {
        alert("Por favor seleccione un metodo de pago")
    }
}

function formularioTarjeta() {
    const formulario = document.getElementById("formulario-pago-tarjeta")
    formulario.innerHTML +=
        `
        <form action="/pago-exitoso.html">
        <div class="form-group">
            <label for="nombre">Nombre Completo</label>
            <input type="text" class="form-control" id="nombre" aria-describedby="nombreAyuda" required>
            <small id="nombreAyuda" class="form-text text-muted">Nombre completo como se muestra en la
                tarjeta</small>
        </div>
        <div class="form-group">
            <label for="direccion">Direccion</label>
            <input type="text" class="form-control" id="direccion" required>
        </div>
        <div class="form-group">
            <label for="telefono">Telefono</label>
            <input type="tel" inputmode="numeric" class="form-control" id="telefono" required>
        </div>
        <div class="form-group">
            <label for="tarjeta">Número de Tarjeta de Crédito</label>
            <input type="tel" inputmode="numeric" class="form-control" id="tarjeta" maxlength="19"
                pattern="[0-9\s]{13,19}" placeholder="xxxx xxxx xxxx xxxx" required>
        </div>
        <div class="form-group">
            <label for="vencimiento">Vencimiento</label>
            <input type="text" class="form-control" id="vencimiento" maxlength="5" placeholder="MM/YY" required>
        </div>
        <div class="form-group">
            <label for="cvv">CVV</label>
            <input type="password" inputmode="numeric" class="form-control" id="cvv" maxlength="4" required>
        </div>
        <input type="submit" value="Realizar Pago" class="btn btn-primary">
        </form>
        `
}

function formularioBanco() {
    const formulario = document.getElementById("formulario-pago-banco")
    formulario.innerHTML +=
        `
        <form action="/pago-exitoso.html">
        <div class="form-group">
            <label for="nombre">Nombre Completo</label>
            <input type="text" class="form-control" id="nombre" aria-describedby="nombreAyuda" required>
            <small id="nombreAyuda" class="form-text text-muted">Nombre completo como se muestra en la
                tarjeta</small>
        </div>
        <div class="form-group">
            <label for="direccion">Direccion</label>
            <input type="text" class="form-control" id="direccion">
        </div>
        <div class="form-group">
            <label for="telefono">Telefono</label>
            <input type="tel" inputmode="numeric" class="form-control" id="telefono" required>
        </div>
        <div class="form-group">
            <label for="tarjeta">Número de Cuenta</label>
            <input type="tel" inputmode="numeric" class="form-control" id="tarjeta" maxlength="19"
                pattern="[0-9\s]{13,19}" placeholder="xxxx xxxx xxxx xxxx" required>
        </div>
        <input type="submit" value="Realizar Pago" class="btn btn-primary">
        </form>
        `
}

function formularioEfectivo() {
    const formulario = document.getElementById("formulario-pago-efectivo")
    formulario.innerHTML +=
        `
        <p class="pago-efectivo-p">
            <mark>Pago contra entrega:</mark> el domiciliario recibira tu dinero en efectivo, <br/>
            te llamaremos para confirmar datos y validar si requieres cambio. Gracias! <br/><br/>
            <a href="/index.html">Volver a la tienda<a/>
        </p>
        `
    localStorage.clear()
}

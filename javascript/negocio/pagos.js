function datosForm() {
    const formularioDomicilio = document.getElementById("forms")
    formularioDomicilio.innerHTML +=
        `<form action="#" method="post" class="formulario">
    <h3>Formulario de Contacto para Domicilio</h3>
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" placeholder="Nombre completo" required>
    
    <label for="direccion">Dirección:</label>
    <input type="text" id="direccion" name="direccion" placeholder="Dirección completa" required>
    
    <label for="telefono">Teléfono:</label>
    <input type="text" id="telefono" name="telefono" placeholder="Número de teléfono" required>
    
    <input type="submit" value="PAGAR">
        </form>`
}
datosForm()
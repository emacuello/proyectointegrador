function resumen() {
    var select = document.getElementById("descuento");
    var descuento = select.value;

    var numero = document.getElementById("cantidad");
    var cantidad = parseFloat(numero.value);

    var totalAPagarElement = document.getElementById("totalapagar");

    var totalSinDescuento = 200 * cantidad;
    var totalConDescuento = totalSinDescuento - ((totalSinDescuento * descuento) / 100);

    totalAPagarElement.innerHTML = "Total a pagar: $ " + totalConDescuento;
}

function borrar() {
    var totalAPagarElement = document.getElementById("totalapagar");

    totalAPagarElement.innerHTML = "Total a pagar: $";
}
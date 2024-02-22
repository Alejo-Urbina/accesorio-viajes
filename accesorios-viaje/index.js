document.addEventListener("DOMContentLoaded", function() {
    
    const btnInicio = document.getElementById("btnInicio");
    const btnProductos = document.getElementById("btnProductos");
    const btnContacto = document.getElementById("btnContacto");
    const btnCarrito = document.getElementById("btnCarrito");
    
    btnInicio.addEventListener("click", function() {
        agregarContenido(
            "Bienvenido a la página de inicio de Aerolínea STARK.<br>" +
            "Somos una aerolínea comprometida con la excelencia en el servicio aéreo.<br>" +
            "Navega por nuestro sitio para descubrir emocionantes destinos, servicios premium y ofertas especiales."
        );
    });
    btnProductos.addEventListener("click", function() {
        agregarContenido("Explora nuestros productos.");
    });
    btnContacto.addEventListener("click", function() {
        agregarContenido("Contactanos!");
    });
    btnCarrito.addEventListener("click", function() {
        agregarContenido("Tu carrito de compras esta vacio.");
    });
    
    function agregarContenido(texto) {
        const main = document.querySelector("main");
        main.innerHTML = `<p>${texto}</p>`;
    }
});
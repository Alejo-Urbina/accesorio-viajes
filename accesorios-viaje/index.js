document.addEventListener("DOMContentLoaded", function() {
    
    const btnInicio = document.getElementById("btnInicio");
    const btnProductos = document.getElementById("btnProductos");
    const btnContacto = document.getElementById("btnContacto");
    const btnCarrito = document.getElementById("btnCarrito");
    
    btnInicio.addEventListener("click", function() {
        agregarContenido("¡Bienvenido al inicio!");
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
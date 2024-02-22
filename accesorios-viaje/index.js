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
        agregarContenido(
            "Bienvenido a la sección de productos de Aerolínea STARK.<br>" +
            "Explora nuestra amplia gama de productos para los vuelos, emocionantes destinos, " +
            "servicios exclusivos a bordo y opciones personalizadas para hacer de tu viaje una experiencia inolvidable."
        );
    });
    btnContacto.addEventListener("click", function() {
        agregarContenido(
            "¡Contáctanos para obtener más información!<br>" +
            "Estamos aquí para responder a tus preguntas y brindarte asistencia en todo lo que necesites."
        );
    });
    btnCarrito.addEventListener("click", function() {
        agregarContenido(
            "Tu carrito de compras está vacío.<br>" +
            "Explora nuestra selección de productos y agrega tus favoritos para empezar tu experiencia de compra."
        );
    });
    
    function agregarContenido(texto) {
        const main = document.querySelector("main");
        main.innerHTML = `<p>${texto}</p>`;
    }
});
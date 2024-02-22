document.addEventListener("DOMContentLoaded", function() {
    
    const btnInicio = document.getElementById("btnInicio");
    const btnProductos = document.getElementById("btnProductos");
    const btnContacto = document.getElementById("btnContacto");
    const btnCarrito = document.getElementById("btnCarrito");
    
    btnInicio.addEventListener("click", function() {
        agregarContenido(
            "Bienvenido a la página de inicio de Aerolínea STARK.<br>" +
            "Somos una aerolínea comprometida con la excelencia en el servicio aéreo.<br>" +
            "Navega por nuestro sitio para descubrir emocionantes destinos, servicios premium y ofertas especiales.",
            "https://easbcn.com/wp-content/uploads/2023/01/EAS-Gener.png"
        );
    });
    btnProductos.addEventListener("click", function() {
        agregarContenido(
            "Bienvenido a la sección de productos de Aerolínea STARK.<br>" +
            "Explora nuestra amplia gama de productos para los vuelos, emocionantes destinos, " +
            "servicios exclusivos a bordo y opciones personalizadas para hacer de tu viaje una experiencia inolvidable.",
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVFRYYGBgYGBgYGBwcGBoaGhgYGhgaGhgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQrJCExNDQ0NDQxNjQ0NDQ0NDQ0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ/NDE/MTE3NP/AABEIAKcBLQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAECAwQGB//EAEMQAAEDAgMEBgYFCwQDAAAAAAEAAhEDIQQSMQVBUXEiMmGBkbEGE6HBw9FCUnKS8AcUFSNDU2KDssLhJDOi8RZzgv/EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMGBAX/xAAoEQACAgEDAgUFAQAAAAAAAAAAAQIRMQMSIQRBBSIyYXETM1GRsYH/2gAMAwEAAhEDEQA/AOfcnaFCVNpWxgWApQkEgkBIFTUAVIJgIKQRnDejr3tY8vY0PaHCZJg8bLTQ9HA8wK7J7GOIA5zdK0WoSeEc61OjO1NhepZn9YHw9rIDYHSa91nZjpk4b0ElCdktNZJhOVCVKUxCCdU4jEBjZPcN5PAIZUrPebuy2nKzUawCRvsgEgySouqt+s3xCDswjDMhxIkEl3ab27rK2lhqZJ6Is2RJOvaE6DgInFM+u37wUmV2u6rmnkQhdLBNNslwJv8AT+lMGwHRKg7BtBPR0No33vfnbuRQWgyU4Qd+FYBaZF+sdSJA8YarPzYgWc8GJ6143wCef+UUO0EyolCnVnt6ry64EPbvPaORWrD40OOVwyu3DUHtafckI1pJSnQAyYhO8r0rD4lwpU2tJB9XTi5ifVNiI0E+SmUtpSjuPMHNUCvUW41xgZ3g2PWO+SBJtuXmeKqfrH/bf/UURluCUdpW1icNhdvs/GYb82pPfhqJOQNc4hoJc3omSRcmCVl23isL6l4Zh6bX5gwPY4EDpDpCANwKN3sVsdWce9VOKtqLLWrBsTN3NaObjA7rqzMmEioUqoc57Rqx5YeY3jsVjkk7BqhkxSTOKYCJXU+gpvW/l/3rkyV1PoL+25UviKWNZOdAU2BZcZVLGOcLkCywYfaYN3PB7AYHsRYJWHWpEjj7UHftqmNG5vb5qobaeerR93uKW4rYG/XNG8efkoOxjRo1x5BdLsvCtyNdADi0TYEzvuRxRD837fYPkvkz8UptKN/6fXh4TwnKVP4AY9K8SKbGU6GVrGsYS5rnyGtiYgDUcDqjXo9VeXk1spPSDSAGsMADoiABYiYsTmhM/CSkMMRuHiVkvFJp+nPueheGwiuJv9BD0qP+lbH71vgGmPNcOuoqUHOblcAW6xmMTxjige0qDWOAGpBJEyBpoe9evpuvjqSUWmm/0eHqvD5aac4tNL9mRSCYJ19I+WCsbUl83hhaI/icCT/atFAfSDW8Baxtv7dOKzVgC54P7xpHcxvlqtVKpfjBsPo2tAA3W9oTQNlbQXAGGiTeBppuVVMnNpZ15I0sOiO7crnkhxucpBNovmkGZ3WAUW0BAaCT0rX7ADPC0+KAHdVh8HSLAGDxt2K71wbvLtzTP0o111iRCwOqwHEgm7tNIkRbhcfgrTDSATmBBgwfZHIoFRN0sDiDBJbAgCCdbnS7vaFSyoXZYIJiTG4kkR4EFKrcOuQSDE8uieXRF1CgQIO8+0jU8kDM1MNIFriJO8Rr/wBq2sWut0gQAQ7gdQQVbh2RcQ45jBOgvJjjrZVvGXpb4IdbcQIBnjIQAQwNfOwE66HmDBWlDtlOs+NM88paCfNEEgZF+i7ypjmU6dMPNzSp5baj1bAbgLgn6LunYZj2Us7ZAp0QJka0hIEH+EKJVas10qvkjgsYxzw1j8x1i+6IAEAW7uxcHXPTf9t/9ZXdU8Gxj2Oa1oNt8m5NonhHiuExA/WVPtv/AKyhVfA9Wux1Poo0PouY4Bwa9xAMxa+4/wAZWL0josYG5G5QXjNrrDiBc37lL0SqQXtDHP6Y0IDRmbFyTrbTsVXpRUdmDSwsh89drx1SB1dDY+CVNPPHyVzsAVVa9ibOZXrMZUBLRL4a7KS5kFsmDaVkqIj6Ok+utrkf7QFbwYR9SKNr4OlTxD/VBwD+m7M7N0nEyQeFhZZHNWvajctUg26PhL6h/HNZHFEVXBU1UmVlRcpqMKiCtdT6C/tuVL4i5gldV6Ca1v5f96TGsnN1KWYEHf7UKOxmTojLE7glQWDqWzWN3LYyi1ugUnKLX3A7QpnxFsvTW6aXudbs09ADmtrXIfs828fNbQuSvk7KSLsyeVWAkqIoslc5tIS+TpBHijz3WQDHi6cZNTTRW1SjJPugXRerw5YcO+S77TvMrZK6uODjJKmwZtDoPD4s8tBP1XDj2ER91UPL75CLkANMzcAuBHeSjFWkHtLXCQbEINWwdWmCGHOy8AiS3tHb2+xUJEae0HNOV7Ic0TExIEnvvm8VtdUaWHJl0gTbNHWnjabdiEYnFvdZ7DI0OR0jkQYWF1Z5s1jjGhfuvOiVj2nRVsQzIRDZ6oyjdM7tOR4KtmKYNQLSQXSJNhcb7DzQB2Fqv6zjyFh4BIYOq24ceRuPaix7UHH1PrzeTG+De3ZvTYmsA0Ah2XLbibDeg9LFvYek2O6W+G5a2Ypr3AvdYRZsEQLgRrr5IsTibcNVMN7wbGAQPD6MdyuqmReIiQZGokrNW2hTbOoJg9XW/VT08O+s64LKZMwbOd2dg0TsVG/Yg6BdfpuJE8NB5IiSoMaGgAWAsE5KBMZ5su/c2aNIgTFOlpGuRoM8RAIhefVNEDxOAe90l7ze0vcQJ4SbKJRsuMtp682m6WxFi0m4N7TE6LzrEn9ZU/8AY/8ArKBDZJkS5x7yi9FkBEY0OUrKK22KmGqMcyo6m1zhnLYBLQdM0SBroonblTEV3h1Z9Sm1xcwOcXATplm4srMVhGvEOTYXBNZoEOPmsSl5aNLioUNrHDO9aGZ7FsHNF4v0TO5SeqXMVtWqITp2SdtY4l5quZksGwM0WJP0iTvUXFJrANEkJUqBu3ZGUiUinATArhdX6C/tuVL4i5ZwXUegv7blS+IkwWTn2OUyVUxTlACcq2ddvMKwlQYem3mFlreiXwzbp/ux+V/Tq8Bp3nzW4LBgrTzPmt0rlEdlImHJOKg0pyVRm0J5sgWO1RyobIHi7nvHmkvUjSPpZz2Bdc/aPmURahOBOvM+aKtcutjg4meSaYBIuTbOLsgzEk3k6yZum3QRVjvaDqJVJwzTuC1vcBuVL3qN/sX9P3KhhQmOGCsFRJlSRKqMrIlFxMzsG07lU7ZNI6sB7kRBWRuKzPDY1zwZ+pl883sVcE8j4fZ9Nt2saO2FqDUwKWZADlIqJcmLkwIvKrJSe6Fzu0NoOeSGmGDhq5JuhxjuD78UwC7h+O3RVfpGn9cLmmUhqfbfzT5BwEclG5mmxHVMrNd1XA8verJXH3YZYS0jTgug2ZjvWMvZws4e9NSsmUaNriq3J3OjVA8XtRzjlZYfWO/kqbomMWww+oBqQOZUPXs+s3xC518nVzj3x7AqXUx2+JUbi9h1UqQXLYbFvYbGW7wfxZdNhqoe0OGhVKVkyjQ9RdR6Ba1+VL4i5eoun9BNa/8AK+IhiWTm2BSUEiVQiyVGj12/aCiCnw/XZ9oLDX+3L4Zt033Y/K/p1mE38z5rUCsmFOvM+a0grlTs3kmCpSqpU2lMhom/RAMY7pd6OvdYrnse+CSqirmh3UGzn8DoiLCh+z+qERaV1kcHEyySJWzZDHPyMEZnkASYEk7+CwFy0bKa/K0smWxpYg7lpHDJ7nWOfWDy9zGDIGQ0vgkU6L3Frba5Xl3dvVDHPZ0sjJyspEl/RJqP9Ywulo6MOh0m4OoQxjarmumq5ocIc3p3DZbDoBmANOCrfQrNBisZsQAX9ItAym4iRFuELJqzW6BuMwzqbyx2oJB13HtAPb3qnD9UJYuq8npySTJJuSd8lSodUIVXwE7rkmsr3dKiJ0FccpeCtRQtp/Wj7bh4saU32Ij3CZKRcouQFlQhzH7/AFz2k8QZABO/cm3QJWH8yYpmFScmIwbVqZWHtt81zrOKObdPQQGmVlLJrDBpaEnJ6aRUmhnqBX7KqZakT1hHvVVRQwRiq3mmskywF9sViGBo+lryQloWrbNTpgcvesrU3kUVwTyqt6mFW8qSil4RbYtbolvAyO//AKQhy27HdDyOI96qOSZYD5cuq9BNa/8AK+IuUXVegv7blS+ItGZLJzLSpwqiU4cmIdyfDnps+0PNRLlDPlIdwIPgVlqx3Qkl3TNdGSjqRk+zX9Owo7/tHzKvBQ1mOZc523JIvuJkJn7Ypj6Q8Vy2yV1R2e5NXYSLlJr0Fft2nuJPIFR/TbdzXfdd8k/pT/At0fyHnGy5bb1bKHfZd5QPNb2bbbva+Pslc1tvGte/KwyLfP5L0dNoyeqrR5uq1ow0Jc8stwAstyx4VtlqC6Q5IREqeGq5mzxJPiVB2ixbMIAFmjk6VaYgjh3WP2j5qxz4BPC6xUcSBIPEkKb8UCCBN7JKSSG4uyp7pM8Vdh39EKhqupCwWUe5c8IvQp5isPt/D/wiAch1b/fb2kf0PHuVshBMuXL1nEEjhXB8Xf5XTFc/jsK/1hDWy1z2unhEJMcWH2aJyVFmidyokG7a6iAU0f2v1PxwKAUlnLJrDBrYVrpYGo9peym97Rq5rHOaD2uAgLCx0L0TZ3pvh6eGYwsIuA6kwFkADpOa+wg9rpsoLPOqkQqsKf1jea2bUxfrar6mge9zgDqAT0QeJAi+9Y8J/uDv8k1kUsF21z0xyCqpq3aw6QPYPeqWJvIo4LWhVPN1awr0DZ+L2e6gGObQY15PXALmOy3zPMO1AAdI8lJR5o9XbOdDx2yPx4JsQW5nFgIbJygmSBukwq8MYe3mmsieDpmPXW+gRvX5UviLjaZsuw9A9a/8r4i0eDFZOZcmCdyQCoRFype5XKDgkwQKrveJyuLeRhYhjKrT1ieaN1GBZnYfsWT04vKNo6048JsxHatSxy35pnbUqH6PtKINwo4KQwg4KPoQ/Bo+r1PywQatR1pjl/lbtn4WCtjMMFopMhax01HBjPUlPLNNAQtIWdita5aGY7kGbiRENDYvcNi09qMyhn6I4PI7m/JJ32HFpZIMqK1j1H9Gu/eH7rfkonAPGlQ/dHyUbWXvRrY9aKWiGNwT5vUMdgA9sWRGmIEJxTQpSTwWoZiR/qGdo/teiMrPUoS5r56s98j/ACqaITNBUUiUyYEpTEppTFAjDtTqFc8wDeujx/UdyXI13kk8FnLJrDBt/OWi0pfnbOKG5CllKg0CPrQeBTYcfrGxx9yHQVs2cTnHYmsieAhtb6PeszVbtV5ABQx2IcU3kmOAk0qmobofndxPimzEbypLN5cmpnpN+0PNZm4hw7VYyqCRbePNMTOoo6LsvQLWvypfEXC0HyF2/wCT03r8qXxFoY9zmiUwUAVPMqJNuztnPruysteCTx4dpR7E+g9X1frGPDuiHERESJF5MWI19ip2BiWMYwuIaHB7ZJjpF5HHWA3kurwm1Q105mubMRnBBE/VkC0diTsy+p5nZ5ZUpFri1wIIJBB1BFiCohiLektVhxL8mnR8co90I36FbDw+JbUdXLpa5oaA/LqCTPHchtJWzaPmwcgGKwMXo+1tg4GhTzNbfOGy5xdHQJi7gN3ahmei0SzC0HWmX1WeQJWL14p0ezS6HV1Y7lVe7o4zIE1l2FXaT2t6NLBMMOJc6iC0QDbNvkwJXeVcMzIegwACYDGgTBvYLae6KTayeRKLk4p3XHt/h4q1ykCqm6BSBTJLQU+ZVtKeUAWMIJA0kgeK6Vnoi4gfrqQkTcu9wXMtfEGJIIPDS+u5FP8AzCuIHqWgAQOnOnNimV9hxruNtfZIoFrTVY4uEgNcRvj6QCHik6YymeSfaG0XYlwc9gaQIiQQR4BZ6Zewyx7mxpcmOQNgmrBpWavzV+5j/un5JHBVfqP+475Kp2MrHWq/x+SrOKq/vX/eKOQ4NQ2fV+o/7jvkszgQYNjvUC951e8//bvmk0RvnndMRKUxKUqJKAM+Ku08iuaqUoJ5rp6wseSAVdT3eQWczXT7mNzFDJK2lqbIoNDLkW3Z9K/P5qGRbMC245HzVRyTLA+0KUsQg010OKp9A/jehJZZEsihgxZE3q1qLUxYpLMpprTg6G/gncxa8Cy08vIKo8smXCNlILuPye61+VL4i4tgXa/k+1r8qXxFbMVk5IOUgZVbU8KhF+CxbWHJUBNNxkEasfpmBO46EcuC2bTxtKiOgc7z1BAytP1nC2g9sdqFvYHCFmo4JrXSAi2uCXFN2W4QGS5xJc4kknUk3JKuq0yeq57fsuLfIqTWgKYKKKTooqNrFuX1zy2ZhxzX4y6TvKalSrNsKlpmDME9oBC0Zk8rN6cXlG0Op1YKoyaXsywV3ugVGseBu6TfIkd8Lsqfp68tcH0GyRALXngRcFvvXEykStJebPJjGo4VEkoUQnDkAOSna5VlyWZAFwch36V/h38Vrc4wufGGqi2X/iw+aTscUnkKHa38IUDtU8BvQ8YWr9X/AI00jgqvD2tHklbKpGn9LHg32/NRO1ncG/jvVAwNXh7QpMwNTf8A1JchUQls/Fl8zFuC3NQ3AYZ7XS7hGsoiCrWCJVfBIqJKYlRKBDPNigdfXuCOFBcSL95Hv96ieDTTyVSnATNClCzNhELRgTfu95Wdy0YIXHKfElVHJMvSa6/VdyKEnTvKNubZBCDJn8FOZOn3KynScDuUsig0EdFs2eLHu/pCyZbLdgRrrqNeQVRyRPBpAXZfk+1r8qXxFx8Lsfyfa1+VL4i0ZksnHNcpqsKbCmIeU4KZKEASlPKiol6ALZSlQDk4cgCadQzJsyAJlyQcoSmLkAWFMVAOUggBSkUyeUCHCdQTSgCxMFGUgUAWAp5UJTZkASJUCUnFQzIAmXIVjG9K+/TsKIys+Ko5hCJK0VF0zDHcmDlS/Oy0Bw7dfHVQ9efqH7x+SxaaN1JGoGbacTwHFX4J8kndoOQ0WBjHvtGVvAb+Z3oth6WUKormyJy7F5ehuJbDuenA8RzRCFTWpBwgiVclaM4ypg8J3JPwjx1XGOBv5qk0anEeAWe1m25FpcBc6D29g4lEMGDlvqblYcPgjMuJJ7UTaIVRjRnOV8Imux/J9rX5UviLjpXYfk9N6/Kl8RUyFk40FPKSSYiQKRSSQAyjKSSBkgVJJJAhwkkkgYkgkkgQpT5kySAFKUpJIAUpSkkgBJwkkgBEqJKSSAGJTSkkgBpScUkkAUvbKgKI4JJIGWspgKyUkkCY0pgUkkAShMWBOkgBBicJJIAi5y6/8nbr4jlS+Ikkkx9z/9k=" 
        );
    });
    btnContacto.addEventListener("click", function() {
        agregarContenido(
            "¡Contáctanos para obtener más información!<br>" +
            "Estamos aquí para responder a tus preguntas y brindarte asistencia en todo lo que necesites.",
            "" 
        );
    });
    btnCarrito.addEventListener("click", function() {
        agregarContenido(
            "Tu carrito de compras está vacío.<br>" +
            "Explora nuestra selección de productos y agrega tus favoritos para empezar tu experiencia de compra.",
            "" 
        );
    });
    
    function agregarContenido(texto, urlImagen) {
        const main = document.querySelector("main");
        main.innerHTML = `<p>${texto}</p>`;        
        
        if (urlImagen) {
            const imagen = document.createElement("img");
            imagen.src = urlImagen;
            imagen.alt = "Imagen relacionada";
            main.appendChild(imagen);
        }
    }
});
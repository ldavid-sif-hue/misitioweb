

const modoBtn = document.getElementById("modoBtn");

modoBtn.addEventListener("click", function () {

    document.body.classList.toggle("oscuro");

    if (document.body.classList.contains("oscuro")) {
        modoBtn.textContent = "☀️";
    } else {
        modoBtn.textContent = "🌙";
    }

});




const infoBtn = document.getElementById("infoBtn");

infoBtn.addEventListener("click", function () {

    alert(
        "Este proyecto utiliza HTML para la estructura, " +
        "CSS para el diseño y JavaScript para la interactividad."
    );

});




const saludoBtn = document.getElementById("saludoBtn");

const mensaje = document.getElementById("mensaje");

saludoBtn.addEventListener("click", function () {

    mensaje.textContent =
        "¡Gracias por visitar nuestro proyecto! 🚀";

});



const anio = document.getElementById("anio");

anio.textContent = new Date().getFullYear();
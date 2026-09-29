let indice = 0;

const portadas = document.querySelectorAll(".carrusel a");

function mostrarPortada() {
    portadas.forEach(function(portada) {
        portada.classList.remove("activa");
    });

    portadas[indice].classList.add("activa");
}

function siguientePortada() {
    indice++;

    if (indice >= portadas.length) {
        indice = 0;
    }

    mostrarPortada();
}

function anteriorPortada() {
    indice--;

    if (indice < 0) {
        indice = portadas.length - 1;
    }

    mostrarPortada();
}

mostrarPortada();

setInterval(siguientePortada, 4000);
let imgTotal = 0;
let imgCargadas = 0;

const isIntersecting = (entry) => {
    return entry.isIntersecting; //true (dentro de pantalla)
};

const loadImage = (entry) => {
    const container = entry.target; // container (DIV)
    const imagen = container.firstChild;
    const url = imagen.dataset.src;
    //cargue imagen
    imagen.src = url;

    //Contador
    imagen.onload = () => {
        imgCargadas += 1;
        contador();
    };

    //des registra la imagen (unlisten)
    observer.unobserve(container);
};

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(loadImage);
});

export const registerImage = (imagen) => {
    // IntersectionObserver -> observer(Imageb)
    observer.observe(imagen);
    imgTotal += 1;
    contador();
}

function contador() {
    console.log(`👻Total de Imágenes: ${imgTotal}`);
    console.log(`🌌Imágenes cargadas: ${imgCargadas}`);
    console.log("--------------------------------------");
}
const isIntersecting = (entry) => {
    return entry.isIntersecting; //true (dentro de pantalla)
};

const loadImage = (entry) => {
    const container = entry.target; // container (DIV)
    const imagen = container.firstChild;
    const url = imagen.dataset.src;
    //cargue imagen
    imagen.src = url;

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
}
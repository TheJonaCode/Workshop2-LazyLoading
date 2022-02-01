const isIntersecting = (entry) => {
    return entry.isIntersecting; //true (dentro de pantalla)
};

const accion = (entry) => {
    const nodo = entry.target;
    console.log("sup");

    //des registra la imagen (unlisten)
    observer.unobserve(nodo);
};

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(accion);
});

export const registerImage = (imagen) => {
    // IntersectionObserver -> observer(Imageb)
    observer.observe(imagen);
}
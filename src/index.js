import { registerImage } from './lazy';

const minimum = 1;
const maximum = 122;
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;

const createImageNode = () => {
    const container = document.createElement('div');
    container.className = "p-4 mx-auto";

    const imagen = document.createElement('img');
    imagen.className = "mx-auto";
    imagen.width = '320';
    imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

    container.appendChild(imagen);

    return container;
}

const nuevaImagen = createImageNode();
const mountNode = document.getElementById("imagenes");

//Botones
const addButton = document.querySelector('button');
addButton.className = "btnAdd";
const cleanButton = document.querySelector("button[type='button']");
cleanButton.className = "btnClean";

//Agregar Imagen
const addImage = () => {
    const newImage = createImageNode();
    mountNode.append(newImage);
    registerImage(newImage);
};

//Limpiar
const cleanScreen = () => {
    mountNode.innerHTML = "";
};

addButton.addEventListener("click", addImage);
cleanButton.addEventListener("click", cleanScreen);
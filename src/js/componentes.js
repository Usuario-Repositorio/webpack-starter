import '../css/componentes.css';
import webpacklogo from '../assets/img/utmir.png';

export const saludar = (nombre) => {
    console.log('creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `hola ${nombre}`;

    document.body.append(h1);

    //creando imagen
    //const img = document.createElement('img');
    //img.src = webpacklogo;
    //document.body.append(img);
}
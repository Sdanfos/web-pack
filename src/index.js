import { saludar } from './js/componentes.js';
import './styles.css'

const nombre = 'San-Danfos';

const h = document.querySelector('#hh');
h.innerText = nombre;

saludar(nombre);
import './style.css';
import { displayData, add } from './modules/non-async-fn.js';

add();
displayData();

// refresh btn implements display function
const btn = document.getElementById('btn-refresh');
btn.addEventListener('click', displayData);
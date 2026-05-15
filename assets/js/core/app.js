import { loadHeader } from './header.js';
import { loadFooter } from './footer.js';

const header = document.getElementById('st-header');
const footer = document.getElementById('st-footer');

if (header) {
  header.innerHTML = loadHeader();
}

if (footer) {
  footer.innerHTML = loadFooter();
}
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import App from './view/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

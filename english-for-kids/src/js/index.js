import '../css/style.css';
import '../css/style.scss';

import Utils from './helpers/utils';
// eslint-disable-next-line import/no-cycle
import Header from './views/partials/header';
import Footer from './views/partials/footer';
import Error404 from './views/pages/error404';
import Cards from './views/pages/cards';

import Home from './views/pages/home';
import Main from './views/pages/main';

const Routes = {
  '/': Home,
  '/main': Main,
  '/cards': Cards,
};

function router() {
  const headerContainer = document.getElementsByClassName('header-container')[0];
  const contentContainer = document.getElementsByClassName('content-container')[0];
  const footerContainer = document.getElementsByClassName('footer-container')[0];
  const header = new Header();
  const footer = new Footer();

  const request = Utils.parseRequestURL();
  const parsedURL = `/${request.resource || ''}`;
  const page = Routes[parsedURL] ? new Routes[parsedURL]() : new Error404();

  headerContainer.innerHTML = header.render();
  contentContainer.innerHTML = page.render();
  footerContainer.innerHTML = footer.render();

  header.afterRender();
  page.afterRender();
  footer.afterRender();
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
window.addEventListener("unload", () => {
  localStorage.inputChecked = false;
});


// eslint-disable-next-line import/prefer-default-export
export {router};


















// const helloArr = require('./moduleOne.js');



// class TestClass {
//   constructor() {
//     const msg = "Using ES2015+ syntax";
//     console.log(msg);
//   }
// }

// const test = new TestClass();


// // Пример массива
// console.log(helloArr);

// /* пример подключения модуля*/
// let mod = moduleOne(2, 3);

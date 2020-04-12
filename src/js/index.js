import '../css/style.css';
import '../css/style.scss';
// import {
//   moduleOne
// } from './moduleOne';
// import CARDS from './cards';
import Utils from './helpers/utils';

import Header from './views/partials/header';
import Footer from './views/partials/footer';
import Error404 from './views/pages/error404';


import Home from './views/pages/home';


const Routes = {
  '/home': Home,
  // '/calorie-calc': CalcOfFood,
  // '/water-calc': CalcOfWater,
  // '/descr': Description,
  // '/faq': FAQ
};

function router() {
  const headerContainer = document.getElementsByClassName('header-container')[0];
  const contentContainer = document.getElementsByClassName('content-container')[0];
  const footerContainer = document.getElementsByClassName('footer-container')[0];
  const header = new Header();
  const footer = new Footer();

  headerContainer.innerHTML = header.render();
  header.afterRender();

  
  

  const request = Utils.parseRequestURL();
  const parsedURL = `/${request.resource || ''}`;
  // console.log('parsedURL: ', parsedURL);
  // ${request.action ? `/${request.action}` : ''}
  const page = Routes[parsedURL] ? new Routes[parsedURL]() : new Error404();

  contentContainer.innerHTML = page.render();
  page.afterRender(); 

  footerContainer.innerHTML = footer.render();
  footer.afterRender();
}



window.addEventListener('load', router);
window.addEventListener('hashchange', router);






















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

import Component from '../component';
import CARDS from '../../cards';

class Header extends Component {

    render() {
        const [resource] = this.request.resource;

        const html = 
        `<header class="header">  
            <span class="header__hamburger hamburger">
                <span class="hamburger__line"></span>
            </span>
                <ul class="navigation">
                    <li class="navigation__item"><a class="navigation__link active" href="#home">Main Page</a></li>
                    <li class="navigation__item"><a class="navigation__link" href="#services">Action (set A)</a></li>
                    <li class="navigation__item"><a class="navigation__link" href="#portfolio">Action (set B)</a></li>
                    <li class="navigation__item"><a class="navigation__link" href="#about">Action (set C)</a></li>
                    <li class="navigation__item"><a class="navigation__link" href="#contact">Adjective</a></li>
                    <li class="navigation__item"><a class="navigation__link" href="#contact">Animal (set A)</a></li>
                    <li class="navigation__item"><a class="navigation__link" href="#contact">Animal (set B)</a></li>
                    <li class="navigation__item"><a class="navigation__link" href="#contact">Clothes</a></li>
                    <li class="navigation__item"><a class="navigation__link" href="#contact">Emotion</a></li>
                </ul>

                <label class="switch">
                    <input type="checkbox">
                    <span class="slider round"></span>
                </label>
        </header>`;

        return html;
    }

    afterRender() {
        // this.getCurrentDate();
        this.setActions();
    }

    setActions() {
        const header = document.querySelector('.header');
        const hamburger = document.querySelector('.hamburger');
        const navigation = document.querySelector('.navigation');

        header.addEventListener('click', event => {
            this.target = event.target;
            // console.log('this.target: ', this.target);
            const targetClassList = this.target.classList;

            switch (true) {
                case (targetClassList.contains('hamburger') && !this.target.classList.contains('toggle') ||
                targetClassList.contains('hamburger__line') && !hamburger.classList.contains('toggle')): 
                    this.getNavigationMenu(hamburger, navigation);
                break;
                case targetClassList.contains('toggle'): 
                case targetClassList.contains('navigation__link'): 
                    this.removeNavigationMenu(hamburger, navigation);
                break;

                default:
            }

        });
    }

    getNavigationMenu(hamburger, navigation) {
        navigation.classList.add('navigation-active');
        hamburger.classList.toggle('toggle');
    }

    removeNavigationMenu(hamburger, navigation) {
        navigation.classList.remove('navigation-active');
        hamburger.classList.remove('toggle');
    }

    // getCurrentDate() {
    //     const addNowDate = document.getElementsByClassName('header-date')[0];
    //     let currentDate = new Date();
    //     let year = currentDate.getFullYear();
    //     let month = currentDate.getMonth();
    //     month = `${month + 1}`;
    //     let day = currentDate.getDate();
        
    //     addNowDate.innerHTML = `${day}/${month}/${year}`;
    // }  



    // <div class="header-date"></div>                  
                   
    // <a class="header__link ${!resource ? 'active' : ''} " href="/#/">
    //     <i class="fas fa-home"></i>
    // </a>
    // <a class="header__link btn-start__orange ${resource === 'calorie-calc' ? 'active' : ''}" href="/#/calorie-calc">
    //     <i class="fas fa-utensils"></i>
    //  </a> 
    //  <a class="header__link btn-start__blue ${resource === 'water-calc' ? 'active' : ''}" href="/#/water-calc">
    //     <i class="fas fa-tint"></i>
    // </a>
    //  <a class="header__link btn-start__green ${resource === 'descr' ? 'active' : ''}" href="/#/descr">
    //     <i class="fas fa-pen"></i>
    //  </a>      
    //  <a class="header__link btn-start__gray ${resource === 'faq' ? 'active' : ''}" href="/#/faq">
    //     <i class="far fa-question-circle"></i>
    //  </a>  
}

export default Header;
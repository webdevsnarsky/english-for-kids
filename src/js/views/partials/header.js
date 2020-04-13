import Component from '../component';

class Header extends Component {

    render() {
        const [resource] = this.request.resource;

        const html = 
        `<header class="header">  
            <span class="header__hamburger hamburger">
                <span class="hamburger__line"></span>
            </span>

            <nav class="header__navigation">
                <ul class="navigation">
                    <li class="navigation__item"><a class="navigation__link active" href="#home">Home</a></li>
                    <li class="navigation__item"><a class="navigation__link" href="#services">Services</a></li>
                    <li class="navigation__item"><a class="navigation__link" href="#portfolio">Portfolio</a></li>
                    <li class="navigation__item"><a class="navigation__link" href="#about">About</a></li>
                    <li class="navigation__item"><a class="navigation__link" href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>`;

        return html;
    }

    afterRender() {
        // this.getCurrentDate();
        this.setActions();
    }

    setActions() {
        const header = document.querySelector('.header');
        const headerNavigation = document.querySelector('.header__navigation');
        const hamburger = document.querySelector('.hamburger');
        const navigation = document.querySelector('.navigation');

        header.addEventListener('click', event => {
            this.target = event.target;
            const targetClassList = this.target.classList;

            switch (true) {
                case (targetClassList.contains('hamburger') && !this.target.classList.contains('rotate')): 
                this.getNavigationMenu(headerNavigation, hamburger, navigation);
                break;
                case targetClassList.contains('rotate'): 
                case targetClassList.contains('header__navigation'): 
                case targetClassList.contains('navigation__link'): 
                this.removeNavigationMenu(headerNavigation, hamburger, navigation);
                break;

                default:
            }

        });
    }

    getNavigationMenu(headerNavigation, hamburger, navigation) {
        headerNavigation.classList.add('header__navigation-active');
        navigation.classList.add('navigation-active');
        document.body.classList.add('scroll-hidden');
        hamburger.classList.add('rotate');
    }

    removeNavigationMenu(headerNavigation, hamburger, navigation) {
        headerNavigation.classList.remove('header__navigation-active');
        navigation.classList.remove('navigation-active');
        hamburger.classList.remove('rotate');
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
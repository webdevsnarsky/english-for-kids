import Component from '../../components/component';
// import CARDS from '../../components/cards';

class Header extends Component {
    // constructor() {
    //     super();
    //     // this.inputChecked = false;
    // }

    render() {
        // const resource = this.request.resource;

        const html = 
        `<header class="header">  
            <span class="header__hamburger hamburger">
                <span class="hamburger__line"></span>
            </span>
                <ul class="navigation">
                    <li class="navigation__item"><a class="navigation__link active" href="#/main">Main Page</a></li>
                    <li class="navigation__item"><a class="navigation__link" href="#/cards">Action (set A)</a></li>
                    <li class="navigation__item"><a class="navigation__link" href="#/cards">Action (set B)</a></li>
                    <li class="navigation__item"><a class="navigation__link" href="#/cards">Action (set C)</a></li>
                    <li class="navigation__item"><a class="navigation__link" href="#/cards">Adjective</a></li>
                    <li class="navigation__item"><a class="navigation__link" href="#/cards">Animal (set A)</a></li>
                    <li class="navigation__item"><a class="navigation__link" href="#/cards">Animal (set B)</a></li>
                    <li class="navigation__item"><a class="navigation__link" href="#/cards">Clothes</a></li>
                    <li class="navigation__item"><a class="navigation__link" href="#/cards">Emotion</a></li>
                </ul>

                <label class="switch">
                    <input type="checkbox" class="switch__input" ${localStorage.inputChecked === 'true' ? 'checked' : ''}>
                    <span class="slider round"></span>
                </label>
        </header>`;

        return html;
    }

    afterRender() {
        this.setActions();
    }

    setActions() {
        const header = document.querySelector('.header');
        const hamburger = document.querySelector('.hamburger');
        const navigation = document.querySelector('.navigation');
        const switchInput = document.querySelector('.switch__input');
        
       switchInput.addEventListener('change', () => {this.getCheckedInput()});

        header.addEventListener('click', event => {
            this.target = event.target;
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

    getCheckedInput() {
        if (localStorage.inputChecked === 'false')  {
            localStorage.inputChecked = 'true';
            this.inputChecked = true;
            
        } else {
            localStorage.inputChecked = 'false';
            this.inputChecked = false;
            
        }
        
        this.changeColorOfElem();
    }

    changeColorOfElem() {
        this.switchInput = document.querySelector('.switch__input');
        this.mainCard = document.querySelectorAll('.main__card');

        switch (localStorage.inputChecked) {
            case 'true':
                this.mainCard.forEach(card => card.classList.add('green'));
                break;
            case 'false':
                this.mainCard.forEach(card => card.classList.remove('green'));

                break;
            default:
                break;
        }

        // if (localStorage.inputChecked === 'true') {
        //     this.mainCard.forEach(card => card.classList.add('green'));
        //     this.switchInput.checked = true;
          
        // } else {
        //     this.mainCard.forEach(card => card.classList.remove('green'));
        //     this.switchInput.checked = false;   
        // }
      }

    // <div class="header-date"></div>                  
                   
    // <a class="header__link ${!resource ? 'active' : ''} " href="/#/">
    //     <i class="fas fa-home"></i>
    // </a>
    // <a class="header__link btn-start__orange ${resource === 'calorie-calc' ? 'active' : ''}" href="/#/calorie-calc">
    //     <i class="fas fa-utensils"></i>
    //  </a> 
}

export default Header;

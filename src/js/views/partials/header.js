import Component from '../../components/component';
import {router} from '../../index';

class Header extends Component {

    render() {

        this.html = 
        `<header class="header">  
            <span class="header__hamburger hamburger">
                <span class="hamburger__line"></span>
            </span>
                <ul class="navigation">
                    <li class="navigation__item"><a class="navigation__link active" href="#/main">Main Page</a></li>
                    <li class="navigation__item"><a class="navigation__link" href="#/cards">Action (Set A)</a></li>
                    <li class="navigation__item"><a class="navigation__link" href="#/cards">Action (Set B)</a></li>
                    <li class="navigation__item"><a class="navigation__link" href="#/cards">Animal (Set A)</a></li>
                    <li class="navigation__item"><a class="navigation__link" href="#/cards">Animal (Set B)</a></li>
                    <li class="navigation__item"><a class="navigation__link" href="#/cards">Clothes</a></li>
                    <li class="navigation__item"><a class="navigation__link" href="#/cards">Emotion</a></li>
                </ul>

                <label class="switch">
                    <input type="checkbox" class="switch__input" ${localStorage.inputChecked === 'true' ? 'checked' : ''}>
                    <span class="slider round"></span>
                </label>
        </header>`;

        return this.html;
    }

    afterRender() {
        this.setActions();
    }

    setActions() {
        this.header = document.querySelector('.header');
        this.hamburger = document.querySelector('.hamburger');
        this.navigation = document.querySelector('.navigation');
        this.switchInput = document.querySelector('.switch__input');
        
       this.switchInput.addEventListener('change', () => {
           this.getCheckedInput();
        });

        this.header.addEventListener('click', event => {
            this.target = event.target;
            const targetClassList = this.target.classList;
            
            switch (true) {
                // case (localStorage.inputChecked === 'true' && (targetClassList.contains('card__face'))):
                //     this.startGameMode();
                // break;
                case (targetClassList.contains('hamburger') && !this.target.classList.contains('toggle') ||
                targetClassList.contains('hamburger__line') && !this.hamburger.classList.contains('toggle')): 
                    this.getNavigationMenu();
                break;
                case targetClassList.contains('toggle'):
                    this.removeNavigationMenu();
                break;
                case targetClassList.contains('navigation__link'): 
                    this.removeNavigationMenu();
                    this.setDataOpenCategory();
                break;
                default:
                break;
            }

        });
    }

    getNavigationMenu() {
        this.navigation.classList.add('navigation-active');
        this.hamburger.classList.toggle('toggle');
    }

    removeNavigationMenu() {
        this.navigation.classList.remove('navigation-active');
        this.hamburger.classList.remove('toggle');
    }

    getCheckedInput() {
        if (localStorage.inputChecked === 'false')  {
            localStorage.inputChecked = 'true';
            this.inputChecked = true;
            // this.startGameMode();
        } else {
            localStorage.inputChecked = 'false';
            this.inputChecked = false;
            // this.stopGameMode();
        }
        
        this.changeColorOfElem();
    }

    changeColorOfElem() {
        this.mainCard = document.querySelectorAll('.main__card');
        this.categoryCard = document.querySelectorAll('.category__card');

        switch (localStorage.inputChecked) {
            case 'true':
                this.mainCard.forEach(card => card.classList.add('green'));
                this.categoryCard.forEach(card => card.classList.add('green'));
                break;
            case 'false':
                this.mainCard.forEach(card => card.classList.remove('green'));
                this.categoryCard.forEach(card => card.classList.remove('green'));
                break;
            default:
                break;
        }
      }

      setDataOpenCategory() {
        localStorage.Category = this.target.textContent;
        router();

        // clear container 
        // 
      }

}

export default Header;

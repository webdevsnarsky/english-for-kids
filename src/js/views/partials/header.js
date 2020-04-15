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
                    this.removeNavigationMenu(hamburger, navigation);
                break;
                case targetClassList.contains('navigation__link'): 
                    this.removeNavigationMenu(hamburger, navigation);
                    this.setDataOpenCategory();
                break;
                default:
                break;
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
      }
}

export default Header;

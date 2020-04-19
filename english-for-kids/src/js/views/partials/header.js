import Component from '../../components/component';
// eslint-disable-next-line import/no-cycle
import {router} from '../../index';

class Header extends Component {

    render() {
        this.html = 
        `<header class="header"> 
            <span class="header__hamburger hamburger">
                <span class="hamburger__line"></span>
            </span>
                <ul class="navigation">
                    <li class="navigation__item"><a class="navigation__link ${localStorage.Category === 'Main Page' ? 'orange-link' : ''}" href="#/main"><i class="fas fa-home"></i>Main Page</a></li>
                    <li class="navigation__item"><a class="navigation__link ${localStorage.Category === 'Action (Set A)' ? 'orange-link' : ''}" href="#/cards"><i class="fas fa-pencil-ruler"></i>Action (Set A)</a></li>
                    <li class="navigation__item"><a class="navigation__link ${localStorage.Category === 'Action (Set B)' ? 'orange-link' : ''}" href="#/cards"><i class="fas fa-running"></i>Action (Set B)</a></li>
                    <li class="navigation__item"><a class="navigation__link ${localStorage.Category === 'Animal (Set A)' ? 'orange-link' : ''}" href="#/cards"><i class="fas fa-dog"></i>Animal (Set A)</a></li>
                    <li class="navigation__item"><a class="navigation__link ${localStorage.Category === 'Animal (Set B)' ? 'orange-link' : ''}" href="#/cards"><i class="fas fa-frog"></i>Animal (Set B)</a></li>
                    <li class="navigation__item"><a class="navigation__link ${localStorage.Category === 'Clothes' ? 'orange-link' : ''}" href="#/cards"><i class="fas fa-tshirt"></i>Clothes</a></li>
                    <li class="navigation__item"><a class="navigation__link ${localStorage.Category === 'Emotion' ? 'orange-link' : ''}" href="#/cards"><i class="far fa-smile"></i>Emotion</a></li>
                    <li class="navigation__item"><a class="navigation__link ${localStorage.Category === 'Transport' ? 'orange-link' : ''}" href="#/cards"><i class="fas fa-car"></i>Transport</a></li>
                    <li class="navigation__item"><a class="navigation__link ${localStorage.Category === 'Sport' ? 'orange-link' : ''}" href="#/cards"><i class="fas fa-volleyball-ball"></i>Sport</a></li>
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

        this.header.addEventListener('click', (event) => {
            this.target = event.target;
            const targetClassList = this.target.classList;
            
            switch (true) {
                case (targetClassList.contains('hamburger') && !this.target.classList.contains('toggle') ||
                targetClassList.contains('hamburger__line') && !this.hamburger.classList.contains('toggle')): 
                    this.getNavigationMenu();
                break;
                case targetClassList.contains('toggle') || targetClassList.contains('navigation__link '):
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
        } else {
            localStorage.inputChecked = 'false';
            this.inputChecked = false;
        }
        
        this.changeColorOfElem();
    }

    changeColorOfElem() {
        this.mainCard = document.querySelectorAll('.main__card');
        this.allCardRotate = document.querySelectorAll('.card__rotate');

        switch (localStorage.inputChecked) {
            case 'true':
                this.mainCard.forEach(card => card.classList.add('orange'));
                this.allCardRotate.forEach(elem => elem.classList.add('hidden'));
                break;
            case 'false':
                this.mainCard.forEach(card => card.classList.remove('orange'));
                this.allCardRotate.forEach(item => item.classList.remove('hidden'));
                break;
            default:
                break;
        }
      }

      setDataOpenCategory() {
        localStorage.Category = this.target.textContent;
        setTimeout(()=>{
            router();
        }, 600);
      }
}

export default Header;

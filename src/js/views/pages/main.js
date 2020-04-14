import Component from '../../components/component';
// import Header from '../partials/header';
// import CARDS from '../../components/cards';

class Main extends Component {
  constructor (html) {
    super();
    this.html = html; 
  }

    render() {
        this.html = 
        `<div class="main"> 
            <a class="main__card ${localStorage.inputChecked === 'true' ? 'green' : ''}" href="#/cards" title="Нажми, чтобы начать!">
                <img src="" alt="">
            </a>
            <a class="main__card ${localStorage.inputChecked === 'true' ? 'green' : ''}" href="#/cards" title="Нажми, чтобы начать!"">
                <img src="" alt="">
            </a>
            <a class="main__card ${localStorage.inputChecked === 'true' ? 'green' : ''}" href="#/cards" title="Нажми, чтобы начать!"">
                <img src="" alt="">
            </a>
            <a class="main__card ${localStorage.inputChecked === 'true' ? 'green' : ''}" href="#/cards" title="Нажми, чтобы начать!"">
                <img src="" alt="">
            </a>
            <a class="main__card ${localStorage.inputChecked === 'true' ? 'green' : ''}" href="#/cards" title="Нажми, чтобы начать!"">
                <img src="" alt="">
            </a>
            <a class="main__card ${localStorage.inputChecked === 'true' ? 'green' : ''}" href="#/cards" title="Нажми, чтобы начать!"">
                <img src="" alt="">
            </a>
            <a class="main__card ${localStorage.inputChecked === 'true' ? 'green' : ''}" href="#/cards" title="Нажми, чтобы начать!"">
                <img src="" alt="">
            </a>
            <a class="main__card ${localStorage.inputChecked === 'true' ? 'green' : ''}" href="#/cards" title="Нажми, чтобы начать!"">
                <img src="" alt="">
            </a>
        </div>`;

                return this.html;
    }

    afterRender() {
        this.setActions();
        // this.switchInput = document.querySelector('.switch__input');
        // this.switchInput.addEventListener('change', () => {this.getCheckedInput()});
    }
    



    // changeColorOfElem() {
    //   this.mainCard = document.querySelectorAll('.main__card');
     
    //   if (localStorage.inputChecked === 'true') {
    //     this.switchInput.checked = true;
    //     this.mainCard.forEach(card => card.classList.add('green'));
    //   //   this.mainCard.classList.add('green');
    //   } else {
    //       this.mainCard.forEach(card => card.classList.remove('green'));
    //       this.switchInput.checked = false;
    //   }
    // }
    // this.switchInput.setAttribute('checked', 'checked');
    // setActions() {
    //   // const switchInput = document.querySelector('.switch__input');

    //   // switchInput.addEventListener('change', () => {this.getCheckedInput()});
    //   // window.addEventListener('storage', () => {this.changeColorOfElem()});
      
    // }

    
}

export default Main;
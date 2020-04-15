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
            <a class="main__card ${localStorage.inputChecked === 'true' ? 'green' : ''}" href="#/cards" title="Нажми, чтобы начать!">Action (Set A)</a>
            <a class="main__card ${localStorage.inputChecked === 'true' ? 'green' : ''}" href="#/cards" title="Нажми, чтобы начать!">Action (Set B)</a>
            <a class="main__card ${localStorage.inputChecked === 'true' ? 'green' : ''}" href="#/cards" title="Нажми, чтобы начать!">Animal (Set A)</a>
            <a class="main__card ${localStorage.inputChecked === 'true' ? 'green' : ''}" href="#/cards" title="Нажми, чтобы начать!">Animal (Set B)</a>
            <a class="main__card ${localStorage.inputChecked === 'true' ? 'green' : ''}" href="#/cards" title="Нажми, чтобы начать!">Clothes</a>
            <a class="main__card ${localStorage.inputChecked === 'true' ? 'green' : ''}" href="#/cards" title="Нажми, чтобы начать!">Emotion</a>
        </div>`;

                return this.html;
    }

    afterRender() {
        this.setActions();
    }
    
    setActions() {
        this.mainContent = document.querySelector('.main');
        this.mainContent.addEventListener('click', (event) => {
            this.target = event.target;
            localStorage.Category = this.target.textContent;
  
            // switch(true) {
            //   case targetClassList.contains('card'):
            //     this.turnAroundCard();
            //     break;
            //   default:
            //     break;
            // }
  
          });
    }

    
}

export default Main;
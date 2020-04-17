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
            <a style="background-image: url('../../../img/jump.jpg');" class="main__card-bgc main__card ${localStorage.inputChecked === 'true' ? 'green' : ''}" href="#/cards" title="Нажми, чтобы начать!"><span class="main__card-text">Action (Set A)</span></a>
            <a style="background-image: url('../../../img/ride.jpg');" class="main__card-bgc main__card ${localStorage.inputChecked === 'true' ? 'green' : ''}" href="#/cards" title="Нажми, чтобы начать!"><span class="main__card-text">Action (Set B)</span></a>
            <a style="background-image: url('../../../img/dog.jpg');" class="main__card-bgc main__card ${localStorage.inputChecked === 'true' ? 'green' : ''}" href="#/cards" title="Нажми, чтобы начать!"><span class="main__card-text">Animal (Set A)</span></a>
            <a style="background-image: url('../../../img/dolphin.jpg');" class="main__card-bgc main__card ${localStorage.inputChecked === 'true' ? 'green' : ''}" href="#/cards" title="Нажми, чтобы начать!"><span class="main__card-text"> Animal (Set B)</span></a>
            <a style="background-image: url('../../../img/boot.jpg');" class=" main__card-bgc main__card ${localStorage.inputChecked === 'true' ? 'green' : ''}" href="#/cards" title="Нажми, чтобы начать!"><span class="main__card-text">Clothes</span></a>
            <a style="background-image: url('../../../img/smile.jpg');" class=" main__card-bgc main__card ${localStorage.inputChecked === 'true' ? 'green' : ''}" href="#/cards" title="Нажми, чтобы начать!"><span class="main__card-text">Emotion</span></a>
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
import Component from '../../components/component';
import CARDS from '../../components/data-cards';
class Cards extends Component {
  constructor (html) {
    super();
    this.html = html; 
    this.CARDS = require('../../components/data-cards');
    console.log('this.CARDS: ', this.CARDS.default[1]);
  }

    render() {
        this.html = 
        `<div class="cards"></div>`;

      return this.html;
    }

    // <div class="home__card"></div>
    // <div class="container-btn">
    // <div class="btn-item">
    //     <a class="home__btn-start btn-start btn-start__orange" href="#/calorie-calc" title="Нажми, чтобы начать!">
    //     <i class="fas fa-utensils"></i>
    //     Калькулятор калорий
    //     <span> Посмотрите уровень калорий ваших блюд!</span>
    //     </a>
    // </div>

    afterRender() {
        this.createCards();
        this.setActions();
    }

   

    createCards() {
      this.cardsContainer = document.querySelector('.cards');
      let res = '';
      let i = 0;
      debugger;
      switch(localStorage.Category) {
        case 'Action (Set A)':
          i = 1;
        break;
        case 'Action (Set B)':
          i = 2;
        break;
        case 'Animal (Set A)':
          i = 3;
        break;
        case 'Animal (Set B)':
          i = 4;
        break;
        case 'Clothes':
          i = 5;
        break;
        case 'Emotion':
          i = 6;
        break;
        default:
        break;
      }

      this.CARDS.default[i].forEach(card => {
        res += 
      `<div class="category__card ${localStorage.inputChecked === 'true' ? 'green' : ''}">
        <div class="card">
          <div class="card__face" style="background: no-repeat 20% center url(${card.image});">${card.word}</div>
          <div class="card__face card__face--back" style="background: no-repeat 20% center url(${card.image});">${card.translation}</div>
        </div>
      </div>`;
      })
      this.cardsContainer.innerHTML = res;
    }

    setActions() {
      this.card = document.querySelector('.card');
      // this.card.addEventListener( 'click', () => {
      //   this.card.classList.toggle('is-flipped');
      //   });

        this.cardsContainer.addEventListener('click', (event) => {
          this.target = event.target;
          // console.log('this.target: ', this.target);
          const targetClassList = this.target.classList;
          // console.log('targetClassList: ', targetClassList);

          switch(true) {
            case targetClassList.contains('card'):
              this.turnAroundCard();
              break;
            default:
              break;
          }

        });
       }

    turnAroundCard() {
      this.target.classList.toggle('is-flipped');
    }


}

export default Cards;
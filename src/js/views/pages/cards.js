import Component from '../../components/component';

class Cards extends Component {
  constructor (html) {
    super();
    this.html = html; 
    this.CARDS = require('../../components/data-cards');
  }

    render() {
        this.html = 
        `<button class="cards__button-game hidden ">Start game</button>
        <div class="cards">
        
        <audio class="audio" src=""></audio>
        </div>`;

      return this.html;
    }

    afterRender() {
        this.createCards();
        this.setActions();
    }

    createCards() {
      this.cardsContainer = document.querySelector('.cards');
      this.cardsButtonGame = document.querySelector('.cards__button-game');
      this.parentElem = this.cardsButtonGame.parentNode;
      let res = '';
      this.i = 0;

      switch(localStorage.Category) {
        case 'Action (Set A)':
          this.i = 1;
        break;
        case 'Action (Set B)':
          this.i = 2;
        break;
        case 'Animal (Set A)':
          this.i = 3;
        break;
        case 'Animal (Set B)':
          this.i = 4;
        break;
        case 'Clothes':
          this.i = 5;
        break;
        case 'Emotion':
          this.i = 6;
        break;
        default:
        break;
      }

      this.CARDS.default[this.i].forEach(card => {
        res += 
      `<div class="category__card ${localStorage.inputChecked === 'true' ? 'green' : ''}">
        <div class="card">
          <div class="card__face" style="background-image: url(${card.image});"><span class="card__text">${card.word}</span></div>
          <div class="card__face card__face--back" style="background-image: url(${card.image});"><span class="card__text">${card.translation}</span></div>
          <div class="card__rotate"></div>
        </div>
      </div>`;
      })
      this.cardsContainer.innerHTML += res;
    }

    setActions() {
      // this.cardRotate = document.querySelector('.card__rotate');
      // this.card = document.querySelector('.card');
      // this.cardRotate.addEventListener( 'click', () => {
      //   this.card.classList.toggle('is-flipped');
      //   });

        this.cardsContainer.addEventListener('click', (event) => {
          this.target = event.target;
          // console.log( this.target.closest('card'));
          // console.log('this.target: ', this.target);
          // console.log(event.currentTarget);
          const targetClassList = this.target.classList;
          // console.log('targetClassList: ', targetClassList);
          // debugger;
          switch(true) {
            case targetClassList.contains('card__face'):
              this.playAudio();
              break;
            default:
              break;
          }

        });
       }

       playAudio() {
        if (localStorage.inputChecked === 'false') {
          this.audioPlay = document.querySelector('.audio');

        this.CARDS.default[this.i].forEach(card => {
          if (card.word === this.target.textContent) {
            this.audioPlay.src = card.audioSrc;
          }

          const  playPromise = this.audioPlay.play();
          if (playPromise !== undefined) {
            playPromise.then(() => {
              throw new Error();
            })
            .catch(() => {
             
            });
          }
        });
        }

       }

      turnAroundCard() {
      
      // this.card.forEach(item =>  item.classList.add('is-flipped'));

      // .classList.add('is-flipped');
    }


}

export default Cards;
import Component from '../../components/component';

class Cards extends Component {
  constructor (html) {
    super();
    this.html = html; 
    // eslint-disable-next-line global-require
    this.CARDS = require('../../components/data-cards');
  }

        // <audio class="audio" src=""></audio>
        // <audio class="audio__btn-game"></audio>
    render() {
        this.html = 
        `<button class="cards__button-game ${localStorage.inputChecked === 'true' ? '' : 'hidden'}" data-word="">Start game</button>
        <div class="rating"></div>
        <div class="cards"></div>`;

      return this.html;
    }

    afterRender() {
      this.createCards();
      this.setActions();
    }

    createCards() {
      this.cardsContainer = document.querySelector('.cards');
      this.cardsButtonGame = document.querySelector('.cards__button-game');
      this.audioPlay = document.querySelector('.audio');
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
          <div class="card__face ${localStorage.inputChecked === 'true' ? 'card__cover' : ''}" data-info="${card.word}" style="background-image: url(${card.image});"><span class="card__text ${localStorage.inputChecked === 'true' ? 'hidden' : ''}">${card.word}</span></div>
          <div class="card__face card__face--back" style="background-image: url(${card.image});"><span class="card__text">${card.translation}</span></div>
          <div class="card__rotate ${localStorage.inputChecked === 'true' ? 'hidden' : ''}"></div>
        </div>
      </div>`;
      })
      this.cardsContainer.innerHTML += res;
    }

    setActions() {
      this.contentCards = document.querySelector('.cards');
      this.switchInput = document.querySelector('.switch');
      this.allCardFace = document.querySelectorAll('.card__face');
      this.allCardText = document.querySelectorAll('.card__text');
      this.allCardRotate = document.querySelectorAll('.card__rotate');
      this.cardsButtonGame = document.querySelector('.cards__button-game');
      this.ratingContainer = document.querySelector('.rating');
      this.firstWordOfNewArr = null;
      this.arrayOfSounds = [];
      this.getArrayOfAudio();
      this.newArrSounds = this.arrayOfSounds.sort(() => Math.random() - 0.5);
      this.cardsButtonGame.addEventListener('click', () => {this.startPlayContain()});
      this.countErrors = 0;

     // добавление карточек крутящихся
     
      // this.cardRotate = document.querySelector('.card__rotate');
      // this.card = document.querySelector('.card');
      // this.cardRotate.addEventListener( 'click', () => {
      //   this.card.classList.toggle('is-flipped');
      //   });

        this.switchInput.addEventListener('change', () => {
          this.getCheckedInput();
          // check condition of the Button for start game
          if (this.cardsButtonGame.classList.contains('repeat')) {
            this.cardsButtonGame.classList.remove('repeat');
            this.cardsButtonGame.textContent = 'Start game';
          }
        });

        this.contentCards.addEventListener('click', (event) => {
          this.target = event.target;         
          this.dataInfo = event.target.getAttribute('data-info');
          const targetClassList = this.target.classList;

          switch(true) {
            case (targetClassList.contains('card__face') 
            && localStorage.inputChecked === 'false' 
            && !this.cardsButtonGame.classList.contains('repeat')):
              this.playAudioTrain();
              break;
            case (targetClassList.contains('card__face') 
            && localStorage.inputChecked === 'true' 
            && this.cardsButtonGame.classList.contains('repeat')):
              this.checkUserChoose();
              break;

            default:
              break;
          }
        });
    }

    getArrayOfAudio() {
      this.CARDS.default[this.i].forEach(card => {
        this.arrayOfSounds.push(card.word);  
      });
    }

    playAudioTrain() {
      const audio = new Audio(`../../../audio/${this.dataInfo}.mp3`);
      setTimeout(()=>{
          audio.play();
      }, 100);
    }

    getCheckedInput() {
      if (localStorage.inputChecked === 'true')  {
          this.startGameMode();
      } else {
          this.stopGameMode();
      }
    }

    startGameMode() {        
      this.allCardFace.forEach(item => item.classList.add('card__cover'));
      this.allCardText.forEach(item => item.classList.add('hidden'));
      this.allCardRotate.forEach(item => item.classList.add('hidden'));
      this.cardsButtonGame.classList.remove('hidden');
      this.newArrSounds = this.arrayOfSounds.sort(() => Math.random() - 0.5);
    }

    stopGameMode() {
      this.allCardFace.forEach(item => {
        item.classList.remove('card__cover');
        item.classList.remove('disabledbutton');
      });

      this.allCardText.forEach(item => item.classList.remove('hidden'));
      this.allCardRotate.forEach(item => item.classList.remove('hidden'));
      this.cardsButtonGame.classList.add('hidden');
      this.arrayOfSounds = [];
      this.newArrSounds = [];
      this.getArrayOfAudio();
      this.ratingContainer.innerHTML = '';

    }

    startPlayContain () {
      this.firstWordOfNewArr = this.newArrSounds[0];
      this.audio = new Audio(`../../../audio/${this.firstWordOfNewArr}.mp3`);
      switch (true) {
        case (this.cardsButtonGame.textContent === 'Start game' 
        || this.newArrSounds.length < 8 
        && this.cardsButtonGame.textContent === 'Repeat the word?'):
          this.cardsButtonGame.textContent = 'Repeat the word?';
          this.cardsButtonGame.classList.add('repeat');
          this.audio.play();
          break;
        case this.cardsButtonGame.textContent === 'Repeat the word?':
          this.audio.play();
          break;
        default:
          break;
      }
    }

    checkUserChoose() {
      this.rating = null;
      if (this.firstWordOfNewArr === this.dataInfo) {
        this.target.classList.add('disabledbutton');
        this.newArrSounds.shift();
        if (!this.newArrSounds.length) {
          this.audio = new Audio('../../../audio/success.mp3');
          this.audio.play();
          this.getfinishPage();
        } else {
          this.rating = true;
          this.audio = new Audio('../../../audio/correct.mp3');
        this.audio.play();
          this.startPlayContain();
          this.getRatingOfUser();
        }
      } else {
        this.rating = false;
        this.countErrors += 1;
        this.audio = new Audio('../../../audio/error.mp3');
        this.audio.play();
        this.getRatingOfUser();

      }
    }

    getRatingOfUser() {
      this.ratingElem = document.createElement('div');

      if (!this.rating) {
        this.ratingElem.innerHTML = `<div class="rating__elem rating__error"></div>`;
      } else {
        // this.ratingElemCorrect = `<div class="rating__elem rating__correct"></div>`;
        this.ratingElem.innerHTML = `<div class="rating__elem rating__correct"></div>`;
      }
      this.ratingContainer.prepend(this.ratingElem);
    }

    getfinishPage() {
      this.cardsContainer.innerHTML = '';
      this.ratingContainer.innerHTML = '';
      this.cardsButtonGame.classList.add('hidden');
      this.ratingElem = document.createElement('div');
       
      if (this.countErrors === 0) {
        this.ratingElem.innerHTML = `<div class="results">Не допустил ни одной Ошибки. Ты молодец!!!</div>`;
        // this.ratingElem.textContent = ;
        
      } else {
        this.ratingElem.innerHTML = `<div class="results">У тебя ${this.countErrors} ошибок. Нужно ещё поучиться!</div>`;
      }

      this.cardsContainer.append(this.ratingElem);

      setTimeout(()=>{
       
        document.location.href = "#/main";
  }, 3000)
      // console.log('this.countErrors: ', this.countErrors);
    }

      turnAroundCard() {
      // this.card.forEach(item =>  item.classList.add('is-flipped'));
      // .classList.add('is-flipped');
    }


}

export default Cards;
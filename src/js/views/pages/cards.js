import Component from '../../components/component';

class Cards extends Component {
  constructor (html) {
    super();
    this.html = html; 
    this.CARDS = require('../../components/data-cards');
  }

    render() {
        this.html = 
        `<button class="cards__button-game ${localStorage.inputChecked === 'true' ? '' : 'hidden'}">Start game</button>
        <div class="cards">
        <audio class="audio__btn-game" src=""></audio>
        <audio class="audio" src="${this.newSound}"></audio>
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
      this.audioPlay = document.querySelector('.audio');
      this.audioPlayGame = document.querySelector('.audio__btn-game');
      this.arrayOfSounds = [];
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
      // console.log(this.CARDS.default[this.i]);
      this.CARDS.default[this.i].forEach(card => {
        this.arrayOfSounds.push(card.audioSrc);
        res += 
      `<div class="category__card ${localStorage.inputChecked === 'true' ? 'green' : ''}">
        <div class="card">
          <div class="card__face ${localStorage.inputChecked === 'true' ? 'card__cover' : ''}" style="background-image: url(${card.image});"><span class="card__text ${localStorage.inputChecked === 'true' ? 'hidden' : ''}">${card.word}</span></div>
          <div class="card__face card__face--back" style="background-image: url(${card.image});"><span class="card__text">${card.translation}</span></div>
          <div class="card__rotate ${localStorage.inputChecked === 'true' ? 'hidden' : ''}"></div>
        </div>
      </div>`;
      })
      this.cardsContainer.innerHTML += res;
    }

    setActions() {
      this.contentContainer = document.querySelector('.content-container');
      this.switchInput = document.querySelector('.switch');
      this.allCardFace = document.querySelectorAll('.card__face');
      this.allCardText = document.querySelectorAll('.card__text');
      this.allCardRotate = document.querySelectorAll('.card__rotate');
      this.cardsButtonGame = document.querySelector('.cards__button-game');
      this.newArrSounds = this.arrayOfSounds.sort(() => Math.random() - 0.5);
     
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

        this.contentContainer.addEventListener('click', (event) => {
          this.target = event.target;
          // console.log( this.target.closest('card'));
          // console.log(event.currentTarget);
          const targetClassList = this.target.classList;
          // console.log('targetClassList: ', targetClassList);
          // debugger;
          switch(true) {
            case (targetClassList.contains('card__face') 
            && localStorage.inputChecked === 'false' 
            && !this.cardsButtonGame.classList.contains('repeat')):
              this.playAudio();
              break;
            case (targetClassList.contains('card__face') 
            && localStorage.inputChecked === 'true' 
            && this.cardsButtonGame.classList.contains('repeat')):
              this.checkUserChoose();
              break;
            case targetClassList.contains('cards__button-game'):
              this.startPlayContain();
            break;
            default:
              break;
          }

        });
       }

       playAudio() {
         // this.cardsButtonGame.textContent === 'Repeat the word?' && localStorage.inputChecked === 'true' || 
      //  if (localStorage.inputChecked === 'false') {
          // this.audioPlay = document.querySelector('.audio');

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
       }

       stopGameMode() {
        this.allCardFace.forEach(item => item.classList.remove('card__cover'));
        this.allCardText.forEach(item => item.classList.remove('hidden'));
        this.allCardRotate.forEach(item => item.classList.remove('hidden'));
        this.cardsButtonGame.classList.add('hidden');
       }

       startPlayContain () {
        switch (true) {
              // case (this.cardsButtonGame.textContent === 'Start game' || this.newArrSounds === [] && this.cardsButtonGame.textContent === 'Repeat the word?'):
              //     this.audioPlay.src = '../../../audio/success.mp3';
              //     this.audioPlay.play();
              // break;
              case (this.cardsButtonGame.textContent === 'Start game' || this.newArrSounds.length < 8 && this.cardsButtonGame.textContent === 'Repeat the word?'):
                this.cardsButtonGame.textContent = 'Repeat the word?';
                this.cardsButtonGame.classList.add('repeat');
                // console.log('this.newArrSounds: ', this.newArrSounds);
                this.newSound = this.newArrSounds[0];
                this.audioPlayGame.src = this.newSound;
                this.audioPlayGame.play();
                // this.newArrSounds.shift();
                // console.log('this.newArrSound: ', this.newArrSounds);
                break;
              case this.cardsButtonGame.textContent === 'Repeat the word?':
                if ( this.audioPlayGame.play() !== undefined) {
                  this.audioPlayGame.play().then(() => {
                    throw new Error();
                  })
                  .catch(() => {
                   
                  });
                }
                break;
              default:
                break;
            }
       }

       checkUserChoose() {
          this.CARDS.default[this.i].forEach(card => {

            if (card.word === this.target.textContent) {
              if (card.audioSrc === this.newSound) {
                this.audioPlay.src = '../../../audio/correct.mp3';
                this.audioPlay.play();
                this.target.classList.add('disabledbutton');


                this.newArrSounds.shift();
                console.log('this.newArrSounds: ', this.newArrSounds);
                
                if (!this.newArrSounds.length) {
                  this.audioPlay.src = '../../../audio/success.mp3';
                  this.audioPlay.play();
                } else {
                  this.startPlayContain();
                }

              } else {
                this.audioPlay.src = '../../../audio/error.mp3';
                this.audioPlay.play(); 
                console.log(false);}
            }
           
          });
       }

      turnAroundCard() {
      // this.card.forEach(item =>  item.classList.add('is-flipped'));
      // .classList.add('is-flipped');
    }


}

export default Cards;
import Component from '../../components/component';
// import CARDS from '../../components/cards';
class Cards extends Component {
  constructor (html) {
    super();
    this.html = html; 
  }

    render() {
        this.html = 
        `<div class="home"> 
           
        </div>`;

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

    // afterRender() {
    //     this.setActions();
    // }

    // setActions() {

    // }
}

export default Cards;
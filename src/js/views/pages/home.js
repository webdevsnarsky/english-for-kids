import Component from '../../components/component';
// import CARDS from '../../components/cards';
class Home extends Component {
  constructor (html) {
    super();
    this.html = html; 
  }

    render() {
        this.html = 
        `<div class="home"> 
            <a class="home__link" href="#/main" title="Нажми, чтобы начать!">Начать Игру!</a>
        </div>`;

                return this.html;
    }
}

export default Home;